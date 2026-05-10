# 🚀 Phalla Suong - Professional Web Developer Portfolio

A modern, animated, and responsive portfolio website showcasing professional experience, skills, education, and projects.

## 📋 Features

✨ **Modern Design**
- Clean and professional UI with gradient backgrounds
- Responsive design that works on all devices
- Smooth animations and transitions throughout

🎨 **Interactive Elements**
- Scroll-based animations
- Hover effects on cards and buttons
- Smooth navigation
- Scroll-to-top button
- Active navigation highlighting

📱 **Fully Responsive**
- Mobile-first design
- Optimized for tablets and desktops
- Print-friendly layout

🎯 **Sections Included**
- Hero/Profile Section
- About Me & Contact Information
- Projects Experience
- Skills (Hard, Soft, and Tools)
- Education & Workshops
- Hobbies & Interests
- References
- Contact Section

## 🏗️ Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── README.md              # This file
├── css/
│   ├── main.css           # Global styles and variables
│   ├── animations.css     # Keyframe animations
│   ├── utilities.css      # Print styles and utilities
│   ├── layout/
│   │   ├── navbar.css     # Navigation bar styles
│   │   ├── footer.css     # Footer styles
│   │   └── grid.css       # Grid layout styles
│   ├── components/
│   │   ├── cards.css      # Card component styles
│   │   ├── buttons.css    # Button styles
│   │   ├── modal.css      # Modal styles
│   │   └── progress-bar.css
│   └── sections/
│       ├── home.css       # Hero section
│       ├── about.css      # About section
│       ├── experience.css # Experience section
│       ├── skills.css     # Skills section
│       ├── education.css  # Education section
│       ├── references.css # References section
│       └── contact.css    # Contact section
├── js/
│   ├── app.js             # Main application file
│   ├── data/
│   │   ├── personal.js    # Personal information
│   │   ├── experience.js  # Project experience data
│   │   ├── skills.js      # Skills data
│   │   ├── education.js   # Education & workshops data
│   │   ├── references.js  # References data
│   │   └── hobbies.js     # Hobbies data
│   ├── sections/
│   │   └── [section specific JS]
│   ├── components/
│   │   └── [component specific JS]
│   └── utils/
│       ├── animations.js  # Animation utilities
│       ├── helpers.js     # Helper functions
│       ├── scroll.js      # Scroll utilities
│       └── validator.js   # Validation utilities
└── assets/
    ├── cvcl/              # CV/CL documents
    └── images/            # Portfolio images
```

## 🎨 Color Scheme

- **Primary Color**: `#0d47a1` (Dark Blue)
- **Secondary Color**: `#00838f` (Teal)
- **Accent Color**: `#ffeb3b` (Yellow)
- **Background**: `#f4f6f9` (Light Gray)
- **Card Background**: `#ffffff` (White)

## ✨ Animations

The portfolio includes several types of animations:

- **Fade In Up**: Elements fade in while moving up
- **Slide In**: Elements slide from left or right
- **Scale Up**: Elements scale from small to normal
- **Glow**: Card hover effect with shadow pulse
- **Bounce**: Header bounce animation
- **Parallax**: Background movement on scroll

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works locally

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```

## 📝 Customization

### Update Personal Information
Edit `js/data/personal.js` to update your personal details, contact information, and languages.

### Update Experience
Edit `js/data/experience.js` to add or modify your project experience.

### Update Skills
Edit `js/data/skills.js` to update your hard skills, soft skills, and tools.

### Update Education & Workshops
Edit `js/data/education.js` to update your education, workshops, and hobbies.

### Update References
Edit `js/data/references.js` to update your professional references.

### Customize Colors
Update CSS variables in `css/main.css`:
```css
:root {
    --primary-color: #0d47a1;
    --secondary-color: #00838f;
    --accent-color: #ffeb3b;
    /* ... */
}
```

## 🖨️ Print to PDF

Click the 🖨️ Print button in the hero section or use Ctrl+P / Cmd+P to print your portfolio as a PDF. Print styles are optimized for readability.

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and Animations
- **JavaScript (ES6+)**: Dynamic content rendering and interactivity
- **Intersection Observer API**: Scroll-based animations

## 📞 Contact Information

**Name**: Phalla Suong  
**Title**: Web Developer  
**Email**: phalla.suong@passerellesnumeriques.org  
**Phone**: (+855) 67 524 899  
**Location**: Phnom Penh, Cambodia

## 📄 License

This portfolio is personal and created for professional use.

## 🙏 Credits

Created with ❤️ by Phalla Suong

---

Last Updated: May 8, 2026
