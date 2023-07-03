import React from 'react';
import {Button, Card} from 'react-bootstrap';
import '../App.css';

// <Button variant="primary">Go somewhere</Button>
const ComicCard = ({name,image}) => {
    return ( 
        <Card className="h-100" style={{ width: '18rem' } }>
            <Card.Img variant="top" src={image} width={300} height={380} />
            <Card.Body >
                <Card.Title className='card-transparent'>{name}</Card.Title>
            </Card.Body>
        </Card>
     );
}
 
export default ComicCard;