
import "./styles.css";
import jar from "./assets/Jar.jpg";
import arrow from "./assets/arrow.png";
const imageData = [
  {
    id: 1,
    src: jar,
    alt: "Sample 1",
    title: "Where does it come from? Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    src: jar,
    alt: "Sample 2",
    title: "Where does it come from? Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    src: jar,
    alt: "Sample 3",
    title: "Where does it come from? Lorem Ipsum is simply dummy text.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function Content() {
  return (
    <main className="content">
      <section className="section">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={arrow} alt="arrow" />
          <h2>What is Lorem Ipsum?</h2>
        </div>
      </section>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <section className="section images">
        {imageData.map((item) => (
          <div key={item.id} className="image-item">
            <img src={item.src} alt="img" />
            <h4 style={{color:"#D62828"}}>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={arrow} alt="arrow" />
          <h2>What is Lorem Ipsum?</h2>
        </div>
      </section>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </main>
  );
}

export default Content;
