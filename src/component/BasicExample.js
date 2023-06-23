import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({e}) {
  return (
    <Card className='card' style={{ width: '18rem',color:'blue',marginLeft:'5%',boxShadow:'red , 5%' }}>
      <Card.Img  src={e.img} />
      <Card.Body>
      <Card.Title>{e.name}</Card.Title>
            <Card.Text>{e.age} </Card.Text>
            <Card.Text>{e.born}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default BasicExample;