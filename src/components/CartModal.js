import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CartContext} from '../Contexts/Cart';
import cartImg from '../images/shopping-cart.svg';
import CartComponent from './CartComponent';

const CartModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        <img src={cartImg} alt='Cart' className='cartImg'/>
        <CartContext.Consumer>
            {({cartItem})=><span>{cartItem.length}</span>}
        </CartContext.Consumer>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Your cart your choice</ModalHeader>
        <ModalBody>
          <CartContext.Consumer>
              {({cartItem})=><CartComponent cartItem={cartItem}/>}
          </CartContext.Consumer>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Buy all</Button>{' '}
          <Button color="secondary" onClick={toggle}>Lemme check some more</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CartModal;