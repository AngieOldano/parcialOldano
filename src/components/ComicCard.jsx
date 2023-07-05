import React from 'react';
import '../App.css';
import {Button, Card} from 'react-bootstrap';

const ComicCard = ({name,image,comic,favs,setFavs,comics}) => {

  const fav = {id}

  const addFav = (comic) => {
    setFavs([...favs, comic])
  }

  const deleteFav = (comic) => {
    const updatedFavs = favs.filter(item => item !== comic);
    setFavs(updatedFavs);
  }

  return ( 
    <Card className="h-100 position-relative" style={{ width: '15rem' } }>
        {
          comics
          ? (<Button variant="danger" onClick={() => addFav(comic)}><i class="bi bi-heart-fill"></i></Button>)
          : (<Button variant="danger" onClick={() => deleteFav(comic)}><i class="bi bi-heartbreak-fill"></i></Button>)
        }
        <Card.Img variant="top" src={image} width={300} height={380} />
        <Card.Body >
            <Card.Title className='card-transparent'>{name}</Card.Title>
        </Card.Body>
    </Card>
   );
}
 
export default ComicCard;