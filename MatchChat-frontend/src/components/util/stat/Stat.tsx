import "./Stat.css";

interface StatProps {
  alt: string;
  text: string;
  img: string;
}

function Stat({ alt, text, img }: StatProps): JSX.Element {
  return (
    <div className="stat-container">
      <img src={img} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default Stat;
