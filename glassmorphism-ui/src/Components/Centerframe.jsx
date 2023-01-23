import React from 'react'
import Card from 'react-bootstrap/Card';
import crypto from '../images/crypto.svg';
import userpost from '../icons/userpost.svg';


function Centerframe() {
  return (
<>
    <div className="bg-secondary bg-opacity-25 text-center text-white p-3 rounded-3  ">
        {/* <h3 className='sectionTitle'>Trends for You</h3> */}




      <Card className='bg-dark'>
        <Card.Header className='d-flex align-self-start'>
          <Card.Img src={userpost} height={20} width={20} className="m-1"/> Fourthy
        </Card.Header>

        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card className='bg-dark'>

        <Card.Header className='d-flex align-self-start'>
          <Card.Img src={userpost} height={20} width={20} className="m-1"/> CryptoCurrent
        </Card.Header>

        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={crypto} />
      </Card>

      <br />

      <Card className='bg-dark'>

        <Card.Header className='d-flex align-self-start'>
          <Card.Img src={userpost} height={20} width={20} className="m-1"/> Prettyflw
        </Card.Header>
        
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.  Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
    </>
  )
}

export default Centerframe