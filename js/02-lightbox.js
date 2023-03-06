import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview} 
  alt=${description}" />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createGallery);
//При використанні окремого варіанту (`simple-lightbox(.min).js`)
//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
//let gallery = new SimpleLightbox('.gallery a');
//gallery.on('show.simplelightbox', function () {
// do something…
//});

//gallery.on('error.simplelightbox', function (e) {
console.log(e); // some usefull information
//});
