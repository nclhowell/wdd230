let imagesToLoad = document.querySelectorAll('img[fat-data]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('fat-data'));
  image.onload = () => {
    image.removeAttribute('fat-data');
  };
};

setTimeout(() => {imagesToLoad.forEach((img) => {
  loadImages(img);
});
<<<<<<< HEAD
}, 7000);
=======
}, 5000);
>>>>>>> a8a69c7c8d64053f3e4bfb6775bdf0e81f0aeb0a
