
import './details.css';

function Details() {
  return (
    <div className="content">
      <section style={{display:"flex",alignItems:'center'}}>
        <div className="info-text">
          <h2>What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>
          <ul>
            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
            <li>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
            <li>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
          </ul>
        </div>
        <div className="info-image">
          <img src="path-to-your-image.jpg" alt="Lorem Ipsum" />
        </div>
      </section>
      <div style={{display:'flex', alignItems:'center'}} className="info-container1">
  <div className="info-image">
    <img src="path-to-your-image.jpg" alt="Lorem Ipsum" />
  </div>
  <div className="info-text">
    <h2>What is Lorem Ipsum?</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.
    </p>
    <ul>
      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
      <li>Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
      <li>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
    </ul>
  </div>
</div>

    </div>
  );
}

export default Details;
