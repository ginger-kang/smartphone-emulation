import AlarmInput from "./AlarmInput.js";
import { NEW } from "../constant.js";

function Alarm({ $app }) {
  this.alarmList = ["kagura", "gintoki", "okita"];
  this.alarmInputDisplay = false;

  const alarmInputDisplayHandler = display => {
    this.alarmInputDisplay = display;

    alarmInput.setState(this.alarmInputDisplay);
  };

  const onAlarmInputSubmit = inputAlarmData => {
    this.setState([...this.alarmList, inputAlarmData]);
  };

  this.$target = document.createElement("section");
  this.$target.id = "alarm-container";

  const newButton = document.createElement("button");
  newButton.id = "new-button";
  newButton.innerText = NEW;
  newButton.addEventListener("click", () => alarmInputDisplayHandler(true));

  const alarmInput = new AlarmInput({
    $target: this.$target,
    alarmInputDisplay: this.alarmInputDisplay,
    alarmInputDisplayHandler,
    onAlarmInputSubmit,
  });

  this.$target.appendChild(newButton);
  $app.appendChild(this.$target);

  this.setState = nextState => {
    this.alarmList = nextState;

    this.render();
  };

  this.render = () => {
    const prevList = document.querySelector("#alarm-list-wrapper");
    if (prevList) {
      prevList.remove();
    }

    const alarmListWrapper = document.createElement("ul");
    alarmListWrapper.id = "alarm-list-wrapper";
    alarmListWrapper.innerHTML = this.alarmList
      .map(alarm => `<li class="alarm-list">${alarm}</li>`)
      .join("");

    this.$target.appendChild(alarmListWrapper);
  };

  this.render();
}

export default Alarm;
