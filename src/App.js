import Header from "./components/Header.js";

export default function App($app) {
  this.state = {
    pageName: "home",
  };

  const date = new Header({ $app, pageName: this.state.pageName });

  this.render = () => {};

  this.render();
}
