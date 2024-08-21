import React from 'react';
import './styles.css';

function Content() {
  return (
    <main className="content">
      <section className="section">
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </section>
      
      <section className="section images">
        <div className="image-item">
          <img src="your-image-url.jpg" alt="Sample 1" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="image-item">
          <img src="your-image-url.jpg" alt="Sample 2" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
        <div className="image-item">
          <img src="your-image-url.jpg" alt="Sample 3" />
          <p>Where does it come from? Lorem Ipsum is simply dummy text.</p>
        </div>
      </section>

      <section className="section">
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <ul>
          <li>First point</li>
          <li>Second point</li>
          <li>Third point</li>
        </ul>
      </section>
    </main>
  );
}

export default Content;
