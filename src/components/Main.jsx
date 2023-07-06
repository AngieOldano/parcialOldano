import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel  from './ControlledCarousel';
import ComicCard from './ComicCard';

const Main = ({search,setSearch,favs,setFavs}) => {

    const [url,setUrl] = useState('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=df79b836e83a37221efe4304eca4f9b0&hash=b8b320cc0d902f3d0b65122b58c3c0a4')
    const [comics, setComics] = useState([]);

    useEffect(() => { 
      readAPIMarvel();
    },[search]);

    const readAPIMarvel = async() => {    
      try {
        const api = await fetch(url + search + "&limit=99");
        const data = await api.json();
        const result = data.data.results;
        setComics(result);
      } catch (error) {
        console.log(error);
      }
    };
  

    return (
      <Fragment> 
        <div className='background'>
          <ControlledCarousel
            setSearch = {setSearch}
          />
          <Container>
            <Row>
              {
                comics.map( comic =>
                  <Col key={comic.id} className='ml-2 mt-4 mb-4 d-flex justify-content-center'>
                    <ComicCard
                      comic = {comic}
                      favs = {favs}
                      setFavs={setFavs}
                      comics = {comics}
                    />
                  </Col>
                )
              } 
            </Row>
          </Container>
        </div>
      </Fragment>
    );
}
 
export default Main;