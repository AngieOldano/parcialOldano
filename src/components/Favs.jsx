import React, { Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import ComicCard from "./ComicCard"

const Favs = ({favs}) => {

  return ( 
    <Fragment>
      <div className='background p-4'>
        <Container >
          <Row>
            {
              favs.map( fav =>
                <Col className='ml-2 mt-4 d-flex justify-content-center'>
                  <ComicCard
                    name = {fav.title}
                    image = {`${fav.thumbnail.path}.${fav.thumbnail.extension}`}
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