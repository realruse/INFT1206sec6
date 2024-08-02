const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText = ["Closeup of a human eye", "Inside of a seashell", "White and purple flowers", "Ancient Egyptian drawings", "Butterfly on a leaf"];

/* Clearing any existing thumbnails */
while (thumbBar.firstChild) {
    thumbBar.removeChild(thumbBar.firstChild);
  }
  
/* Looping through images */

for (let i = 0; i < imageFilenames.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', imageFilenames[i]);
newImage.setAttribute('alt', altText[i]);
thumbBar.appendChild(newImage);
}

/* Adding click event listener to thumbnail images */
thumbBar.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      displayedImage.src = event.target.src;
      displayedImage.alt = event.target.alt;
    }
  });

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken') {
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      btn.textContent = 'Lighten';
    } else {
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      btn.textContent = 'Darken';
    }
  });