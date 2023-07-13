import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
  </a>
 </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", handleClick);

function handleClick(ev) {
  ev.preventDefault();
  const { target } = ev;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const originalImageUrl = target.dataset.source;

  //   console.log(target);

  //   console.log(originalImageUrl);

  const modalImageEl = basicLightbox.create(`
    <div><img src="${originalImageUrl}" alt=""></div>`);
  modalImageEl.show();

  document.addEventListener("keydown", hadleEscapePress);
  function hadleEscapePress(ev) {
    if (ev.key === "Escape") {
      modalImageEl.close();
      document.removeEventListener("keydown", hadleEscapePress);
    }
  }
}

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і
// наданого шаблону елемента галереї.

// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// і вказуватися в href посилання.
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням
// користувач буде перенаправлений на іншу сторінку.
// Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
