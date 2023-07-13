import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../store/cartSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cart() {
  
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  const removeItem = (id) => {
    dispatch(remove(id))
  }

  const results = products.map(product => (
  <div className = "col-lg-4 col-md-6 col-12">
    <Card key={product.id}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <div>Rs {product.price}</div>
        <Card.Text>
          {(product.description).slice(0,100)}...
        </Card.Text>
        <Button variant="primary" onClick={() => removeItem(product.id)}>RemoveItem</Button>
      </Card.Body>
    </Card>
  </div>       
  ))                                            
return(
  <div class="container">
    <h2 className="text-center mt-3 mb-5" >Cart Products</h2>
    <div class="row">
      {(results.length) ? results : <p>Your cart is empty</p>}
    </div>
  </div>
  )
}
export default Cart;