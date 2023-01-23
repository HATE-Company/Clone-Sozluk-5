import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.svg';
import game from '../icons/game.svg';
import sports from '../icons/sports.svg';
import television from '../icons/television.svg';
import celebrity from '../icons/celebrity.svg';
import business from '../icons/business.png';
import more from '../icons/more.svg';
import Dropdown from 'react-bootstrap/Dropdown';

function Leftframe() {
  return (

    <Container className='text-white p-3 ' >

    <ListGroup className=' bg-secondary bg-opacity-25 text-center p-3  '>
        
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 ' >

          <Dropdown>

            <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
              Topics
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

              <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                <img src={ game } alt="game" /> Gaming
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
              </Dropdown.Menu>

          </Dropdown>
          
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

            <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
              <img src={sports} alt="sports" /> Sports
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

              <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
              <img src={television} alt="television" /> Television
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

              <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                <img src={celebrity} alt="celebrity" /> Celebrity
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

            <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
              <img src={business} alt="business" /> Business
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>
          
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >

          <Dropdown>

              <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                <img src={more} alt="more" /> More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
              </Dropdown.Menu>

          </Dropdown>
          
        </ListGroup.Item>

    </ListGroup>


    <ListGroup className=' bg-secondary bg-opacity-25 p-3 mt-4'>
        
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 ' >
          <img src={logo} alt="logo" className='' height={50}/>
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          User Agreement
        </ListGroup.Item>
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          Content Policy
        </ListGroup.Item>
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          Privacy Policy
        </ListGroup.Item>
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          Cokies Policy
        </ListGroup.Item>
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          Interest-Based Ads
        </ListGroup.Item>
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 text-center' >
          More
        </ListGroup.Item>

    </ListGroup>

    </Container>
  );
}

export default Leftframe;