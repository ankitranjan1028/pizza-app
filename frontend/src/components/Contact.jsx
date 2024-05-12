/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Container, Row, Col, Table, Image} from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { GoDeviceMobile } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
    <Row>
        <Col md={6}>
            <h1>Techinfo YT Pizza Shop</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatum! Rem ea magni, eligendi quas voluptates alias ducimus ad et maiores, explicabo esse, ipsum eaque nobis vitae voluptatem nostrum officia tempore aliquid! Neque corporis inventore iusto? Quos a aspernatur necessitatibus praesentium quasi itaque, consectetur aperiam minima, sapiente tempora ipsam velit! Voluptatibus veritatis, molestias, adipisci sed perferendis optio nulla alias minus perspiciatis veniam itaque ipsam voluptatem? Sapiente quos asperiores at iure. Maxime numquam culpa alias totam iure dolor quaerat, reprehenderit expedita error unde repellat, neque porro vitae dolorem molestiae asperiores officiis esse eveniet voluptates. Consequatur aliquid, quis commodi, corporis nesciunt dolorum saepe rem odit natus quas nemo molestias quae mollitia obcaecati, doloribus facere ab repudiandae fugit sunt. A odit porro quo reiciendis, error doloremque, sit facere voluptatum ad sequi adipisci? Sapiente odit mollitia delectus incidunt minima tempore alias qui numquam aut, voluptate, at error consectetur dolorum vel saepe nulla, ut illum magni magnam eaque in! Ab, maiores et quaerat sint repudiandae qui id molestias excepturi placeat atque accusantium voluptates numquam accusamus error cupiditate aliquid rem consectetur dolor a eius reprehenderit incidunt corporis? Eligendi maxime qui optio, neque nemo id fuga vel vitae tempora. Numquam voluptates voluptas provident error excepturi, reprehenderit consequatur?
            </p>
    <Table striped bordered hover className='text-center' >
      <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={3}>----Contact Details----</th>
          {/* <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <GoDeviceMobile/>
            </td>
          <td>Phone</td>
          <td>8083233290</td>
          {/* <td>@mdo</td> */}
        </tr>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Call</td>
          <td>7568047623</td>
          {/* <td>@mdo</td> */}
        </tr>
        <tr>
          <td>
            <AiOutlineMail/>
            </td>
          <td>email</td>
          <td>aankitrn17@gmail.com</td>
          {/* <td>@mdo</td> */}
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
            </Col>
            <Col md={6}>
                <Image src="images/farmhouse.jpg" style={{width:'100%', height:'100%'}}></Image>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
