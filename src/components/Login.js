import styled from "styled-components";
import { useState } from "react";
import { setUserSession } from "../utils";
import PageWrapper from "./PageWrapper";

const LoginWrapper = styled.div`
  background-color: #eee;
  margin: auto;
  width: 50%;
  padding: 10px;
  overflow: hidden;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  display: block;
  border: 1px grey solid;
`;

const Button = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px grey solid;
  float: right;
  width: 100px;
`;

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  function fetch({ username, password }) {
    return new Promise((resolve, reject) => {
      const errorMessage = "Bad username or password";
      const bob = {
        username: "bob",
        email: "bob@demo.com",
      };
      const alice = {
        username: "alice",
        email: "alice@demo.com",
      };

      switch (username.trim()) {
        case "bob":
          if (password.trim() === "123") {
            setTimeout(() => {
              resolve(bob);
            }, 1000);
          } else {
            setTimeout(() => {
              reject(errorMessage);
            }, 1000);
          }
          break;
        case "alice":
          if (password.trim() === "123") {
            setTimeout(() => {
              resolve(alice);
            }, 1000);
          } else {
            setTimeout(() => {
              reject(errorMessage);
            }, 1000);
          }
          break;
        default:
          setTimeout(() => {
            reject(errorMessage);
          }, 1000);
      }
    });
  }

  function handleLogin(e) {
    setError(null);
    setLoading(true);

    fetch({ username, password })
      .then((user) => {
        setLoading(false);
        setUserSession(user);
        props.setUser(user);
        props.history.push("/home");
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }

  function validateField(fieldname, fieldvalue) {
    if (username.trim() === "") {
      return `${fieldname} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldvalue)) {
      return "Invalid characters";
    }
    if (fieldvalue.trim().length < 3) {
      return `${fieldname} needs to be at least three characters`;
    }

    return null;
  }

  function handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value);

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        throw new Error("Incorrect fieldname.");
    }
  }

  return (
    <PageWrapper>
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <LoginWrapper>
        <form>
          <label>
            Username:
            <Input
              type="text"
              name="username"
              value={username}
              onChange={handleUserInput}
            />
          </label>
          <label>
            Password:
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleUserInput}
            />
          </label>

          {error && (
            <div>
              <small style={{ color: "red" }}>{error}</small>
            </div>
          )}

          <small style={{ color: "grey" }}>
            try with username: bob and password: 123
          </small>

          <Button
            type="submit"
            value={loading ? "Loading..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
          <br />
        </form>
      </LoginWrapper>
    </PageWrapper>
  );
}
