# ⚽ React Players Card App

## 📋 Overview

React Players Card App is a web application built using **Vite**, **React**, and **React-Bootstrap**. The project displays a stylish list of football players, each shown inside a Bootstrap card. Each player’s card showcases:

- Full name
- Team
- Nationality
- Jersey number
- Age
- Player image

The player data is stored in a separate JavaScript file and rendered dynamically using reusable React components. The app uses clean design, organized components, default props, and inline styling.

## 🔧 How It Works

- The app has a `players.js` file containing an array of player objects.
- A `Player` component renders a Bootstrap-styled card using each player's data.
- A `PlayersList` component maps through the players and displays each card.
- Images are stored inside the `public/images` folder and referenced via their relative paths.
- Bootstrap is imported into the `main.jsx` file for styling support.

## 📂 Folder Structure

src/
├── App.jsx
├── main.jsx
├── Player.jsx
├── PlayersList.jsx
├── players.js

public/
└── images/
├── messi.png
├── ronaldo.png
├── mbappe.png
└── neymar.png


## ✍️ Author

**Grace Wambui Mugece**

## ✅ Conclusion

This project is a fun and practical way to explore React fundamentals like component-based architecture, props, defaultProps, and dynamic rendering. It's a clean foundation to expand into more complex apps while learning to work with external styling libraries like Bootstrap.

