import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
/*Створення і рендер розмітки на підставі масиву даних galleryItems 
і наданого шаблону елемента галереї.
Реалізація делегування на div.gallery і отримання url великого зображення.
Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
Використовуй CDN сервіс jsdelivr і 
додай у проект посилання на мініфіковані(.min) файли бібліотеки.
Відкриття модального вікна по кліку на елементі галереї. 
Для цього ознайомся з документацією і прикладами.
Заміна значення атрибута src елемента < img >
в модальному вікні перед відкриттям.
Використовуй готову розмітку модального вікна із 
зображенням з прикладів бібліотеки basicLightbox.*/

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
const gallery = document.querySelector(".gallery");
const createGallery = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", createGallery);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}


//const markup = newTechnologies
  //.map((technology) => `<li class="list-item new">${technology}</li>`)
  //.join("");


/*<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>;
const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement('img');
  
  img.classList.add('gallery__image');
  img.dataset.source = original;
  img.src = preview;
  img.alt = description;
  
  parent.appendChild(img);
};

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
console.log(_)*/