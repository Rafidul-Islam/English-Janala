# English Janala

A simple web-based English learning platform that helps users learn vocabulary through interactive lessons.

## Project Overview

English Janala is an educational web application designed to teach English vocabulary. The app features a login system, lesson selection, and interactive word displays with meanings, pronunciations, and additional information.

## Features

- **User Authentication**: Simple login with username and password (demo password: 123456)
- **Lesson Selection**: Choose from different vocabulary levels
- **Interactive Vocabulary Display**: View words with meanings and pronunciations
- **Detailed Word Information**: Click info button to see synonyms and example sentences
- **Audio Pronunciation**: Sound button for pronunciation (placeholder)
- **FAQ Section**: Educational content about JavaScript concepts
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Custom styling with Tailwind CSS framework
- **JavaScript**: Dynamic functionality and API integration
- **Tailwind CSS**: Utility-first CSS framework for styling
- **DaisyUI**: Component library for UI elements
- **Remix Icons**: Icon library
- **SweetAlert2**: Alert and notification library
- **Google Fonts**: Custom typography (Hind Siliguri)

## API Integration

The app fetches vocabulary data from the Programming Hero API:

- Lesson levels: `https://openapi.programming-hero.com/api/levels`
- Words by level: `https://openapi.programming-hero.com/api/level/{level_no}`
- Word details: `https://openapi.programming-hero.com/api/word/{word_id}`

## Project Structure

```
English Janala/
├── index.html          # Main HTML file
├── assets/             # Images and static assets
├── scripts/
│   ├── fetchapi.js     # API calls and word display logic
│   └── redirect.js     # Login and navigation logic
└── styles/
    ├── style.css       # Custom CSS styles
    └── tailwind.config.js  # Tailwind configuration (empty, using defaults)
```

## How to Run

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Enter any username and password "123456" to log in
4. Select a lesson level to view vocabulary words
5. Click the info button on words to see detailed information

## What We Did

This project was built as a learning exercise to create a functional web application. Key accomplishments include:

- Setting up a responsive HTML structure with semantic elements
- Implementing CSS styling using Tailwind CSS for modern, utility-first design
- Creating interactive JavaScript functionality for user authentication
- Integrating with external APIs to fetch and display dynamic content
- Building modal dialogs for detailed word information
- Adding responsive design for mobile and desktop views
- Incorporating external libraries for enhanced UI and functionality

## What This Helped Me Learn

Through building English Janala, I gained valuable experience in:

- **Frontend Development**: HTML, CSS, and JavaScript fundamentals
- **CSS Frameworks**: Using Tailwind CSS for efficient styling
- **API Integration**: Making HTTP requests and handling JSON responses
- **DOM Manipulation**: Dynamically creating and updating page content
- **Event Handling**: Managing user interactions and form submissions
- **Responsive Design**: Creating layouts that work across different screen sizes
- **Library Integration**: Incorporating third-party libraries like DaisyUI and SweetAlert
- **Web Development Workflow**: Structuring projects and organizing code
- **User Experience**: Designing intuitive interfaces and user flows
- **Debugging**: Troubleshooting JavaScript and CSS issues

This project served as a practical introduction to modern web development practices and helped build confidence in creating interactive web applications.
