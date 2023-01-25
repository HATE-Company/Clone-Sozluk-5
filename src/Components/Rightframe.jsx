import Card from 'react-bootstrap/Card';
import catnews from '../images/catnews.png';
import sportnews from '../images/sportnews.jpg';
import technews from '../images/technews.jpg';

function Rightframe() {
  return (
    <>
        <Card className="bg-dark text-white m-2">
            <Card.Img src={catnews} alt="Card image" height={180} width={260} />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white m-2 ">
            <Card.Img src={sportnews} alt="Card image" height={180} width={260} />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    
            </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark text-white m-2" >
            <Card.Img src={technews} alt="Card image" height={180} width={260} />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    
            </Card.ImgOverlay>
        </Card>
    </>
  );
}

export default Rightframe;