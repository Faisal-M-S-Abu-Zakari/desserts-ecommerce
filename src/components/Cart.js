import React from 'react'
import noProduct from '../images/empty.png'
import {useDispatch, useSelector } from 'react-redux'
import ProductCart from './ProductCart'
import {Appear} from '../Slice/ShowPopup'
const Cart = () => {
  const store = useSelector((state) => state.Product)
    const dispatch = useDispatch()
  return (
            <>
                    <div className='Cart py-3'>
                      <h1 className='fs-3 fw-bold my-3'>Your Cart({store.length})</h1>
                      {
                        store.length ===0 ? 
                        <div>
                            <div className='d-flex justify-content-center my-3'>
                              <img src={noProduct}/>
                            </div>
                            <div className='d-flex justify-content-center my-3'>
                              <span className='fs-5 fw-lighter text-dark'>Your added items will appear here</span>
                            </div>
                         </div>:
                         <ProductCart btnWords={'Confirm Order'} onClick={()=>dispatch(Appear(true))}/>
                      }
                    </div>
            </>
  )
}

export default Cart
// onClick={() => dispatch(addProduct({photo , Title , Info , Price}))}