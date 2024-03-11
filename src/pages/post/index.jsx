import { useNavigate, useLocation } from "react-router";

//Theme Components
import { Container } from "src/components/shared";

//Parse CMS content
import parse from "html-react-parser";

export default function Post() {
  //const { postID } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const post = state.details;

  return (
    <Container>
      <article className="prose">
        <h1>{post.title}</h1>
        <div>{parse(post.content)}</div>
        <a className="text-primary-500" onClick={() => navigate(-1)}>
          Back
        </a>
      </article>
    </Container>
  );
}
