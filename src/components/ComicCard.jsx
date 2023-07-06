import React from 'react';
import '../App.css';
import {Button, Card} from 'react-bootstrap';

const ComicCard = ({comic,favs,setFavs,comics}) => {

  const {id,title,thumbnail} = comic;

  const addFav = (id) => {
    if (!favs.find(comic => comic.id === id)) {
      const newComic = comics.find(item => item.id === id)
      setFavs([...favs, newComic])
    }
  }

  const deleteFav = (id) => {
    const updatedFavs = favs.filter(item => item.id !== id);
    setFavs(updatedFavs);
  }

  return ( 
    <Card  key= {comic.id}className="h-100 position-relative" style={{ width: '15rem' } }>
        {
          comics
          ? (<Button variant="danger" onClick={() => addFav(id)}><i className="bi bi-heart-fill"></i></Button>)
          : (<Button variant="danger" onClick={() => deleteFav(id)}><i className="bi bi-heartbreak-fill"></i></Button>)
        }
        <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} width={300} height={380} />
        <Card.Body >
            <Card.Title className='card-transparent'>{title}</Card.Title>
        </Card.Body>
    </Card>
   );
}
 
export default ComicCard;