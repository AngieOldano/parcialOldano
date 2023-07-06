import React, { Fragment } from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import ComicCard from "./ComicCard"

const Favs = ({favs,setFavs}) => {

  const deleteAll= () => {
    const newFavs = []
    setFavs(newFavs);
  }

  return ( 
    <Fragment>
      <div className='background p-4'>
      <Button variant="secondary" onClick={deleteAll}>Delete All</Button>
        <Container >
          <Row>
            {
              favs.map( comic =>
                <Col key={comic.id} className='ml-2 mt-4 d-flex justify-content-center'>
                  <ComicCard
                    comic = {comic}
                    setFavs={setFavs}
                    favs = {favs}
                  />
                </Col>)
            } 
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
 
export default Favs;