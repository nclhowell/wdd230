let imagesToLoad = document.querySelectorAll('img[fat-data]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('fat-data'));
  image.onload = () => {
    image.removeAttribute('fat-data');
  };
};

imagesToLoad.forEach((img) => {
  loadImages(img);
});
