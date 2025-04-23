const footerPage = (content) => {
    const footer = document.createElement("footer");
    footer.className = "footer-page";
    footer.innerHTML = `
      <div class="footer-content">
        <p>Made by Umar Farouk Ilyas for The Odin Project &copy; 2024</p>
      </div>
    `;
  
    content.appendChild(footer);
  };
  
  export { footerPage };