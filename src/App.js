import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Carousel from './components/carousel/Carousel';
import Details from './components/details/Details';


function App() {
  return (
  <div style={{padding:8}}>
  <Header/>
  <Carousel/>
  <Content/>
  <Details/>
  <Footer/>
  </div>
  );
}

export default App;
