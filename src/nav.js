const navPage = () => {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  header.classList.add("nav-body")

  header.innerHTML = `
  <header>
   <nav class="navmenu">
   <h1>Afri Dish</h1>

  <button data-tab-target="#home" class="nav-link">Home</button>
  <button data-tab-target="#menu" class="nav-link">Menu</button>
  <button data-tab-target="#contact" class="nav-link">Contact</button>

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
};
export { navPage };
