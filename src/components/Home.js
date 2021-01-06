import Wrapper from './PageWrapper';
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <Wrapper>
      <h2>Home</h2>

      {!props.user && (
        <div><Link to="/login">Login</Link> to show user info...</div>
      )}

      {props.user && (

        <div>
          <h3>User connected:</h3>
          <p>Username: {props.user.username}</p>
          <p>email: {props.user.email}</p>
        </div>

      )}

    </Wrapper>
  )
}
