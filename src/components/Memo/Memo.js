import MemoInput from "./MemoInput.js";
import { getItem, setItem } from "../../util/localStorage.js";
import { NEW, MEMO_LIST } from "../../util/constant.js";

function Memo({ $app }) {
  this.memoList = getItem(MEMO_LIST) ?? [];
  this.memoInputDisplay = false;

  const memoInputDisplayHandler = display => {
    this.memoInputDisplay = display;

    memoInput.setState(this.memoInputDisplay);
  };

  const onMemoInputSubmit = inputMemoData => {
    this.setState([...this.memoList, inputMemoData]);
  };

  const onExpandHandler = e => {
    const parent = document.querySelector("#memo-list-wrapper");

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].style.height === "auto") {
        parent.children[i].style.height = "2em";
      }
    }

    e.target.style.height = "auto";
  };

  this.$target = document.createElement("section");
  this.$target.id = "memo-container";

  const newButton = document.createElement("button");
  newButton.id = "new-button";
  newButton.innerText = NEW;
  newButton.addEventListener("click", () => memoInputDisplayHandler(true));

  const memoInput = new MemoInput({
    $target: this.$target,
    memoInputDisplay: this.memoInputDisplay,
    memoInputDisplayHandler,
    onMemoInputSubmit,
  });

  this.$target.appendChild(newButton);
  $app.appendChild(this.$target);

  this.setState = nextState => {
    this.memoList = nextState;
    setItem(MEMO_LIST, nextState);

    this.render();
  };

  this.render = () => {
    const prevList = document.querySelector("#memo-list-wrapper");
    if (prevList) {
      prevList.remove();
    }

    const memoListWrapper = document.createElement("ul");
    memoListWrapper.id = "memo-list-wrapper";
    memoListWrapper.addEventListener("click", e => onExpandHandler(e));
    memoListWrapper.innerHTML = this.memoList
      .map(
        memo => `
          <li class="memo-list">${memo}</li>
        `,
      )
      .join("");

    this.$target.appendChild(memoListWrapper);
  };

  this.render();
}

export default Memo;
