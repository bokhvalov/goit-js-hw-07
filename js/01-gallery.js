import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  const itemMarkup = `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;

  galleryEl.insertAdjacentHTML("beforeend", itemMarkup);
});

galleryEl.addEventListener("click", onElementClick);

function onElementClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  escapeHandling(instance);
}

function escapeHandling(instance) {
  if (basicLightbox.visible()) {
    document.addEventListener(
      "keydown",
      (evt) => {
        if (evt.key === "Escape") {
          instance.close();
        }
      },
      { once: true }
    );
  }
}
