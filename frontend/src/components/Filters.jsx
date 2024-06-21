// import React, { useState } from "react";
// import { Form, Col, Row, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { filterPizza } from "../actions/pizzaAction";
// const Filters = () => {
//   const [searchkey, setsearchkey] = useState("");
//   const [category, setcategory] = useState("all");
//   const dispatch = useDispatch();
//   return (
//     <div className="p-4 bg-info mt-4">
//       <Form>
//         <Row>
//           <Col>
//             <Form.Control
//               value={searchkey}
//               onChange={(e) => setsearchkey(e.target.value)}
//               placeholder="search pizza"
//             />
//           </Col>
//           <Col>
//             <select
//               className="form-select"
//               value={category}
//               onChange={(e) => setcategory(e.target.value)}
//             >
//               <option>All</option>
//               <option>veg</option>
//               <option>nonveg</option>
//             </select>
//           </Col>
//           <Col>
//             <Button
//               onClick={() => {
//                 dispatch(filterPizza(searchkey, category));
//               }}
//             >
//               Search
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };

// export default Filters; 

import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";

const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-4" style={{ backgroundColor: '#343a40', borderRadius: '8px' }}>
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="Search pizza"
              style={{ borderRadius: '4px', borderColor: '#ff6347' }}
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              style={{ borderRadius: '4px', borderColor: '#ff6347' }}
            >
              <option value="all">All</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
              style={{ backgroundColor: '#ff6347', borderColor: '#ff6347', borderRadius: '4px' }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
