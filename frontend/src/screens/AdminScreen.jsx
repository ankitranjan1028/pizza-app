import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, ButtonGroup, Container, Col } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import UserList from '../components/Admin/UserList'
import PizzasList from '../components/Admin/PizzasList'
import AddNewPizza from '../components/Admin/AddNewPizza'
import OrderList from '../components/Admin/OrderList'
import EditPizza from './../components/Admin/EditPizza'

const AdminScreen = ({ history }) => {
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  console.log("currentUser",currentUser)

  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
      window.location.href = "/"
    }
  }, [currentUser])

  return (
    <>
      <Container>
        <Row>
          <h1 className='p-2 text-center bg-dark text-light '>Admin Panel</h1>
          <Col md="4">
            <ButtonGroup vertical style={{ minHeight: "300px" }}>
              <Button onClick={() => history.push('/admin/userlist')} >All Users</Button>
              <Button onClick={() => history.push('/admin/pizzalist')} >All Pizzas</Button>
              <Button onClick={() => history.push('/admin/addnewpizza')}>All New Pizza</Button>
              <Button onClick={() => history.push('/admin/orderlist')}>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md="8">
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/userlist" component={UserList} exact />
              <Route path="/admin/editpizza/:pizzaId" component={EditPizza} exact />
              <Route path="/admin/pizzalist" component={PizzasList} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminScreen
