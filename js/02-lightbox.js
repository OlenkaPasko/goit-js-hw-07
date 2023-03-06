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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

//При використанні окремого варіанту (`simple-lightbox(.min).js`)
//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
//let gallery = new SimpleLightbox('.gallery a');
//gallery.on('show.simplelightbox', function () {
// do something…
//});

//gallery.on('error.simplelightbox', function (e) {
 // some usefull information
//});

///For the default setup, you just need links that are pointing to images.
//div class="gallery">
    //<a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
   // <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
//</div>