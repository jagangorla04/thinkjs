import React from 'react';
import './styles.css';
import jar from "./assets/Jar.jpg"
import arrow from "./assets/arrow.png"
function Content() {
  return (
    <main className="content">
      <section className="section">
        <div style={{display:'flex',alignItems:'center',gap:10}} >
        <img src={arrow} alt="arrow"/>
        <h2>What is Lorem Ipsum?</h2>
        </div>
      </section>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      
      <section className="section images">
        <div className="image-item">
          <img src={jar} alt="Sample 1" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="image-item">
          <img src={jar} style={{width:"100%"}} alt="Sample 2" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="image-item">
          <img src={jar} alt="Sample 3" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
      </section>

      <section className="section">
      <div style={{display:'flex',alignItems:'center',gap:10}} >
        <img src={arrow} alt="arrow"/>
        <h2>What is Lorem Ipsum?</h2>
        </div>
    
      </section>
    </main>
  );
}

export default Content;
