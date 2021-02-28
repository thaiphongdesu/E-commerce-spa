import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardCartItem from "./CardCartItem";

const CartComponent = (props)=>{
    const {cartItem} = props;
    return (
      <Container>
        <Row>
          {cartItem.map((product) => (
            <Col xs='6'>
              <CardCartItem item={product}/>
            </Col>
          ))}
        </Row>
      </Container>
    );
}
export default CartComponent;