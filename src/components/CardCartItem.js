import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {CartContext} from '../Contexts/Cart';

const CardCartItem = (props) => {
    const {id, name, imgURL, description} = props.item; 
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={imgURL} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{id}</CardSubtitle>
          <CardText>{description}</CardText>
          <CartContext.Consumer>
            {({removeItem})=><Button onClick={()=>removeItem(props.item)}>Remove</Button>}
          </CartContext.Consumer>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCartItem;