import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import ControlledCarousel  from './components/ControlledCarousel';
import ComicCard from './components/ComicCard';

//https://gateway.marvel.com:443/v1/public/comics?apikey=df79b836e83a37221efe4304eca4f9b0


//Your public key / apikey
//df79b836e83a37221efe4304eca4f9b0
//Your private key
//b6355a0e115ae40e6488b1d9775c4c198f6a3f2f

//Server-side applications must pass two parameters in addition to the apikey parameter:
//
//ts - a timestamp (or other long string which can change on a request-by-request basis)
//hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
//For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call 
//as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
//(the hash value is the md5 digest of 1abcd1234)


// 1b6355a0e115ae40e6488b1d9775c4c198f6a3f2fdf79b836e83a37221efe4304eca4f9b0
// md5: 1df79b836e83a37221efe4304eca4f9b0b6355a0e115ae40e6488b1d9775c4c198f6a3f2f

// hash: b8b320cc0d902f3d0b65122b58c3c0a4

// https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=df79b836e83a37221efe4304eca4f9b0&hash=b8b320cc0d902f3d0b65122b58c3c0a4

function App() {
  
  const [comics, setComics] = useState([]);

  useEffect(() => {
    readAPIMarvel()
    console.log(comics)
  },[])


  const readAPIMarvel = async() => {
    try{
      const api = await fetch("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=df79b836e83a37221efe4304eca4f9b0&hash=b8b320cc0d902f3d0b65122b58c3c0a4&limit=5");
      const data = await api.json();
      const result = data.data.results;
      setComics(result);
    }catch(error){
      console.log(error);
    };
  };

  const comicsThor = comics.filter(comic => comic.title.includes('Thor'));


  return (
    <Fragment> 
      <div className='background'>
        <Header/>
           <Container >
             <Row>
               {
                 comics.map( comic =>
                   <Col className='ml-2 mt-4 '>
                     <ComicCard
                       name = {comic.title}
                       image = {`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                     />
                   </Col>
                 )
               }

             </Row>
           </Container>

         <Footer/>          
      </div>
    </Fragment>
  );
}

export default App;

//<ControlledCarousel/>
         
//<Container className='p-3'>
//  <Row>
//    <Col xs={6} md={4}>
//      <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" rounded />
//    </Col>
//    <Col xs={6} md={4}>
//      <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" roundedCircle />
//    </Col>
//    <Col xs={6} md={4}>
//      <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" thumbnail />
//    </Col>
//  </Row>
//</Container>
//
//<Container className='p-3'>
//  <Row>
//    <Col xs={6} md={6}>
//      <img className="img-fluid" width={500} height={300} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" alt="Imagen" />
//    </Col>
//    <Col xs={6} md={6} className="d-flex align-items-center">
//      <div>
//        <h2>Título del texto</h2>
//        <h3>Contenido del texto...</h3>
//      </div>
//    </Col>
//  </Row>
//</Container>//