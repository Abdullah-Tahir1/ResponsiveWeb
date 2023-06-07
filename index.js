// JavaScript code for slideshow functionality

// Get all slideshow containers
const slideshowContainers = document.querySelectorAll(".slideshow-container");

// Preload images for each slideshow
function preloadImages(slideshow) {
  const images = slideshow.querySelectorAll("img");
  images.forEach((image) => {
    const src = image.getAttribute("src");
    new Image().src = src;
  });
}

// Show image with fading effect for each slideshow
function showImage(slideshow, index) {
  const images = slideshow.querySelectorAll("img");
  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}

// Switch to next slide for each slideshow
function nextSlide(slideshow) {
  const images = slideshow.querySelectorAll("img");
  let currentIndex = 0;
  images.forEach((image, i) => {
    if (image.style.opacity === "1") {
      currentIndex = i;
    }
    image.style.opacity = 0;
  });
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(slideshow, currentIndex);
}

// Initialize each slideshow
slideshowContainers.forEach((slideshow) => {
  preloadImages(slideshow);
  showImage(slideshow, 0);
  setInterval(() => {
    nextSlide(slideshow);
  }, 3000); // Change slide every 3 seconds
});

// Get all the <a> tags
const links = document.querySelectorAll("a");

// Add click event listener to each <a> tag
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove the "active" class from all <a> tags
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked <a> tag
    this.classList.add("active");

    // Get the target URL from the href attribute
    const targetUrl = this.getAttribute("href");

    // Redirect to the target URL
    window.location.href = targetUrl;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const rakElement = document.getElementById("rak");
  const uaqElement = document.getElementById("uaq");

  function updateNavLabels() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1200) {
      rakElement.textContent = "RAK";
      uaqElement.textContent = "UAQ";
    } else {
      rakElement.textContent = "Ras Al Khaimah";
      uaqElement.textContent = "Umm Al Quwain";
    }
  }

  // Update labels on initial page load
  updateNavLabels();

  // Update labels when window is resized
  window.addEventListener("resize", updateNavLabels);
});
