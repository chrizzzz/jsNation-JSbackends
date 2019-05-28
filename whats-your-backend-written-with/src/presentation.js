// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
    Image,
  ListItem,
  List,
  Image,
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
import catInBox from "./catInBox.gif";

const images = {
  annaProfilePic: require('./assets/annaProfilePic.JPG'),
  christinaProfilePic: require('./assets/christinaProfilePic.jpg')
};
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

// ABSTRACT
// When thinking of backend languages, JavaScript is not the first thing that comes to mind.
// But why not? Why not write a backend in JavaScript? Or even a whole microservices infrastructure!
// In this talk we will discuss exactly what a microservice can look like in Javascript with the addition of
// frameworks like Socket.IO or NestJS and how several microservices would communicate with each other.
// There is no prior knowledge of JavaScript required. Everything we show will be explained.


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
            What's your backend written with?
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            JavaScript?!
          </Heading>
        </Slide>
          <Slide transition={["zoom"]} bgColor="tertiary">
              <Image src={images.christinaProfilePic} width={300} fit/>
              <Image src={images.annaProfilePic} width={300} />
            <Heading>Christina (@merelyChristina)</Heading>
            <Heading>Anna (@merelyAnna)</Heading>
          </Slide>
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Why/when should I use socket communication</Heading>
        </Slide>
        <WebSocketTS />
        <WebSocketExpress />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Use cases ?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">Think outside the box</Heading>
          <Image src={catInBox} height="200px" width="200px" display="block" />
        </Slide>
      </Deck>
    );
  }
}
