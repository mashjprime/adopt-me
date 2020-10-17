const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Boss",
      animal: "Dog",
      breed: "Bull Arab",
    }),
    React.createElement(Pet, {
      name: "Snowball",
      animal: "Cat",
      breed: "Beast",
    }),
    React.createElement(Pet, {
      name: "Sasha",
      animal: "Dog",
      breed: "Corgi",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
