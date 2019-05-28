import React from "react";
import CodeSlide from "spectacle-code-slide";

export const TeaSchema = ({ slideIndex }) => (
  <CodeSlide
    transition={[]}
    lang="js"
    slideIndex={slideIndex}
    code={require("./TeaSchema.example")}
    ranges={[
      { loc: [0, 6], title: "Schema defintion" },
      { loc: [0, 3] },
      { loc: [3, 4] },
      { loc: [4, 5] },
      { loc: [5, 6] }
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
      { loc: [0, 12], title: "Tea Controller" },
      { loc: [4, 6], node: "Controller Annotation" },
      { loc: [6, 7], node: "Service Injection" },
      { loc: [8, 12] }
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
      { loc: [0, 19], title: "Tea Service " },
      { loc: [5, 7], note: "Mark it as injectable" },
      { loc: [8, 17] }
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
      { loc: [6, 13], title: "Make a module " },
      { loc: [7, 8], note: "no imports" },
      { loc: [8, 9], note: "one controller" },
      { loc: [9, 10], note: "one service, which can be injected" }
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
      { loc: [0, 11], title: "main app module " },
      { loc: [4, 5], note: "Module annotation " },
      { loc: [5, 6], note: "There is our module" }
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
      { loc: [3, 8], title: "That's all" },
      { loc: [4, 5], note: "Create App" },
      { loc: [5, 6], note: "Start Listining" }
    ]}
  />
);
