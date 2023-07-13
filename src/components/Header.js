import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react-redux'
function Header() {
  const cartProducts = useSelector(state => state.cart)
return(
  <div className="Header">
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link} href="#action1">Home</Nav.Link>
          </Nav>
          <div className="d-flex">
              <Nav.Link to="/cart" as={Link} href="#action1">Cart {cartProducts.length}</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
export default Header;