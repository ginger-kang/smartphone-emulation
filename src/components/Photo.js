const photos = [
  "biei.jpg",
  "gintama.jpeg",
  "home.png",
  "huji.jpeg",
  "kamakura.jpeg",
  "ocean.jpg",
  "sakura.jpeg",
  "shibuya.jpeg",
  "sunset.jpg",
  "windmill.png",
];

function Photo({ $app }) {
  this.photoList = photos;
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
  $app.appendChild(this.$target);

  const onPhotoClick = e => {
    const parent = document.querySelector("#photo-list-wrapper");
    let idx;

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
