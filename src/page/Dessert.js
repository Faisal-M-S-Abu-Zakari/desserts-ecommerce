import React from 'react'
import Products from '../components/Products'
import Cart from '../components/Cart'
import { Col, Row , Container} from 'react-bootstrap'
import Popup from '../components/Popup'
import { useSelector } from 'react-redux'

const Dessert = () => {
  const show = useSelector(state => state.Show)
  
  return (
    <>
      <div className='py-5 px-4 dessert'>
        <Row>
            <Col lg={8} md={12} sm={12} className="mb-4" >
                <Products />  
            </Col>
            <Col lg={4} md={12} sm={12}>
                <Cart />
            </Col>
        </Row>
      </div>
      {show && <Popup /> }
      
    </>
  )
}

export default Dessert
