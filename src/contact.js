const contactPage = () => {

  const content = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("data-tab-target", "contact");
  contact.setAttribute("id", "contact");
  contact.classList.add("contact-body");

  contact.innerHTML = ` 
  <div class="transparent">
    
  <h1 class="sub-contact">Where You Can Easly Find Afri Dish </h1>
  <div class="social-parent">
     <div class="google-map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65349112.05232284!2d-27.61391747874514!3d1.4198748056053796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a06c0a948cf5d5%3A0x108270c99e90f0b3!2sAfrica!5e0!3m2!1sen!2sng!4v1714169992158!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     
     <div class="social-icons">
     <div class="contact-me">
     <h2>Contact Us</h2>
     <form action="#" method="post">
       <div class="form-group">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" required>
       </div>
       <div class="form-group">
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required>
       </div>
       <div class="form-group">
         <label for="message">Message:</label>
         <textarea id="message" name="message" rows="5" required></textarea>
       </div>
       <button class="contact-btn" type="submit">Send</button>
     </form>
   </div>
      <div class="svg">
       <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="facebook"><path fill="#020202" d="M496,47.9v416.1c0,17.6-14.3,31.9-31.9,31.9H321.5l-1-179.3h70.9v-77.5H320l-0.3-45.5
       c0-12.8,10.3-23.1,23.1-23.1h48.5V87h-97c-32.1,0-58.1,26-58.1,58l0.5,94.1h-68.6v77.5h69L238,496h-190C30.3,496,16,481.7,16,464.1
       V47.9C16,30.3,30.3,16,47.9,16h416.1C481.7,16,496,30.3,496,47.9z"></path></svg>
 
       <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="twitter"><path fill="#020202" d="M464.1,16H47.9C30.3,16,16,30.3,16,47.9v416.1c0,17.6,14.3,31.9,31.9,31.9h416.1c17.6,0,31.9-14.3,31.9-31.9
       V47.9C496,30.3,481.7,16,464.1,16z M398.3,186.2c-0.1,0.1-0.2,0.1-0.2,0.2c0.1,1.6,0.2,3.3,0.2,4.9c0.1,1.8,0.1,3.5,0.1,5.3
       c0,108.6-88.1,196.7-196.7,196.7c-37.3,0-72.2-10.4-102-28.5c0,0,56.3,4.8,95-31.2c0,0-46-6-63.3-48.7c0,0,20,3.3,32,0
       c0,0-55.3-22.7-54-68.7c0,0,19.3,8,28.7,8c0,0-49.3-34-20-97.3c0,0,38,73.3,142,74l0.1-0.1c-0.8-4.1-1.1-8.3-1.1-12.6
       c0-38.5,31.2-69.7,69.7-69.7c19.7,0,37.5,8.2,50.1,21.3l0.5-0.3c0,0,4.1-1.1,9.8-2.7c9.6-2.8,23.5-7,28.9-9.9c0,0-5.6,21.3-23,33.5
       c-0.5,0.4-1.1,0.8-1.7,1.1c0,0,0.7,0,1.9-0.1c5.3-0.3,20.7-1.7,34.8-9.3C429.6,152.9,415,172.4,398.3,186.2z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="whats-app"><path fill="#020202" d="M262.6,16C139,16,38.9,116.1,38.9,239.7c0,49.8,16.3,95.8,43.8,133L25.7,496l14.9-6.9l114.8-53
 
       c31.8,17.4,68.3,27.3,107.1,27.3c123.5,0,223.7-100.1,223.7-223.7C486.3,116.1,386.1,16,262.6,16z M381.9,335.2
       c-1.3,6.2-4,12.1-7.9,17.3c-4.8,6.4-11,11.2-18.1,14.2s-14.9,4.2-22.7,3.2c-20.9-2.5-41.1-9.2-59.2-20
       c-20.9-12.4-49-31.7-70.2-59.3c-22.6-26.5-34.9-57.5-42.7-80.6c-6.7-19.9-9.1-41.1-7.2-62c0.7-7.9,3.5-15.3,7.9-21.6
       c4.4-6.3,10.5-11.4,17.7-14.7c5.9-2.8,12.3-4.1,18.6-4.1c9,0,20-0.1,27.6,5.3c11.8,8.3,16.8,24.7,16.8,39.1c0,1.3-0.1,2.7-0.2,4
       c-0.7,7.9-1.4,14.8-5.9,21.1c-4.4,6.3-12.5,11.8-19.7,15.2c5.5,29.6,15,51.6,28.1,65.8c5.6,7.8,13.2,15.2,22.9,22.1
       c9.7,6.9,21.4,13.2,35.3,19c4.8-6.3,11.9-13.1,19-16.1c7-3,14-2.3,21.8-1.3c1.3,0.2,2.7,0.4,4,0.7c14,3,29,11.3,34.7,24.6
       C386.1,315.7,383.8,326.4,381.9,335.2z"></path></svg>
 
       <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="youtube"><path fill="#020202" d="M443.9,88.2c-58-3.8-148.6-7.2-187.9-7.2s-129.9,3.4-187.9,7.2C38.8,90.2,16,114.5,16,143.9v224.2
       c0,29.4,22.8,53.7,52.1,55.7c58,3.8,148.6,7.2,187.9,7.2s129.9-3.4,187.9-7.2c29.3-1.9,52.1-26.3,52.1-55.7V143.9
       C496,114.5,473.2,90.2,443.9,88.2z M212.1,331.2V180.8L342.3,256L212.1,331.2z"></path></svg>
      </div>
   </div>
  </div>
 
  </div>
  `;
  
  content.appendChild(contact);
};


export { contactPage };
