import React, { Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ComicCard from "./ComicCard"

const Favs = ({favs,setFavs}) => {

  return ( 
    <Fragment>
      <div className='background p-4'>
        <Container >
          <Row>
            {
              favs.map( comic =>
                <Col className='ml-2 mt-4 d-flex justify-content-center'>
                  <ComicCard
                    //key = {comic.id} 
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