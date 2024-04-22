import "./PostInfo.css";

interface PostInfoProps {
  headerElement: JSX.Element;
}

function PostInfo({ headerElement }: PostInfoProps): JSX.Element {
  return <div>
    {headerElement}
  </div>;
}

export default PostInfo;
