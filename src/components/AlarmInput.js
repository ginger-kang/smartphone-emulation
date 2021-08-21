function AlarmInput({ $target, alarmInputDisplay, alarmInputDisplayHandler }) {
  this.alarmInputDisplay = alarmInputDisplay;

  const alarmInput = document.createElement("div");
  alarmInput.innerHTML = "alarm setting";
  alarmInput.style.display = "none";
  $target.appendChild(alarmInput);

  this.setState = nextState => {
    this.alarmInputDisplay = nextState;

    this.render();
  };

  this.render = () => {
    if (this.alarmInputDisplay) {
      alarmInput.style.display = "block";
    } else {
      alarmInput.style.display = "none";
    }
  };

  this.render();
}

export default AlarmInput;
