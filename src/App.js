import './App.css';
import {useEffect,useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './components/Header.js'
import Dashboard from './components/Dashboard.js'
import Cart from './components/Cart.js'
import { Routes, Route} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {add} from './store/cartSlice'
function App() {

const dispatch = useDispatch()
const [products,setProducts] = useState([])
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(result => setProducts(result))
},[])

const addToCart = (product) =>{
  dispatch(add(product))
}

const results = products.map(product => (
  <div key={product.id} className = "col-lg-4 col-md-6 col-12">
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <div>Rs {product.price}</div>
        <Card.Text>
          {(product.description).slice(0,100)}...
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
  
))


  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={
        <Dashboard results={results}/>
      }>
      </Route>
      <Route path="/cart" element={
        <Cart />
      }>
      </Route>
    </Routes>
    </div>
  );
}

export default App;