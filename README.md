# BPL-DREAM 11

BPL-DREAM 11 is a fantasy cricket team-building web application that allows users to create their own dream cricket team within a virtual budget. Users can view player details, select players, manage their budget, and toggle between available and selected players.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

BPL-DREAM 11 is designed to provide a realistic fantasy cricket experience where users can choose players based on their budget constraints, with a clear and intuitive UI. Players are displayed with key details, and a simple toggle lets users switch between available and selected players. The application keeps track of user coins and deducts a specific amount for each selected player, creating an engaging and strategic experience.

## Technologies Used

- **React.js**: For building UI components and managing the application state.
- **Tailwind CSS**: For styling the application with a utility-first approach.
- **React-Toastify**: For user notifications, such as alerts for insufficient funds.
- **JavaScript/JSON**: To manage player data and app logic.

## Features

1. **Player Selection with Budget Constraints**  
   Users can choose players based on their virtual coin balance. If the user’s balance is insufficient, an alert will notify them.

2. **Toggle Between Available and Selected Players**  
   Users can switch between viewing available players and their selected team. The selected player count is displayed, offering a quick view of team progress.

3. **Dynamic Coin Management**  
   Each selected player deducts coins from the user’s balance, and each removed player refunds the amount, allowing for a strategic team-building process.


