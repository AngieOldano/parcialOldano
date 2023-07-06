import React from 'react';
import { useState } from 'react';
import '../App.css';
import {Button, Card} from 'react-bootstrap';

const ComicCard = ({comic,favs,setFavs,comics}) => {

  const {id,title,thumbnail} = comic;
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const addFav = (id) => {
    setIsClicked(true)
    if (setIsClicked) {
      deleteFav(id);
      setIsClicked(false)
    } 
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
          ? (<Button variant='link' size='lg' className='position-absolute bottom-0 end-0' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => addFav(id)}>
              <i className={`bi ${isHovered || isClicked || (favs.find(comic => comic.id === id)) ? 'bi-heart-fill text-danger' : 'bi-heart text-danger'}`}></i>
            </Button>)
          : (<Button variant='link' size='lg' className='position-absolute bottom-0 end-0' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => deleteFav(id)}>
              <i className={`bi ${isHovered || isClicked ? 'bi-heart text-danger' : 'bi-heart-fill text-danger'}`}></i>
            </Button>)
        }
        <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} width={300} height={380} />
        <Card.Body >
            <Card.Title className='card-transparent'>{title}</Card.Title>
        </Card.Body>
    </Card>
   );
}
 
export default ComicCard;