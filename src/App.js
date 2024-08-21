import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Carousel from './components/carousel/Carousel';


function App() {
  return (
  <div style={{padding:8}}>
  <Header/>
  <Carousel/>
  <Content/>
  <Footer/>
  </div>
  );
}

export default App;
