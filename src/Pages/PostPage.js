import "../App.css";
import PostBox from "../Components/PostBox";

function PostPage() {
  return (
    <div className="post-main flex">
      <div className="post-content-main">
        <div className="post-content-post-box">
          <PostBox />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
