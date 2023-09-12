import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.js-gallery');
function getGalleryCard(arr) {
    return arr.map(({preview,original,description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>` ).join('');  
}
container.insertAdjacentHTML('beforeend', getGalleryCard(galleryItems));

container.addEventListener('click', onclick);

function onclick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
        return
    }
 function openModalWindow() {
  modalWindow.show();  
}

function closeModalWindow(evt) {
    if (evt.code === 'Escape' && modalWindow.visible() === true) {
        modalWindow.close();
    }
};   
  
const modalWindow = basicLightbox.create(`
     <img src="${evt.target.dataset.source}">
`,  {
      onShow: () => document.addEventListener("keydown", closeModalWindow),
      onClose: () => document.removeEventListener("keydown", closeModalWindow),
    }
);
    openModalWindow()
};