import _ from "lodash";
import "./style.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import { navPage } from "./nav";
import { footerPage } from "./footer";

const content = document.querySelector("#content");
let currentPage = null;

navPage(); // Render navigation


// Initial load of the home page
loadPage("#home");

// Event handler for navigation
function navigate(event) {
  const targetPage = event.target.getAttribute("data-tab-target");
  loadPage(targetPage);
}

// Function to load page content
function loadPage(pageId) {
  // Remove existing content
  content.innerHTML = "";

  // Load corresponding page content
  switch (pageId) {
    case "#home":
      homePage(content);
      break;
    case "#menu":
      menuPage(content);
      break;
    case "#contact":
      contactPage(content);
      break;
    default:
      homePage(content); // Default to home page
  }

  // Update current page
  currentPage = pageId;
  footerPage(content);
}

// Add event listeners to navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", navigate);
});

// Function to add or remove the on-top class based on image position
function updateImagePosition() {
  // Check if the image element exists
  const images = document.querySelectorAll('.photo-card');
  images.forEach(image => {
    // Get the distance of the image from the top of the viewport
    const distanceFromTop = image.getBoundingClientRect().top;

    // Check if the image is in the center of the viewport
    if (distanceFromTop >= window.innerHeight / 2) {
      // Add the on-top class to the menu items
      const menuItems = image.querySelectorAll('.menu-items');
      menuItems.forEach(item => {
        item.classList.add('on-top');
      });
    } else {
      // Remove the on-top class from the menu items
      const menuItems = image.querySelectorAll('.menu-items');
      menuItems.forEach(item => {
        item.classList.remove('on-top');
      });
    }
  });
}

// Call the updateImagePosition function initially
updateImagePosition();

// Add event listener for scroll event to update image position
window.addEventListener('scroll', updateImagePosition);
