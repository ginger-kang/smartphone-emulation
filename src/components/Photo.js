import SelectedPhoto from "./SelectedPhoto.js";
import { PHOTO_LIST } from "../constant.js";

function Photo({ $app }) {
  this.photoList = PHOTO_LIST;
  this.selectedPhoto = 0;

  this.$target = document.createElement("section");
  this.$target.id = "photo-container";

  const photoListWrapper = document.createElement("ul");

  photoListWrapper.id = "photo-list-wrapper";
  photoListWrapper.addEventListener("click", e => onPhotoClick(e));
  photoListWrapper.innerHTML = this.photoList
    .map(
      photo => `
        <li class="photo-list">
          <img src="/src/assets/${photo}" alt="photo" />
        </li>
      `,
    )
    .join("");

  this.$target.appendChild(photoListWrapper);

  const selectedPhoto = new SelectedPhoto({
    $target: this.$target,
    selectedPhoto: this.selectedPhoto,
  });

  $app.appendChild(this.$target);

  const onPhotoClick = e => {
    const parent = document.querySelector("#photo-list-wrapper");
    let idx;
    if (parent === e.target) return;

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].classList.contains("selected")) {
        parent.children[i].classList.remove("selected");
      }
      if (parent.children[i] === e.target.parentNode) {
        idx = i;
      }
    }

    this.setState(idx);
  };

  this.setState = nextState => {
    this.selectedPhoto = nextState;

    selectedPhoto.setState(this.selectedPhoto);
    this.render();
  };

  this.render = () => {
    for (let i = 0; i < photoListWrapper.children.length; i++) {
      if (
        photoListWrapper.children[i] ===
        photoListWrapper.children[this.selectedPhoto]
      ) {
        photoListWrapper.children[i].classList.add("selected");
      }
    }
  };

  this.render();
}

export default Photo;
