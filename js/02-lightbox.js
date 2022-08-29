import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  const itemMarkup = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

  galleryEl.insertAdjacentHTML("beforeend", itemMarkup);
});

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
