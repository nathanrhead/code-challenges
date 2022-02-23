'use strict';

// Dynamically generated image urls based on knoweledge of the directory name, the structure of the file names, and the number of images. 
const getImageUrls = (directory, numOfImages) => {
   // Create and instantiate an array of HTML Image Elements.
  const htmlImageElementsArray = new Array();
  for (let i = 0; i < numOfImages; i++) {
    htmlImageElementsArray[i] = new Image();
    htmlImageElementsArray[i].src = `./${directory}/image${i+1}.jpg`;
  }
  
  // Alternatively, create and instantiate an array of image URLs.
  const imageUrlsArray = [];
  for (let i = 0; i < numOfImages; i++) {
    imageUrlsArray.push(`./${directory}/image${i+1}.jpg`);
  }

  // return htmlImageElementsArray;
  return imageUrlsArray;
  
};

// Helper function to display a selection of images within a range.
const displayImages = (carousel, left = 1, right = 2) => {
  const images = carousel.children;
  for (let { id } of images) {
    if (id >= left && id <= right) {
      document.getElementById(id).classList.add('display-image');
      // carousel.children.getElementById(id).classList.add('display-image');
    } else 
      document.getElementById(id).classList.remove('display-image');
      // carousel.children.getElementById(id).classList.remove('display-image');
  }
}

// Render all images to the DOM.
const renderAllImages = ((imageUrls, range) => {
  // Error check.
  if (!imageUrls || imageUrls.length <= 0 || !range || range <= 0) return;
  if (range >= 4) range = 4;

  console.log({imageUrls});

  // Instantiate left and right variables to indicate the range of images to be displayed.
  let right = range;
  let left = right - right + 1;
  
  // Get the anchor point for the carousel's container.
  const anchor = document.querySelector('.image-carousel-anchor');

  // Create a container for the carousel and the left and right arrows for scrolling; assign it a class; and append it to the anchor.
  const carouselContainer = document.createElement('div');
  carouselContainer.setAttribute('class', 'carousel-container');
  anchor.appendChild(carouselContainer);

  // Create a container for the carousel proper; assign it a class; and append it to its container.
  const carousel = document.createElement('div');
  carousel.setAttribute('class', 'image-carousel');
  carouselContainer.appendChild(carousel);

  // Add an event listener to the carousel container to capture, parse, and use the click event to determine whether to scroll left or right.
  carouselContainer.addEventListener('click', event => {
    const target = event.target.className;
  
    if (target === 'left-arrow') {
      if (left > 1) {
        left = left - range;
        right = right - range;
      } else {
        left = imageUrls.length - range + 1;
        right = imageUrls.length;
      }
    } else if (target === 'right-arrow') {
      if (right < imageUrls.length) {
        right = right + range;
        left = left + range;
      } else {
        left = 1;
        right = range;
      }
    } else return;

    displayImages(carousel, left, right);
  });

  // Create the scroll arrows: span elements; assign them classes.
  const leftArrowContainer = document.createElement('div');
  const rightArrowContainer = document.createElement('div');
  leftArrowContainer.setAttribute('class', 'left-arrow-container');
  rightArrowContainer.setAttribute('class', 'right-arrow-container');
  const leftArrow = document.createElement('span');
  const rightArrow = document.createElement('span');
  leftArrow.setAttribute('class', 'left-arrow');
  rightArrow.setAttribute('class', 'right-arrow');
  leftArrowContainer.appendChild(leftArrow);
  rightArrowContainer.appendChild(rightArrow);
  
  // Append the carousel container after appending the leftArrowContainer and before the right one, so that the left and right arrows are on either side. (This can be handled this in CSS using transform: translateX(-100%) and (100%), but for some reason, that seems hokey to me.)
  carouselContainer.appendChild(leftArrowContainer);
  carouselContainer.appendChild(carousel);
  carouselContainer.appendChild(rightArrowContainer);
  
  // Loop through the imageUrls and create image elements with classes from indexes and append to the carousel proper.
  imageUrls.forEach((image, idx) => {
    const imageDiv = document.createElement('img'); // Use if the image array is made up only of URLs.
    // const imageDiv = image; // Use if using new Image to populate the images array.
    imageDiv.setAttribute('class', range > 2 ? 'image-small' : range === 2 ? 'image-normal' : 'image-mobile');
    imageDiv.setAttribute('id', idx+1);
    imageDiv.setAttribute('src', image);
    imageDiv.setAttribute('alt', 'Photo from Georgia');
    carousel.appendChild(imageDiv);
  }); 

  // Call the helper function to display a selection of images.
  displayImages(carousel, left, right);
})(getImageUrls('Images', 8), 10);

