// Store a reference to our images so we can manipulate them
const images = document.getElementsByClassName('blog-article__img');

/**
 * Handles window scroll events to trigger image slide-in/out.
 * @param {any} event The document scroll event.
 */
function handleScroll() {
  const windowHeight = window.innerHeight;

  // Slide in or out images depending on their vertical document offset in relation to the user scroll position
  for (let image of images) {
    if (image.offsetTop + image.clientHeight < window.scrollY || image.offsetTop + image.clientHeight > window.scrollY + windowHeight) {
      slideOutImage(image);
    } else if (image.offsetTop <= window.scrollY + windowHeight) {
      slideInImage(image);
    }
  }
}

/**
 * Makes an images slide into the view.
 * @param {Element} image The image to slide in on the DOM.
 */
function slideInImage(image) {
  image.classList.add('slide-in');
}

/**
 * Makes an images slide out fromr the view.
 * @param {Element} image The image to slide in on the DOM.
 */
function slideOutImage(image) {
  image.classList.remove('slide-in');
}

/**
 * Slides in any image that is rendered above the fold.
 */
function slideInAboveFoldImages() {
  const windowHeight = window.innerHeight;
  for (let image of images) {
    if (image.offsetTop <= window.scrollY + windowHeight) {
      slideInImage(image);
    }
  }
}

// Listen to scroll events on the document so we can handle image slide-in/out dynamically
window.addEventListener('scroll', handleScroll);

// We want to ensure images above the fold automatically slide in when the page loads
slideInAboveFoldImages();
