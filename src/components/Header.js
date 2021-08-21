import Clock from "./Clock.js";

function Header({ $app, pageName }) {
  this.pageName = pageName;

  this.$target = document.createElement("header");
  $app.appendChild(this.$target);

  new Clock({ $target: this.$target });

  this.render = () => {
    const backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.innerText = "BACK";
    backButton.addEventListener("click", () => onBackButtonClick());

    const newButton = document.createElement("button");
    newButton.id = "new-button";
    newButton.innerText = "NEW";

    this.$target.appendChild(backButton);
    this.$target.appendChild(newButton);
  };

  this.render();
}

export default Header;
