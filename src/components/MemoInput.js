import { ENTER_MEMO } from "../util/constant.js";

function MemoInput({
  $target,
  memoInputDisplay,
  memoInputDisplayHandler,
  onMemoInputSubmit,
}) {
  this.memoInputDisplay = memoInputDisplay;

  const memoInput = document.createElement("input");
  memoInput.id = "memo-input";
  memoInput.style.display = "none";
  memoInput.placeholder = ENTER_MEMO;
  memoInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      const memo = memoInput.value;

      memoInput.value = "";
      memoInputDisplayHandler(false);
      onMemoInputSubmit(memo);
    }
  });

  $target.appendChild(memoInput);

  this.setState = nextState => {
    this.memoInputDisplay = nextState;

    this.render();
  };

  this.render = () => {
    if (this.memoInputDisplay) {
      memoInput.style.display = "block";
    } else {
      memoInput.style.display = "none";
    }
  };

  this.render();
}

export default MemoInput;
