import "./Post.css";
import PostCommentBox from "./PostCommentBox";

interface PostInfoProps {
  headerElement: JSX.Element;
}

function Post({ headerElement }: PostInfoProps): JSX.Element {
  return (
    <div>
      {headerElement}
      <PostCommentBox />
    </div>
  );
}

export default Post;
