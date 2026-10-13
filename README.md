# Pulse UI Shell

## Project Overview

Pulse UI Shell is a React dashboard prototype built with Vite. It displays sample customer accounts, account statuses, dashboard statistics, and navigation between different sections.

## Technologies

- React
- JavaScript
- CSS
- Vite

## Setup Instructions

1. Install Node.js and npm.
2. Clone this repository or download the project.
3. Open a terminal in the project folder.
4. Run `npm install` to install dependencies.
5. Run `npm run dev` to start the development server.
6. Open the local URL shown in the terminal.

## Design Token System

The project uses CSS custom properties in `src/styles/tokens.css` to help maintain consistent design values. Shared tokens make it easier to update colors and other design choices without changing every component individually.

## Known Trade-offs

This project is a prototype and uses sample data rather than a real database or API. The customer names, account owners, subscription plans, account statuses, and user counts are written directly into the React application. They do not represent real customers or live business information.

The dashboard statistics, including total users, revenue, active projects, and completed tasks, are fixed example values. They are not calculated from the customer records, so the displayed statistics may not match the table data.

Navigation uses React state instead of a full routing system. Selecting an item changes the content shown on the page, but the application does not load separate routes or save navigation history. The Settings section is a placeholder, and the Team section uses account-owner information instead of a real team directory.

The prototype does not include authentication, user permissions, a backend, database storage, or real-time updates. Users cannot create, edit, or delete customer records through the interface. These features were excluded to keep the project focused on reusable React components, layout, responsive styling, and basic interactions.

The dashboard is intended to demonstrate the appearance and structure of an analytics interface. A production version would require a real data source, input validation, error handling, and additional testing.

## Screenshots

Add screenshots showing mobile, tablet, and desktop layouts in both light and dark themes to the `screenshots/` folder.

## Future Improvements

- Connect to a real database or API.
- Add account management features.
- Calculate statistics from actual records.
- Improve light and dark theme support.
- Test accessibility and responsive layouts.