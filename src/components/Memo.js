import { NEW } from "../constant.js";

function Memo({ $app }) {
  this.memoList = [
    "메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!",
    "메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!",
    "메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!메모 테스트!!",
  ];

  this.$target = document.createElement("section");
  this.$target.id = "memo-container";

  const newButton = document.createElement("button");
  newButton.id = "new-button";
  newButton.innerText = NEW;

  this.$target.appendChild(newButton);
  $app.appendChild(this.$target);

  this.setState = nextState => {
    this.memoList = nextState;

    this.render();
  };

  this.render = () => {
    const prevList = document.querySelector("#memo-list-wrapper");
    if (prevList) {
      prevList.remove();
    }

    const memoListWrapper = document.createElement("ul");
    memoListWrapper.id = "memo-list-wrapper";
    memoListWrapper.innerHTML = this.memoList
      .map(
        memo => `
          <li class="memo-list">
            <span class="memo-list-text">${memo}</span>
          </li>
        `,
      )
      .join("");

    this.$target.appendChild(memoListWrapper);
  };

  this.render();
}

export default Memo;
