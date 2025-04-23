const menuPage = () => {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");

  menu.setAttribute("data-tab-target", "menu");
  menu.setAttribute("id", "menu");
  menu.classList.add("menu-body");
  
  // Create a cart container that will be shown/hidden
  const cartHTML = `
    <div class="cart-container" id="cart-container">
      <div class="cart-header">
        <h2>Your Order</h2>
        <button id="close-cart" class="close-cart-btn">×</button>
      </div>
      <div id="cart-items" class="cart-items">
        <!-- Cart items will be added here dynamically -->
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total:</span>
          <span id="cart-total-price">$0.00</span>
        </div>
        <button id="checkout-btn" class="checkout-btn">Checkout</button>
      </div>
    </div>
  `;

  // Add a cart button and counter in the header
  const cartButton = `
    <div class="cart-button-container">
      <button id="view-cart" class="view-cart-btn">
        <i class="fa fa-shopping-cart"></i> 
        <span id="cart-count">0</span>
      </button>
    </div>
  `;

  menu.innerHTML = `
    <div class="menu-header">
      <h1>African Cuisine Menu</h1>
      <p>Experience authentic flavors from across the continent</p>
      ${cartButton}
    </div>
    ${cartHTML}
    <div class="food-gala">
      <div class="menu-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="Nigeria">Nigeria</button>
        <button class="filter-btn" data-filter="Ghana">Ghana</button>
        <button class="filter-btn" data-filter="SouthAfrica">South Africa</button>
        <button class="filter-btn" data-filter="Other">Other Countries</button>
      </div>
      <div class="menu-items"> 
        <div class="photo-card" data-country="Nigeria">
          <div class="menu-item-badge">Popular</div>
          <img src="food-gala/nigerian-akara__1_-removebg-preview (1).png" alt="Akara">
          <div class="description">
            <h2>Akara</h2>
            <hr>
            <p>Country: Nigeria</p>
            <hr>
            <p class="price">Price: $0.30</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="akara" data-name="Akara" data-price="0.30" data-img="food-gala/nigerian-akara__1_-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Nigeria">
          <img src="food-gala/nigerian-food__1_-removebg-preview (2).png" alt="Jollof Rice">
          <div class="description">
            <h2>Jollof Rice</h2>
            <hr>
            <p>Country: Nigeria</p>
            <hr>
            <p class="price">Price: $3.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="jollof" data-name="Jollof Rice" data-price="3.00" data-img="food-gala/nigerian-food__1_-removebg-preview (2).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Congo">
          <img src="food-gala/congo-SakaSaka-removebg-preview (1).png" alt="SakaSaka">
          <div class="description">
            <h2>SakaSaka</h2>
            <hr>
            <p>Country: Congo</p>
            <hr>
            <p class="price">Price: $2.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="sakasaka" data-name="SakaSaka" data-price="2.00" data-img="food-gala/congo-SakaSaka-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Gambia">
          <img src="food-gala/gambian-domoda-removebg-preview (1).png" alt="Domoda">
          <div class="description">
            <h2>Domoda</h2>
            <hr>
            <p>Country: Gambia</p>
            <hr>
            <p class="price">Price: $3.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="domoda" data-name="Domoda" data-price="3.00" data-img="food-gala/gambian-domoda-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Ghana">
          <div class="menu-item-badge">Chef's Choice</div>
          <img src="food-gala/ghanian-angwa-mu-removebg-preview (1) (1).png" alt="Angwa-mu">
          <div class="description">
            <h2>Angwa-mu</h2>
            <hr>
            <p>Country: Ghana</p>
            <hr>
            <p class="price">Price: $4.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="angwamu" data-name="Angwa-mu" data-price="4.00" data-img="food-gala/ghanian-angwa-mu-removebg-preview (1) (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="IvoryCoast">
          <img src="food-gala/ivorian-snacks-removebg-preview (1).png" alt="Ivorian Snacks">
          <div class="description">
            <h2>Ivorian Snacks</h2>
            <hr>
            <p>Country: Ivory Coast</p>
            <hr>
            <p class="price">Price: $3.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="ivoriansnacks" data-name="Ivorian Snacks" data-price="3.00" data-img="food-gala/ivorian-snacks-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Tanzania">
          <img src="food-gala/tanzanian-ugali-removebg-preview (1).png" alt="Ugali">
          <div class="description">
            <h2>Ugali</h2>
            <hr>
            <p>Country: Tanzania</p>
            <hr>
            <p class="price">Price: $2.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="ugali" data-name="Ugali" data-price="2.00" data-img="food-gala/tanzanian-ugali-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div class="photo-card" data-country="Liberia">
          <img src="food-gala/pic_2b0c2af0d58589a081974291b7d6a2f6-removebg-preview (1).png" alt="Fufu">
          <div class="description">
            <h2>Fufu</h2>
            <hr>
            <p>Country: Liberia</p>
            <hr>
            <p class="price">Price: $2.00</p>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" class="qty-input" value="1" min="1" max="10">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="add-to-cart-btn" data-id="fufu" data-name="Fufu" data-price="2.00" data-img="food-gala/pic_2b0c2af0d58589a081974291b7d6a2f6-removebg-preview (1).png">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Checkout Modal -->
    <div id="checkout-modal" class="modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Complete Your Order</h2>
        <form id="checkout-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="address">Delivery Address</label>
            <textarea id="address" name="address" required></textarea>
          </div>
          <div class="form-group">
            <label for="payment">Payment Method</label>
            <select id="payment" name="payment" required>
              <option value="">-- Select Payment Method --</option>
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="mobile">Mobile Money</option>
            </select>
          </div>
          <div class="checkout-summary">
            <h3>Order Summary</h3>
            <div id="checkout-items"></div>
            <div class="checkout-total">
              <strong>Total: </strong>
              <span id="checkout-total-price">$0.00</span>
            </div>
          </div>
          <button type="submit" class="place-order-btn">Place Order</button>
        </form>
      </div>
    </div>
    
    <!-- Order Success Modal -->
    <div id="success-modal" class="modal">
      <div class="modal-content success-content">
        <span class="close-modal">&times;</span>
        <div class="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your order. Your delicious African cuisine will be prepared and delivered soon.</p>
        <p>Order confirmation has been sent to your email.</p>
        <button id="continue-shopping" class="continue-btn">Continue Shopping</button>
      </div>
    </div>
  `;

  content.appendChild(menu);
  
  // Initialize cart functionality
  initializeCart();
  
  // Initialize menu filter functionality
  initializeMenuFilter();
  
  // Initialize quantity controls
  initializeQuantityControls();
  
  // Initialize modals
  initializeModals();
};

// Cart initialization function
function initializeCart() {
  let cart = [];
  
  // Add to cart button click event
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-id');
      const itemName = button.getAttribute('data-name');
      const itemPrice = parseFloat(button.getAttribute('data-price'));
      const itemImg = button.getAttribute('data-img');
      const quantity = parseInt(button.closest('.item-controls').querySelector('.qty-input').value);
      
      // Check if item is already in cart
      const existingItem = cart.find(item => item.id === itemId);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          id: itemId,
          name: itemName,
          price: itemPrice,
          quantity: quantity,
          img: itemImg
        });
      }
      
      // Update cart UI
      updateCartUI();
      
      // Show confirmation toast
      showToast(`${quantity} × ${itemName} added to cart!`);
    });
  });
  
  // View cart button click event
  document.getElementById('view-cart').addEventListener('click', () => {
    document.getElementById('cart-container').classList.toggle('show');
  });
  
  // Close cart button click event
  document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-container').classList.remove('show');
  });
  
  // Checkout button click event
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty!');
      return;
    }
    
    // Show checkout modal
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'block';
    
    // Update checkout items
    const checkoutItems = document.getElementById('checkout-items');
    checkoutItems.innerHTML = '';
    
    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.classList.add('checkout-item');
      itemEl.innerHTML = `
        <div class="checkout-item-name">${item.quantity} × ${item.name}</div>
        <div class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      `;
      checkoutItems.appendChild(itemEl);
    });
    
    // Update checkout total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkout-total-price').textContent = `$${total.toFixed(2)}`;
  });
  
  // Checkout form submit
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide checkout modal
    document.getElementById('checkout-modal').style.display = 'none';
    
    // Show success modal
    document.getElementById('success-modal').style.display = 'block';
    
    // Clear cart
    cart = [];
    updateCartUI();
  });
  
  // Continue shopping button click
  document.getElementById('continue-shopping').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
  });
  
  // Function to update cart UI
  function updateCartUI() {
    // Update cart count
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart items
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
      cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          </div>
          <div class="cart-item-quantity">
            <button class="cart-qty-btn" data-id="${item.id}" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button class="cart-qty-btn" data-id="${item.id}" data-action="increase">+</button>
          </div>
          <button class="remove-item-btn" data-id="${item.id}">×</button>
        `;
        cartItems.appendChild(itemEl);
        
        // Add event listener to remove button
        itemEl.querySelector('.remove-item-btn').addEventListener('click', () => {
          cart = cart.filter(cartItem => cartItem.id !== item.id);
          updateCartUI();
        });
        
        // Add event listeners to quantity buttons
        itemEl.querySelectorAll('.cart-qty-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            const cartItem = cart.find(item => item.id === id);
            
            if (action === 'increase') {
              cartItem.quantity++;
            } else if (action === 'decrease') {
              cartItem.quantity--;
              if (cartItem.quantity === 0) {
                cart = cart.filter(item => item.id !== id);
              }
            }
            
            updateCartUI();
          });
        });
      });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total-price').textContent = `$${total.toFixed(2)}`;
  }
  
  // Function to show toast notification
  function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.classList.add('toast');
      document.body.appendChild(toast);
    }
    
    // Set message and show toast
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Menu filter initialization function
function initializeMenuFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.photo-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter menu items
      const filter = button.getAttribute('data-filter');
      
      menuItems.forEach(item => {
        const country = item.getAttribute('data-country');
        
        if (filter === 'all') {
          item.style.display = 'block';
        } else if (filter === 'Other') {
          if (country !== 'Nigeria' && country !== 'Ghana' && country !== 'SouthAfrica') {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        } else if (country === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Quantity controls initialization function
function initializeQuantityControls() {
  // Minus button click event
  document.querySelectorAll('.qty-btn.minus').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.nextElementSibling;
      let value = parseInt(input.value);
      if (value > 1) {
        input.value = value - 1;
      }
    });
  });
  
  // Plus button click event
  document.querySelectorAll('.qty-btn.plus').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.previousElementSibling;
      let value = parseInt(input.value);
      if (value < parseInt(input.max)) {
        input.value = value + 1;
      }
    });
  });
}

// Modal initialization function
function initializeModals() {
  // Get all modals
  const modals = document.querySelectorAll('.modal');
  
  // Get all close buttons
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Close modal when clicking close button
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    });
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
}

export { menuPage };