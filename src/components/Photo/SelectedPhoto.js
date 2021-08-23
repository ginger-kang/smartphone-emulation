import { PHOTO_LIST } from "../../util/constant.js";

function SelectedPhoto({ $target, selectedPhoto }) {
  this.selectedPhoto = selectedPhoto;

  const selectedPhotoWrapper = document.createElement("div");
  selectedPhotoWrapper.id = "selected-photo-wrapper";
  selectedPhotoWrapper.style.height = `${window.innerHeight - 150}px`;

  const photo = document.createElement("img");
  photo.setAttribute("src", `/src/assets/${PHOTO_LIST[this.selectedPhoto]}`);
  photo.setAttribute("alt", "photo");

  selectedPhotoWrapper.appendChild(photo);
  $target.appendChild(selectedPhotoWrapper);

  this.setState = nextState => {
    this.selectedPhoto = nextState;

    this.render();
  };

  this.render = () => {
    photo.setAttribute("src", `/src/assets/${PHOTO_LIST[this.selectedPhoto]}`);
  };

  this.render();
}

export default SelectedPhoto;
