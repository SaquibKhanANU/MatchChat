import "./PostCommentBox.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostCommentBox(): JSX.Element {
  const [value, setValue] = useState("");

  return (
    <div className="post-comment-box-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Add a comment"
      />
      <button className="post-comment-box-button">Comment</button>
    </div>
  );
}

export default PostCommentBox;
