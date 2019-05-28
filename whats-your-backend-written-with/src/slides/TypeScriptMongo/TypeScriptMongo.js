import React from "react";
import CodeSlide from "spectacle-code-slide";

export const TeaSchema = ({ slideIndex }) => (
  <CodeSlide
    transition={[]}
    lang="js"
    slideIndex={slideIndex}
    code={require("./TeaSchema.example")}
    ranges={[
      { loc: [0, 3], title: "Schema defintion" },
      { loc: [3, 4], title: "name" },
      { loc: [4, 5], title: "type" },
      { loc: [5, 6], title: "steepingTime to database" }
    ]}
  />
);

export const TeaController = ({ slideIndex }) => (
  <CodeSlide
    transition={[]}
    slideIndex={slideIndex}
    lang="js"
    code={require("./TeaController.example")}
    ranges={[
      { loc: [5, 6], title: "Controller" },
      { loc: [7, 7], title: "Service Injection" },
      { loc: [9, 12], title: "Tea Interface" }
    ]}
  />
);

export const TeaService = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    lang="js"
    code={require("./TeaService.example")}
    ranges={[
      { loc: [6, 7], title: "Mark it " },
      { loc: [8, 13], title: "Implementation" }
    ]}
  />
);

export const TeaModule = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    lang="js"
    code={require("./TeaModule.example")}
    ranges={[
      { loc: [7, 13], title: "Mark it " },
      { loc: [8, 8], title: "no imports" },
      { loc: [8, 9], title: "one controller" },
      { loc: [9, 10], title: "one service, which can be injected" }
    ]}
  />
);

export const AppModule = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    lang="js"
    code={require("./AppModule.example")}
    ranges={[
      { loc: [5, 11], title: "Mark it " },
      { loc: [5, 5], title: "There is our module" }
    ]}
  />
);

export const TypeScriptMongoMain = ({ slideIndex }) => (
  <CodeSlide
    slideIndex={slideIndex}
    transition={[]}
    lang="js"
    code={require("./main.example")}
    ranges={[
      { loc: [4, 8], title: "That's all" },
      { loc: [4, 5], title: "Create App" },
      { loc: [5, 6], title: "Start Listining" }
    ]}
  />
);
