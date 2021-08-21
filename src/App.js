import Alarm from "./components/Alarm.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { HOME, ALARM } from "./constant.js";

const cleanApps = $app => {
  if ($app.childNodes.length > 1) {
    $app.removeChild($app.childNodes[1]);
  }
};

export default function App($app) {
  this.state = {
    pageName: HOME,
  };

  const routeHandler = name => {
    this.setState({
      ...this.state,
      pageName: name,
      isNewButtonClick: false,
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
    if (this.state.pageName === HOME) {
      new Home({ $app, routeHandler });
    } else if (this.state.pageName === ALARM) {
      new Alarm({ $app });
    }
  };

  this.render();
}
