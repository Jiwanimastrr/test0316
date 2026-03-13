# Lotto Number Generator

## Overview

A simple, visually appealing web application to generate random lottery numbers. The application features a clean, modern design with a responsive layout and a theme toggle for light and dark modes.

## Project Outline

*   **index.html**: Main HTML structure, including the title, lottery number containers, a theme toggle button, and a generation button.
*   **style.css**: Modern styling using CSS variables for theme management, responsive layout, custom fonts, and smooth transitions.
*   **main.js**: JavaScript logic for:
    *   Generating unique, random lottery numbers (sorted).
    *   Animating number display.
    *   Theme toggling with persistence using `localStorage`.

## Features Implemented

1.  **Lottery Number Generation**: Generates 6 unique numbers (1-45) and sorts them.
2.  **Modern UI**: Beautiful container, gradient circles for numbers, and interactive buttons.
3.  **Theme Toggle**: Supports Light Mode and Dark Mode. Remembers the user's choice across sessions.
4.  **Animations**: Numbers appear with a "pop-in" effect for a dynamic feel.
