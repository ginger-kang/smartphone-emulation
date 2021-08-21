function Home({ $app, routeHandler }) {
  this.$target = document.createElement("section");
  this.$target.id = "home-container";
  $app.appendChild(this.$target);

  this.render = () => {
    const alarmApp = document.createElement("button");
    alarmApp.id = "alarm-app-button";
    alarmApp.innerText = "알람";
    alarmApp.addEventListener("click", () => routeHandler("alarm"));

    const memoApp = document.createElement("button");
    memoApp.id = "memo-app-button";
    memoApp.innerText = "메모";
    memoApp.addEventListener("click", () => routeHandler("memo"));

    const photoApp = document.createElement("button");
    photoApp.id = "photo-app-button";
    photoApp.innerText = "사진";
    photoApp.addEventListener("click", () => routeHandler("photo"));

    this.$target.appendChild(alarmApp);
    this.$target.appendChild(memoApp);
    this.$target.appendChild(photoApp);
  };

  this.render();
}

export default Home;
