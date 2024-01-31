import { useNavigate, useLocation } from "react-router";
import parse from "html-react-parser";

export default function Post() {
  //const { postID } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const post = state.details;

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </article>
  );
}
