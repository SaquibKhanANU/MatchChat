import "./PostCommentBox.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostCommentBox(): JSX.Element {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`post-comment-box-container ${
                isFocused
                    ? "post-comment-box-active"
                    : "post-comment-box-deactive"
            }`}
        >
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Add a comment"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isFocused && (
                <button className="post-comment-box-button">Comment</button>
            )}
        </div>
    );
}

export default PostCommentBox;
