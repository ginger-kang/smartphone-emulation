import AlarmInput from "./AlarmInput.js";

function Alarm({ $app }) {
  this.alarmList = ["kagura", "gintoki", "okita"];
  this.alarmInputDisplay = false;

  const alarmInputDisplayHandler = display => {
    this.alarmInputDisplay = display;

    alarmInput.setState(this.alarmInputDisplay);
  };

  const $target = document.createElement("section");
  $target.id = "alarm-container";

  const newButton = document.createElement("button");
  newButton.id = "new-button";
  newButton.innerText = "NEW";
  newButton.addEventListener("click", () => alarmInputDisplayHandler(true));

  const alarmInput = new AlarmInput({
    $target,
    alarmInputDisplay: this.alarmInputDisplay,
    alarmInputDisplayHandler,
  });

  $target.appendChild(newButton);
  $app.appendChild($target);

  this.setState = nextState => {
    this.alarmList = nextState;

    this.render();
  };

  this.render = () => {
    const alarmListWrapper = document.createElement("ul");
    alarmListWrapper.id = "alarm-list-wrapper";
    alarmListWrapper.innerHTML = this.alarmList
      .map(alarm => `<li class="alarm-list">${alarm}</li>`)
      .join("");

    $target.appendChild(alarmListWrapper);
  };

  this.render();
}

export default Alarm;
