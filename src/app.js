import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Boss",
  //       animal: "Dog",
  //       breed: "Bull Arab",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Snowball",
  //       animal: "Cat",
  //       breed: "Beast",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Sasha",
  //       animal: "Dog",
  //       breed: "Corgi",
  //     }),
  //   ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Boss" animal="Dog" breed="Bull Arab" />
      <Pet name="Sasha" animal="Dog" breed="Corgi" />
      <Pet name="Snowball" animal="Cat" breed="Beast" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
