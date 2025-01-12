function htmlInsert(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const target = document.getElementById(id);
      target.innerHTML = data;
    });
}

//htmlInsert("footer-container", "footer.html");
//example implemenation that can be mirrored for both functions 

function navInser(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const target = document.getElementById(id);
      target.innerHTML = data;

      // Highlight the active navigation link
      const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      const navLinks = target.querySelectorAll('nav ul li a'); 
      navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
          link.classList.add('active');
        }
      });
    });
}

//RANDOM IMAGES
function randomImage(){ 
// Array of image file paths
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
];

// Function to get a random index
const randomIndex = Math.floor(Math.random() * images.length);

// Set the src attribute of the img element to a random image
document.getElementById('randomImage').src = images[randomIndex];
}


//RESIZE CAROUSEL IMAGES
// Assuming your carousel is contained in a div with the id 'myCarousel'
const carousel = document.getElementById('myCarousel');
const carouselImages = carousel.querySelectorAll('.carousel-inner img');

// Function to resize images dynamically
function resizeCarouselImages() {
  carouselImages.forEach(image => {
    image.style.height = `${carousel.clientHeight}px`; // Set image height to carousel height
  });
}

// Call the resize function initially when the page loads
resizeCarouselImages();

// Call the resize function again whenever the window size changes
window.addEventListener('resize', resizeCarouselImages);
