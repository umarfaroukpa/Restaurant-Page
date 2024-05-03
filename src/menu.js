const menuPage = () => {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");

  menu.setAttribute("data-tab-target", "menu");
  menu.setAttribute("id", "menu");
  menu.classList.add("menu-body");
  menu.innerHTML = ` <div class="food-gala">
  <div class="menu-items"> 
      <div class="photo-card">
        <img src="/food-gala/nigerian-akara__1_-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Akara</h2>
          <hr>
          <p>Country: Nigeria</p>
          <hr>
          <p>Price: $0.3</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/nigerian-food__1_-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Jollof</h2>
          <hr>
          <p>Country: Nigeria</p>
          <hr>
          <p>Price: $3.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/congo-SakaSaka-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>SakaSaka</h2>
          <hr>
          <p>Country: Congo</p>
          <hr>
          <p>Price: $2.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/gambian-domoda-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Domoda</h2>
          <hr>
          <p>Country: Gambia</p>
          <hr>
          <p>Price: $3.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/ghanian-angwa-mu-removebg-preview (1).png" alt="Photo">
        <div class="description">
          <h2>Angwa-mu</h2>
          <hr>
          <p>Country: Ghana</p>
          <hr>
          <p>Price: $4.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/ivorian-snacks-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Ivorian-Snacks</h2>
          <hr>
          <p>Country: Ivory Cost</p>
          <hr>
          <p>Price: $3.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/tanzanian-ugali-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Ugali</h2>
          <hr>
          <p>Country: Tanzania</p>
          <hr>
          <p>Price: $2.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/pic_2b0c2af0d58589a081974291b7d6a2f6-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Fufu</h2>
          <hr>
          <p>Country: Liberia</p>
          <hr>
          <p>Price: $2.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/liberia_25d91c10fcf1996eba1e12e84c89885f-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Liberian-Food</h2>
          <hr>
          <p>Country: Liberia</p>
          <hr>
          <p>Price: $2.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/liberia_a81530f49da252dae2229144cb9974db-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Meat_Skewers</h2>
          <hr>
          <p>Country: Namibia</p>
          <hr>
          <p>Price: $5.2</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/Meat_skewers__TOP_10_Traditional_Namibian_Foods_you_MUST_try___Namibian-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Fast Food</h2>
          <hr>
          <p>Country: South Africa</p>
          <hr>
          <p>Price: $10.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/south_africa_0ead31275f67218f612a898e00b738ef-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2></h2>
          <hr>
          <p>Country: South Africa</p>
          <hr>
          <p>Price: $9.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/south_africa_e855dba400535220540d980c7b120610-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Benin Food</h2>
          <hr>
          <p>Country: Benin</p>
          <hr>
          <p>Price: $4.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>
      <div class="photo-card">
        <img src="food-gala/Top_20_Most_Popular_Foods_in_Benin_-_Chef_s_Pencil__1_-removebg-preview.png" alt="Photo">
        <div class="description">
          <h2>Benin Suya</h2>
          <hr>
          <p>Country: Benin</p>
          <hr>
          <p>Price: $3.0</p>
          <button class="order-btn">ORDER NOW</button>
        </div>
      </div>

  </div>
  </div>
</div>`;

  content.appendChild(menu);
};
export { menuPage };