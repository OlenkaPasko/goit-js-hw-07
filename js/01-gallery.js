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
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>;