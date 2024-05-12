import axios from "axios";
import swal from "sweetalert";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/pizzas/getAllPizzas"
    );
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/pizzas/addpizza", {
      pizza,
    });
    //console.log(response);
    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/pizzas/getpizzabyid",
      { pizzaId }
    );
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: err });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/pizzas/updatepizza",
      {
        updatedPizza,
      }
    );
    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (err) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: err });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post(
      process.env.REACT_APP_BACKEND_URL + "/pizzas/deletepizza",
      { pizzaId }
    );
    swal("Pizza Deleted Success! !", "success");
    window.location.href = "/admin/pizzalist";
    // console.log(res);
  } catch (error) {
    swal("Error While Deleteing Pizza🥲");
  }
};

export const filterPizza = (searchkey, category) => async (dispatch) => {
  let filteredPizza;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/pizzas/getAllPizzas"
    );
    filteredPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filteredPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filteredPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};
