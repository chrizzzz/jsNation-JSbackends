import React from "react";
import CodeSlide from "spectacle-code-slide";

export const WebSocketTS = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    bgColor="primary"
    textColor="white"
    lang="js"
    style={{ marginBottom: "100px" }}
    code={require("./WebSocketTS.example")}
    ranges={[
      { loc: [0, 13], title: "Socket.io with typescript" },
      { loc: [0, 2] },
      { loc: [3, 4], note: "topic subscribe to" },
      { loc: [3, 10] }
    ]}
  />
);

export const WebSocketExpress = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    bgColor="primary"
    textColor="white"
    lang="js"
    style={{ marginBottom: "100px" }}
    code={require("./WebSocketExpress.example")}
    ranges={[
      { loc: [0, 15], title: "Socket.io with JavaScript" },
      { loc: [0, 1] },
      { loc: [2, 4], note: "on connected callback" },
      { loc: [5, 10] },
      { loc: [11, 14] }
    ]}
  />
);
