const homePage = () => {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("home-body");
  home.innerHTML = `
    <div class="main" id="home">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Experience Authentic African Cuisine</h1>
          <p class="hero-subtitle">A culinary journey across the continent</p>
          <div class="hero-buttons">
            <button class="primary-btn" id="explore-menu-btn">Explore Our Menu</button>
            <button class="secondary-btn" id="reservation-btn">Make Reservation</button>
          </div>
        </div>
      </div>
      
      <div class="about-section">
        <div class="about-content">
          <h2>ABOUT AFRI DISH</h2>
          <div class="about-text">
            <p>At Afri Dish, we are dedicated to preserving African cultural heritage through authentic cuisine. Our mission is to share the rich and diverse flavors of Africa with food enthusiasts around the world.</p>
            <p>Each dish is carefully prepared using traditional recipes and techniques passed down through generations, ensuring an authentic taste experience that celebrates the continent's culinary diversity.</p>
          </div>
          <div class="about-features">
            <div class="feature">
              <div class="feature-icon">🌍</div>
              <h3>Authentic Recipes</h3>
              <p>Traditional dishes from across Africa</p>
            </div>
            <div class="feature">
              <div class="feature-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>Locally sourced quality produce</p>
            </div>
            <div class="feature">
              <div class="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Skilled in traditional cooking methods</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="featured-dishes">
        <h2>Popular Dishes</h2>
        <div class="featured-container">
          <div class="featured-item">
            <img src="food-gala/nigerian-food__1_-removebg-preview (2).png" alt="Jollof Rice">
            <div class="featured-overlay">
              <h3>Jollof Rice</h3>
              <p>Nigerian classic rice dish cooked in rich tomato sauce</p>
              <button class="view-dish-btn" data-dish="jollof">View Dish</button>
            </div>
          </div>
          <div class="featured-item">
            <img src="food-gala/ghanian-angwa-mu-removebg-preview (1) (1).png" alt="Angwa-mu">
            <div class="featured-overlay">
              <h3>Angwa-mu</h3>
              <p>Ghana's beloved palm nut soup with tender meat</p>
              <button class="view-dish-btn" data-dish="angwamu">View Dish</button>
            </div>
          </div>
          <div class="featured-item">
            <img src="food-gala/south_africa_e855dba400535220540d980c7b120610-removebg-preview (1).png" alt="South African Dish">
            <div class="featured-overlay">
              <h3>South African Platter</h3>
              <p>Assortment of South African delicacies</p>
              <button class="view-dish-btn" data-dish="safrica">View Dish</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div class="testimonials-container" id="testimonials-container">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"The Jollof rice at Afri Dish transported me straight back to Lagos! Authentic flavors and generous portions make this my go-to African restaurant."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/api/placeholder/60/60" alt="Customer">
              </div>
              <div class="author-info">
                <h4>Sarah Johnson</h4>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"I tried the Ghanaian Angwa-mu for the first time and it was incredible! The staff was so helpful in explaining the dish and its cultural significance."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/api/placeholder/60/60" alt="Customer">
              </div>
              <div class="author-info">
                <h4>Michael Stevens</h4>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"As someone from Liberia, finding authentic Fufu abroad has been challenging until I discovered Afri Dish. Their dedication to authenticity is remarkable!"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img src="/api/placeholder/60/60" alt="Customer">
              </div>
              <div class="author-info">
                <h4>James Koroma</h4>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      
      <div class="cta-section">
        <div class="cta-content">
          <h2>Join Us for an African Culinary Adventure</h2>
          <p>Experience the rich and diverse flavors of African cuisine in a warm and welcoming atmosphere.</p>
          <button class="cta-btn" id="cta-reservation-btn">Make a Reservation</button>
        </div>
      </div>
    </div>
    
    <!-- Reservation Modal -->
    <div id="reservation-modal" class="modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Make a Reservation</h2>
        <form id="reservation-form">
          <div class="form-group">
            <label for="res-name">Full Name</label>
            <input type="text" id="res-name" name="name" required>
          </div>
          <div class="form-group">
            <label for="res-email">Email</label>
            <input type="email" id="res-email" name="email" required>
          </div>
          <div class="form-group">
            <label for="res-phone">Phone</label>
            <input type="tel" id="res-phone" name="phone" required>
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label for="res-date">Date</label>
              <input type="date" id="res-date" name="date" required>
            </div>
            <div class="form-group half">
              <label for="res-time">Time</label>
              <input type="time" id="res-time" name="time" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label for="res-guests">Number of Guests</label>
              <input type="number" id="res-guests" name="guests" min="1" max="20" required>
            </div>
            <div class="form-group half">
              <label for="res-occasion">Occasion</label>
              <select id="res-occasion" name="occasion">
                <option value="regular">Regular Dining</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Meeting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="res-message">Special Requests</label>
            <textarea id="res-message" name="message" rows="3"></textarea>
          </div>
          <button type="submit" class="submit-reservation-btn">Confirm Reservation</button>
        </form>
      </div>
    </div>
    
    <!-- Reservation Success Modal -->
    <div id="reservation-success-modal" class="modal">
      <div class="modal-content success-content">
        <span class="close-modal">&times;</span>
        <div class="success-icon">✓</div>
        <h2>Reservation Confirmed!</h2>
        <p>Thank you for choosing Afri Dish. We look forward to serving you authentic African cuisine.</p>
        <p>A confirmation has been sent to your email.</p>
        <div id="reservation-details" class="reservation-details"></div>
        <button id="res-continue" class="continue-btn">Close</button>
      </div>
    </div>
  `;

  content.appendChild(home);
  
  // Initialize home page functionality
  initializeHomePage();
};

// Home page initialization function
function initializeHomePage() {
  // Testimonials slider functionality
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentTestimonial = 0;
  
  // Initialize testimonials slider
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
      testimonial.style.display = 'none';
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show current testimonial and activate dot
    testimonials[index].style.display = 'block';
    dots[index].classList.add('active');
  }
  
  // Show first testimonial initially
  showTestimonial(currentTestimonial);
  
  // Auto rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
  
  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    });
  });
  
  // Explore menu button click
  document.getElementById('explore-menu-btn').addEventListener('click', () => {
    // Simulate menu tab click
    const menuButton = document.querySelector('button[data-tab-target="#menu"]');
    if (menuButton) {
      menuButton.click();
    }
  });
  
  // View dish buttons click
  document.querySelectorAll('.view-dish-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Navigate to menu and highlight the dish
      const menuButton = document.querySelector('button[data-tab-target="#menu"]');
      if (menuButton) {
        menuButton.click();
        
        // Highlight the dish after a short delay to ensure menu is loaded
        setTimeout(() => {
          const dishId = button.getAttribute('data-dish');
          const dishElement = document.querySelector(`button[data-id="${dishId}"]`);
          
          if (dishElement) {
            // Scroll to the dish
            dishElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add highlight effect
            const dishCard = dishElement.closest('.photo-card');
            dishCard.classList.add('highlight-dish');
            
            // Remove highlight after animation completes
            setTimeout(() => {
              dishCard.classList.remove('highlight-dish');
            }, 2000);
          }
        }, 300);
      }
    });
  });
  
  // Reservation button click events
  document.getElementById('reservation-btn').addEventListener('click', showReservationModal);
  document.getElementById('cta-reservation-btn').addEventListener('click', showReservationModal);
  
  function showReservationModal() {
    const modal = document.getElementById('reservation-modal');
    modal.style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('res-date').min = today;
  }
  
  // Reservation form submit
  document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide reservation modal
    document.getElementById('reservation-modal').style.display = 'none';
    
    // Get form values
    const name = document.getElementById('res-name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    
    // Show reservation details in success modal
    const reservationDetails = document.getElementById('reservation-details');
    reservationDetails.innerHTML = `
      <div class="res-detail"><strong>Name:</strong> ${name}</div>
      <div class="res-detail"><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</div>
      <div class="res-detail"><strong>Time:</strong> ${time}</div>
      <div class="res-detail"><strong>Number of Guests:</strong> ${guests}</div>
    `;
    
    // Show success modal
    document.getElementById('reservation-success-modal').style.display = 'block';
  });
  
  // Close success modal button
  document.getElementById('res-continue').addEventListener('click', () => {
    document.getElementById('reservation-success-modal').style.display = 'none';
  });
  
  // Initialize modals
  initializeModals();
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

export { homePage };