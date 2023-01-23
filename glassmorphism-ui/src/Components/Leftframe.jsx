import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.svg';
import game from '../icons/game.svg';
import sports from '../icons/sports.svg';
import television from '../icons/television.svg';
import celebrity from '../icons/celebrity.svg';
import business from '../icons/business.png';
import more from '../icons/more.svg';


function Leftframe() {
  return (

    <Container className='text-white p-3 ' >

    <ListGroup className=' bg-secondary bg-opacity-25 text-center p-3  '>
        
        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25 ' >
          Topics
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={game} alt="game" /> Gaming
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={sports} alt="sports" /> Sports
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={television} alt="television" /> Television
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={celebrity} alt="celebrity" /> Celebrity
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={business} alt="business" /> Business
        </ListGroup.Item>

        <ListGroup.Item className='border-0 text-white bg-secondary bg-opacity-25' >
          <img src={more} alt="more" /> More
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