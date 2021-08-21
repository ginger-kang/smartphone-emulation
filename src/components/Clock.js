function Clock({ $target }) {
  const clockWrapper = document.createElement("span");
  clockWrapper.id = "clock-wrapper";

  const getTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockWrapper.innerHTML = `${year}년 ${month}월 ${day}일 ${
      hours < 10 ? `0${hours}` : hours
    }시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${
      seconds < 10 ? `0${seconds}` : seconds
    }초`;
  };

  function startClock(ms, callback) {
    callback();
    return setInterval(callback, ms);
  }

  this.render = () => {
    $target.appendChild(clockWrapper);
  };

  startClock(1000, getTime);
  this.render();
}

export default Clock;
