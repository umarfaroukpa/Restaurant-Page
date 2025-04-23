# AfriDish Restaurant Website

## Overview
AfriDish is a responsive, modern website for a restaurant that specializes in authentic African cuisine. The website showcases the restaurant's cultural heritage, authentic recipes, and provides users with an interactive experience to explore the menu and make reservations.

## Features
- **Interactive Navigation**: Smooth tab switching between Home, Menu, and Contact pages
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop screens
- **Interactive Menu**: Filterable menu with dynamic cart functionality
- **Reservation System**: User-friendly form for booking tables with confirmation
- **Testimonial Slider**: Showcasing customer reviews and experiences
- **Contact Page**: Contact form and Google Maps integration
- **Social Media Integration**: Links to various social media platforms

## Technologies Used
- HTML5
- CSS3 with custom variables and modern layout techniques
- Vanilla JavaScript for interactivity
- Webpack for bundling
- Mobile-first responsive design

## Project Structure
```
afridish/
├── src/
│   ├── index.js             # Main entry point
│   ├── home.js              # Home page functionality
│   ├── menu.js              # Menu page functionality
│   ├── contact.js           # Contact page functionality
│   └── styles/              # CSS styles
│       └── main.css         # Main stylesheet
├── dist/                    # Built files
│   ├── assets/              # Images and other assets
│   ├── bundle.js            # Bundled JavaScript
│   └── index.html           # Main HTML file
└── webpack.config.js        # Webpack configuration
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/umarfaroukpa/afridish.git
   cd afridish
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run start
   ```

4. For production build:
   ```
   npm run build
   ```

## Performance Optimization

To address bundle size warnings:

1. Code splitting has been implemented to load pages on demand:
   - Home, Menu, and Contact pages are dynamically loaded
   - Assets are lazy-loaded where appropriate

2. Image optimization:
   - All images are compressed and optimized
   - Hero images and background images use appropriate sizing

3. Additional optimizations:
   - Minified CSS and JavaScript
   - Deferred non-critical JavaScript

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)

## Known Issues
- The reservation system is currently front-end only and does not connect to a backend database
- WebP image format may not be supported in older browsers

## Future Enhancements
- Backend integration for the reservation system
- Online ordering functionality
- User accounts and loyalty program
- Multi-language support for international customers
- Menu item nutritional information
- Blog section for African cuisine recipes and cultural insights

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Credits
- Design inspiration from modern restaurant websites
- African cuisine research from various cultural sources
- Icons from [SVG Repository]
- Placeholder images used during development

## Author
 - Umar Farouk Ilyas

---

© 2025 AfriDish Restaurant. All rights reserved.
