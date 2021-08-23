import { getItem, setItem } from "../util/localStorage.js";
import { ALARM, MEMO, PHOTO, APP_SEQUENCE } from "../util/constant.js";

function Home({ $app, routeHandler }) {
  this.appSequence = getItem(APP_SEQUENCE) ?? [ALARM, MEMO, PHOTO];

  this.$target = document.createElement("section");
  this.$target.id = "home-container";
  $app.appendChild(this.$target);

  const dragDropHandler = () => {
    let nextSequence = [];

    for (let i = 0; i < this.$target.children.length; i++) {
      if (this.$target.children[i].textContent === "알람") {
        nextSequence.push(ALARM);
      } else if (this.$target.children[i].textContent === "메모") {
        nextSequence.push(MEMO);
      } else {
        nextSequence.push(PHOTO);
      }
    }

    setItem(APP_SEQUENCE, [...nextSequence]);
    this.setState([...nextSequence]);
  };

  const getDragAfterElement = (container, x) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  };

  this.setState = nextState => {
    this.appSequence = nextState;
  };

  this.render = () => {
    this.appSequence.forEach(app => {
      let text;
      const appButton = document.createElement("button");
      appButton.className = "app-button draggable";
      appButton.setAttribute("draggable", "true");

      if (app === ALARM) {
        text = "알람";
      } else if (app === MEMO) {
        text = "메모";
      } else if (app === PHOTO) {
        text = "사진";
      }

      appButton.innerText = text;
      appButton.addEventListener("click", () => routeHandler(app));

      this.$target.appendChild(appButton);
    });

    const draggables = document.querySelectorAll(".draggable");

    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    this.$target.addEventListener("dragover", e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(this.$target, e.clientX);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        this.$target.appendChild(draggable);
      } else {
        this.$target.insertBefore(draggable, afterElement);
      }
      dragDropHandler();
    });
  };

  this.render();
}

export default Home;
