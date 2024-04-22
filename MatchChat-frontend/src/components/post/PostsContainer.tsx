import "./PostsContainer.css";

interface PostsContainerProps {
  posts: JSX.Element[];
}

function PostsContainer({ posts }: PostsContainerProps): JSX.Element {
  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <div key={index}>{post}</div>
      ))}
    </div>
  );
}
export default PostsContainer;
