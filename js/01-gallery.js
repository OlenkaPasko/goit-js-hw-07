import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
};

//create modal
const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onLinkClick);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onLinkClick);
      },
    }
  );

  instance.show();
}
function onLinkClick(event) {
  if (event.code === "Escape") return; 
    instance.close();
  }

