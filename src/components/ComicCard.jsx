import React from 'react';
import '../App.css';
import {Button, Card} from 'react-bootstrap';

const ComicCard = ({comic,favs,setFavs,comics}) => {

  const {id,title,thumbnail} = comic;

  
  const addFav = (e) => {
    const newComic = comics.find(item => item.id === e)
    setFavs([...favs, newComic])
    console.log(favs)

  }

  const deleteFav = (e) => {
    console.log("delete: " + favs)
    const updatedFavs = favs.filter(item => item.id !== e);
    setFavs(updatedFavs);
  }

  return ( 
    <Card  key= {comic.id}className="h-100 position-relative" style={{ width: '15rem' } }>
        {
          comics
          ? (<Button variant="danger" onClick={() => addFav(id)}><i class="bi bi-heart-fill"></i></Button>)
          : (<Button variant="danger" onClick={() => deleteFav(id)}><i class="bi bi-heartbreak-fill"></i></Button>)
        }
        <Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} width={300} height={380} />
        <Card.Body >
            <Card.Title className='card-transparent'>{title}</Card.Title>
        </Card.Body>
    </Card>
   );
}
 
export default ComicCard;