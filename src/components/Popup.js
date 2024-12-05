import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {Appear} from '../Slice/ShowPopup'
import ProductCart from './ProductCart';
import { clear } from "../Slice/ProductSlice";
function Popup() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    dispatch(Appear(false))
  };
  const start = ()=>{
    dispatch(Appear(false)) ; 
    dispatch(clear())
  }
  const dispatch = useDispatch()
  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ProductCart btnWords={'Start New Order'}  onClick={start}/>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Popup;