import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const createGallery = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
