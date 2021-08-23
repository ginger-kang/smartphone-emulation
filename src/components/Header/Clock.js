import { getTime } from "../../util/utils.js";

function Clock({ $target }) {
  const clockWrapper = document.createElement("span");
  clockWrapper.id = "clock-wrapper";

  const setTime = () => {
    clockWrapper.innerHTML = getTime(true);
  };

  function startClock(ms, callback) {
    callback();
    return setInterval(callback, ms);
  }

  this.render = () => {
    $target.appendChild(clockWrapper);
  };

  startClock(1000, setTime);
  this.render();
}

export default Clock;
