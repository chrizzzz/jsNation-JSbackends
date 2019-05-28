// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Slide
} from "spectacle";
import { ReactComponent as Kanelbullar } from "./kanelbullar.svg";
import { ReactComponent as Christina } from "./me.svg";
import "./me.css";
import createTheme from "spectacle/lib/themes/default";
import { ExpressMongo } from "./slides/ExpressMongo/ExpressMongo";
import {
  TeaSchema,
  TeaController,
  TeaService,
  TeaModule,
  AppModule,
  TypeScriptMongoMain
} from "./slides/TypeScriptMongo/TypeScriptMongo";
import { MultiThreading } from "./slides/MultiThreading/MultiThreading";
import { EventLoop } from "./slides/EventLoop/EventLoop";
import { WebSocketTS, WebSocketExpress } from "./slides/Streaming/Streaming";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#2f2c35",
    secondary: "#bb2ba7",
    tertiary: "#0593cb",
    quaternary: "#725fad"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Oh no, its just one thread
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Event based vs. multi threading
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>
            I
            <span role="img" aria-label="love">
              ❤️
            </span>
            kanelbullar (cinnamon buns)
            <Christina
              className="me"
              onClick={() => {
                const element = document.getElementsByClassName("me")[0];
                element.classList.add("me--waving");
              }}
            />
            {/**    transform-origin: 50%;
    transform: rotateZ(-151deg); */}
            <Kanelbullar />
          </Heading>
        </Slide>
        <MultiThreading />
        <EventLoop />
        <ExpressMongo />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>
            But I prefer type script
            <span role="img" aria-label="sad">
              😫
            </span>
          </Heading>
        </Slide>
        <TeaSchema />
        <TeaController />
        <TeaService />
        <TeaModule />
        <AppModule />
        <TypeScriptMongoMain />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Things to consider</Heading>
          <List>
            <ListItem>Logging</ListItem>
            <ListItem>Tracing</ListItem>
            <ListItem>Error handling</ListItem>
            <ListItem>Retry mechanismin</ListItem>
            <ListItem>Timeouts</ListItem>
            <ListItem>Health check</ListItem>
            <ListItem>Security</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Let's stream</Heading>
        </Slide>
        <WebSocketTS />
        <WebSocketExpress />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Use cases ?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Think outside the box</Heading>
        </Slide>
      </Deck>
    );
  }
}
