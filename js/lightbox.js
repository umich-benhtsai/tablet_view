const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const images = document.querySelectorAll("img");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImage.src = image.src;
  });
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.style.display === "block") {
    lightbox.style.display = "none";
  }
});
