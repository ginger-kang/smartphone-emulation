import Clock from "./Clock.js";

function Header({ $app, pageName, routeHandler }) {
  this.pageName = pageName;

  this.$target = document.createElement("header");
  $app.appendChild(this.$target);

  this.setState = nextState => {
    console.log(nextState);
    this.pageName = nextState;

    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = "";

    const backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.innerText = "BACK";
    backButton.addEventListener("click", () => routeHandler("home"));

    const newButton = document.createElement("button");
    newButton.id = "new-button";
    newButton.innerText = "NEW";

    new Clock({ $target: this.$target });

    this.$target.appendChild(backButton);
    this.$target.appendChild(newButton);

    if (this.pageName === "home") {
      this.$target.removeChild(backButton);
      this.$target.removeChild(newButton);
    } else if (this.pageName === "photo") {
      this.$target.removeChild(newButton);
    }
  };

  this.render();
}

export default Header;
