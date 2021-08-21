import Header from "./components/Header.js";
import Home from "./components/Home.js";

const cleanApps = $app => {
  if ($app.childNodes.length > 1) {
    $app.removeChild($app.childNodes[1]);
  }
};

export default function App($app) {
  this.state = {
    pageName: "home",
  };

  const routeHandler = name => {
    this.setState({
      ...this.state,
      pageName: name,
    });
  };

  const header = new Header({
    $app,
    pageName: this.state.pageName,
    routeHandler,
  });

  this.setState = nextState => {
    this.state = nextState;

    header.setState(this.state.pageName);
    this.render();
  };

  this.render = () => {
    cleanApps($app);
    if (this.state.pageName === "home") {
      new Home({ $app, routeHandler });
    }
  };

  this.render();
}
