const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const cors=require("cors");
//const { bgMagenta } = require('colors')

//cnfig dotenv
dotenv.config();

//connection
connectDB();

const app = express();

//middlewares
app.use(cors('*'));
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

// app.get('/',(req, res)=>{
//     res.send('<h1>Hello from node server</h1>')
// })
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server vai nodemon</h1>");
  });
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode at port no. ${process.env.PORT}`
      .bgMagenta.white
  );
});
