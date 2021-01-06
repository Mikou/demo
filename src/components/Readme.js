import styled from "styled-components";
import marked from "marked";
import Wrapper from "./PageWrapper";
import useFetch from "../hooks/useFetch";

const Content = styled.div`
  padding-bottom: 24px;

  & h1,
  & h2,
  & h3 {
    margin: 12px 0;
  }

  & p {
    margin: 6px 0;
  }

  & ul {
    margin: 0 12px;
    padding: 0 5px;
  }
`;

export default function Readme() {
  const readmePath = require("../README.md");

  const { response, error, loading } = useFetch(readmePath.default);

  if (error) {
    return <div>something went wrong...</div>;
  }

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Content
          dangerouslySetInnerHTML={{ __html: marked(response) }}
        ></Content>
      )}
    </Wrapper>
  );
}
