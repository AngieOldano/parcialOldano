import React from 'react';
import {Button, Card} from 'react-bootstrap';


// <Button variant="primary">Go somewhere</Button>
const ComicCard = ({name,image}) => {
    return ( 
        <Card className="h-100" style={{ width: '18rem' } }>
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <img src={image} width={250} height={250} />
                </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default ComicCard;