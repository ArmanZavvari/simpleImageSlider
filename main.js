const sliderImages = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");

let currentImage = 0;

function renderImages() {
  sliderImages.forEach((image) => {
    sliderDom.innerHTML += "<img src='" + image + "' />";
  });
}

function clearImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
}

function showImage() {
  clearImages();
  document.getElementsByTagName("img")[currentImage].style.opacity = 1;
}

function init() {
  renderImages();
  showImage();
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");
  
  nextButton.addEventListener("click", function() {
    currentImage = (currentImage + 1) % sliderImages.length;
    showImage();
  });
  
  prevButton.addEventListener("click", function() {
    currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
    showImage();
  });
}

init();
