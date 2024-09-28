// Toggle Menu Bars and Navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Scroll behavior for navigation links
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
}

// Search Icon Toggle for Search Form
document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

// Swiper Slider Configurations
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Search Form Logic (for form opening/closing)
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

// Example data for searching
const data = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry"];

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  const filteredData = data.filter(item => item.toLowerCase().includes(query));

  displayResults(filteredData);
});

function displayResults(results) {
  searchResults.innerHTML = ''; // Clear previous results

  if (results.length > 0) {
    results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.textContent = result;
      searchResults.appendChild(resultItem);
    });
  } else {
    searchResults.textContent = 'No results found';
  }
}
