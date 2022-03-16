// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryBox = document.querySelector("div.gallery");

galleryItems.forEach((el) => {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.alt = el.description;

  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
});

galleryBox.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log(ev.target.alt);
});

galleryBox.onclick = (ev) => {
  const lightbox = new SimpleLightbox(".gallery a", {
    spinner: false,
    captionsData: "alt",
    captionPosition: "outside",
    captionDelay: 250,
  });
};