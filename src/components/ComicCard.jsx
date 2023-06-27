import React from 'react';
import {Button, Card} from 'react-bootstrap';


const ComicCard = ({name,image}) => {
    return ( 
        <Card className="h-100" style={{ width: '18rem' } }>
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <img src={image} width={250} height={250} />
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
     );
}
 
export default ComicCard;