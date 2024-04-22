import "./Tag.css";

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps): JSX.Element {
  return <div className="tag-container">{text}</div>;
}

export default Tag;
