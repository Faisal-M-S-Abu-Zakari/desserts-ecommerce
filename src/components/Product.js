import {Card  } from 'react-bootstrap'
import add from '../images/icon-add-to-cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../Slice/ProductSlice'
const Product = ({photo , Title , Info , Price}) => {
    // const store = useSelector(state => state.Product)
    const dispatch = useDispatch()
    
  return (
        <Card style={{ width: '18rem' }} className='p-3 Card'>
            <Card.Img variant="top" src={photo} className='rounded-5' /> 
            <div className='d-flex justify-content-center'>
                <button variant="primary" onClick={()=> dispatch(addProduct({Info, photo, Title , Price}))}>
                        <img src={add}/>Add TO Cart
                </button>
            </div>                       
            <Card.Body>
                <Card.Title  className='text-muted'>
                    <h5 className='title'>{Title}</h5>
                </Card.Title>
                <Card.Title >
                    <h5 className='info'>{Info}</h5>
                </Card.Title>
                <Card.Text>
                    <h6 className='price'>{`$${Price}`}</h6>
                </Card.Text>
            </Card.Body>
        </Card> 
  )
}

export default Product
