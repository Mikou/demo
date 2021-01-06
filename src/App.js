import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Readme from "./components/Readme";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: 'Signika', sans-serif;
  }
`;

const Nav = styled.div`
  margin-top: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  position: relative;
`;

const Navbox = styled.div`
  width: 800px;
  margin: 0 auto;

  /* align the first link in the menu on the
     left-most side of the nav-bar */
  & > a:first-child {
    margin-left:0;
    padding-left:0;
  }

`;

const NavLink = styled(Link)`
  margin: 12px;
  color: #111;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 15px 5px;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ed8b00;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  margin: 20px;
`;

const Arrow = styled.i`
  border: solid rgb(62, 19, 182);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-left: 5px;
`;

function About() {
  return <h2>About</h2>;
}

function App() {
  const [user, setUser] = useState(null);

  function handleSetUser(user) {
    setUser(user);
  }

  return (
    <Router>
      <GlobalStyle />
      <div>
        <Nav>
          <LogoWrapper>
            <h2>Logo</h2>
          </LogoWrapper>
          <Navbox>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/readme">
              Readme
            </NavLink>
            {!user && (
              <NavLink to="/login">
                Login
              </NavLink>
            )}

            {user && (
              <NavLink to="/logout">
                Logout
              </NavLink>
            )}
          </Navbox>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login setUser={handleSetUser} {...props} />}
          />
          <Route
            path="/logout"
            render={(props) => <Logout setUser={handleSetUser} {...props} />}
          />
          <Route path="/readme" component={Readme} />
          <Route path="/" render={(props) => <Home user={user} {...props }/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
