import AlarmInput from "./AlarmInput.js";
import { getItem, setItem } from "../localStorage.js";
import { NEW, ALARM_LIST } from "../constant.js";

function Alarm({ $app }) {
  this.alarmList = getItem(ALARM_LIST) ?? [];
  this.alarmInputDisplay = false;

  const alarmInputDisplayHandler = display => {
    this.alarmInputDisplay = display;

    alarmInput.setState(this.alarmInputDisplay);
  };

  const onAlarmInputSubmit = inputAlarmData => {
    this.setState([...this.alarmList, inputAlarmData]);
  };

  const onRemoveClick = e => {
    const removeAlarm = e.target.parentNode.childNodes[1].textContent;

    this.setState(this.alarmList.filter(alarm => alarm !== removeAlarm));
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
    setItem(ALARM_LIST, nextState);

    this.render();
  };

  this.render = () => {
    const prevList = document.querySelector("#alarm-list-wrapper");
    if (prevList) {
      prevList.remove();
    }

    const alarmListWrapper = document.createElement("ul");
    alarmListWrapper.id = "alarm-list-wrapper";
    alarmListWrapper.addEventListener("click", e => onRemoveClick(e));
    alarmListWrapper.innerHTML = this.alarmList
      .map(
        alarm => `
          <li class="alarm-list">
            <span class="alarm-list-text">${alarm}</span>
            <button id="remove-button">삭제</button>
          </li>
        `,
      )
      .join("");

    this.$target.appendChild(alarmListWrapper);
  };

  this.render();
}

export default Alarm;
