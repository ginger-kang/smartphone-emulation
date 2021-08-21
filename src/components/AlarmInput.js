function AlarmInput({
  $target,
  alarmInputDisplay,
  alarmInputDisplayHandler,
  onAlarmInputSubmit,
}) {
  this.alarmInputDisplay = alarmInputDisplay;

  let timeSelect = ``;

  const alarmInput = document.createElement("div");
  alarmInput.id = "alarm-input-wrapper";
  alarmInput.style.display = "none";

  const selectBox = document.createElement("div");
  selectBox.id = "select-box-wrapper";

  const saveButton = document.createElement("button");
  saveButton.id = "alarm-save-button";
  saveButton.innerText = "저장";
  saveButton.addEventListener("click", () => onSaveButtonClick());

  timeSelect += `
    <select name="am-pm" id="ampm-select">
      <option value="오전" selected>오전</option>
      <option value="오후">오후</option>
    </select>
    &nbsp
    <select name="hour" id="hour-select">
  `;

  [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ].forEach(hour => {
    if (hour === "01") {
      timeSelect += `
        <option value=${hour} selected>${hour}</option>  
      `;
    } else {
      timeSelect += `
        <option value=${hour}>${hour}</option>
      `;
    }
  });

  timeSelect += `
    </select>시
    &nbsp
    <select name="minute" id="minute-select">
  `;

  ["00", "10", "20", "30", "40", "50"].forEach(minute => {
    if (minute === "00") {
      timeSelect += `
        <option value=${minute} selected>${minute}</option>
      `;
    } else {
      timeSelect += `
        <option value=${minute}>${minute}</option>
      `;
    }
  });

  timeSelect += `
    </select>분
  `;

  selectBox.innerHTML = timeSelect;

  alarmInput.appendChild(selectBox);
  alarmInput.appendChild(saveButton);
  $target.appendChild(alarmInput);

  const onSaveButtonClick = () => {
    const ampmSelect = document.querySelector("#ampm-select");
    const hourSelect = document.querySelector("#hour-select");
    const minuteSelect = document.querySelector("#minute-select");
    const ampm = ampmSelect.options[ampmSelect.selectedIndex].value;
    const hour = hourSelect.options[hourSelect.selectedIndex].value;
    const minute = minuteSelect.options[minuteSelect.selectedIndex].value;

    const inputAlarmData = `${ampm} ${hour}시 ${minute}분`;

    alarmInputDisplayHandler(false);
    onAlarmInputSubmit(inputAlarmData);
  };

  this.setState = nextState => {
    this.alarmInputDisplay = nextState;

    this.render();
  };

  this.render = () => {
    if (this.alarmInputDisplay) {
      alarmInput.style.display = "flex";
    } else {
      alarmInput.style.display = "none";
    }
  };

  this.render();
}

export default AlarmInput;
