import React, { Fragment, useEffect, useState, useTransition } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, json } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Favs from './components/Favs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  let favsLC = JSON.parse(localStorage.getItem('favs'));
  if(!favsLC){
    favsLC = []
  }
  
  useEffect(() => {
    favsLC
    ? localStorage.setItem('favs', JSON.stringify(favs))
    : localStorage.setItem('favs', JSON.stringify([]))
  },[favsLC]);
  
  const [favs,setFavs] = useState(favsLC);
  const [pending, changePage] = useTransition();
  const [page,changePointer] = useState();
  const [search,setSearch] = useState("&offset=500");

  return (

    <Fragment>  
      <Router>
        <Header
          setSearch = {setSearch}
        />

        <Routes>
          <Route 
            exact path="/" 
            element={
              <Main
                search={search}
                setSearch={setSearch}
                setFavs={setFavs}
                favs={favs}
              />}
          /> 

          <Route 
            path="/favs" 
            element={
              <Favs
                favs={favs} 
              />} 
          />

        </Routes>

      </Router>

    <Footer/>    

    </Fragment>
  );
}

export default App;
