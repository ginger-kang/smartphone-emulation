import Alarm from "./components/Alarm/Alarm.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Memo from "./components/Memo/Memo.js";
import Photo from "./components/Photo/Photo.js";
import { getItem, setItem } from "./util/localStorage.js";
import { getTime } from "./util/utils.js";
import { HOME, ALARM, MEMO, PHOTO, ALARM_LIST } from "./util/constant.js";

export default function App($app) {
  this.state = {
    pageName: HOME,
  };

  const routeHandler = name => {
    this.setState({
      ...this.state,
      pageName: name,
    });
  };

  const alarmHandler = () => {
    const alarmList = getItem(ALARM_LIST) ?? [];
    const currTime = getTime(false);

    for (let i = 0; i < alarmList.length; i++) {
      if (alarmList[i].slice(3) === currTime) {
        alert(alarmList[i]);
        setItem(
          ALARM_LIST,
          alarmList.filter((_, index) => index !== i),
        );
        this.setState({ ...this.state });
        break;
      }
    }
  };

  const cleanApps = $app => {
    if ($app.childNodes.length > 1) {
      $app.removeChild($app.childNodes[1]);
    }
  };

  const startClock = (ms, callback) => {
    callback();
    return setInterval(callback, ms);
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
    } else if (this.state.pageName === MEMO) {
      new Memo({ $app });
    } else if (this.state.pageName === PHOTO) {
      new Photo({ $app });
    }
  };

  startClock(1000, alarmHandler);
  this.render();
}
