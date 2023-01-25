import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.svg';
import user from '../images/user.svg';
import search from '../icons/search.svg';


function NavSearch() {
  return (
    <Navbar bg="none" expand="lg" >
      <Container className="d-flex flex-row justify-content-between container-fluid mt-3 mb-3" >

        <Navbar.Brand href="#">
            <img src={logo} alt="logo" className='' />
        </Navbar.Brand>
        
        <Navbar.Collapse id="navbarScroll" className="d-flex flex-row justify-content-between ">
        
            <Nav></Nav>
            
            <Form className="d-flex col-sm-6 " >

                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 form-control-lg bg-transparent text-white text-center"
                aria-label="Search"
                title={<img src={ search } alt="search" /> }             
                />
                
            </Form>
            

            <NavDropdown 
                title={<img src={ user } alt="user" /> }
                id="navbarScrollingDropdown"
                className='text-white '
                style={{fontSize: '1.5rem'}}
              >
                <NavDropdown.Item href="#action2" className='' >Yusuf</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">Sign Out</NavDropdown.Item>

            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSearch;