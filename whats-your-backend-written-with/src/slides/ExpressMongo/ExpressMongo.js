import React from "react";
import CodeSlide from "spectacle-code-slide";

export const ExpressMongo = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    bgColor="primary"
    textColor="white"
    lang="js"
    style={{ marginBottom: "100px" }}
    code={require("./expressMongo.example")}
    ranges={[
      { loc: [0, 17], title: "Walking through some code" },
      { loc: [0, 2], node: "Get evything want I need" },
      { loc: [3, 10], note: "Connect to database" },
      { loc: [10, 16], note: "Init Rest Interface" },
      { loc: [18, 22], note: "Start" }
    ]}
  />
);
