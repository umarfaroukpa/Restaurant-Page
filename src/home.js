// home.js
const homePage = () => {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("home-body");
  home.innerHTML = `
  <div class="main" id="home">
    <div class="card">
     <div class="card-content">
       <h2>ABOUT AFRI DISH</h2>
        <P>
        We aim for preserving African cultural heritage and promoting African cultural food. These are some selected African countries with their popular dishes
       </P>
      </div>
    </div>
  </div>

  `;

  content.appendChild(home);
};

export { homePage };
