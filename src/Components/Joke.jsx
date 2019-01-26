import React from "react";
import { AST_PropAccess } from "terser";

function Joke(props) {
  return (
    <div>
      <h3 style={{ display: props.question ? "block" : "none " }}>
        Question:
        {props.question}
      </h3>
      <h3>Answer: {props.punchline}</h3>
      <hr />
    </div>
  );
}

export default Joke;
