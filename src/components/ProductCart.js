import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../Slice/ProductSlice';
import { Appear } from '../Slice/ShowPopup';
const ProductCart = ({btnWords , onClick}) => {
    const store = useSelector(state=>state.Product)
    const dispatch = useDispatch()
    const total = store.reduce((acc , item) => acc + item.Price * item.quantity , 0)
    const proPrice=(item)=>{
        return item.Price * item.quantity
    }
  return (
     <ListGroup >

      {
        store.map((item , index) => {
            return (
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center my-2"
                key={index}
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">{item.Title}</div>
                <div>
                    <span >{`X${item.quantity}`}</span><span className='mx-4'>{`${item.Price}$`}</span><span>{`${proPrice(item)}.00$`}</span>
                </div>
                </div>
                <Badge bg="transparent" pill className="icon-container">
                    <FontAwesomeIcon icon={faCircleXmark} size="2x"  color='black' onClick={()=>dispatch(removeProduct(index))}/>
                </Badge>
            </ListGroup.Item>
        )})}
        <div className='d-flex justify-content-between align-items-center px-4 mt-2'>
            <span className='fs-5'>Order Total</span>
            <span className='fs-2 fw-bold'>{`$${total}`}</span>
        </div>
        <button className='confirm mt-3' onClick={onClick}>{btnWords}</button>
    </ListGroup>
  )
}

export default ProductCart
