const navPage = () => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  header.classList.add("nav-body");

  header.innerHTML = `
    <header>
      <nav class="navmenu">
        <h1>Afri Dish</h1>
        <div class="nav-links">
          <button data-tab-target="#home" class="nav-link">Home</button>
          <button data-tab-target="#menu" class="nav-link">Menu</button>
          <button data-tab-target="#contact" class="nav-link">Contact</button>
        </div>
        <div class="hamburger">
          <span class="mobile"></span>
          <span class="mobile"></span>
          <span class="mobile"></span>
        </div>
      </nav>
    </header>
  `;

  content.appendChild(header);
  document.body.insertBefore(header, content);

  // Hamburger menu toggle
  const hamburger = header.querySelector('.hamburger');
  const navLinks = header.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
};

export { navPage };