import Clock from "./Clock.js";
import { HOME, BACK } from "../../util/constant.js";

function Header({ $app, pageName, routeHandler }) {
  this.pageName = pageName;

  this.$target = document.createElement("header");
  $app.appendChild(this.$target);

  this.setState = nextState => {
    this.pageName = nextState;

    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = "";

    const backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.innerText = BACK;
    backButton.addEventListener("click", () => routeHandler(HOME));

    new Clock({ $target: this.$target });

    this.$target.appendChild(backButton);

    if (this.pageName === HOME) {
      this.$target.removeChild(backButton);
    }
  };

  this.render();
}

export default Header;
