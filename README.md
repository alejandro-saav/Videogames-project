# Videogames Project

A React single-page application for browsing and discovering video games, powered by the [IGDB API](https://api-docs.igdb.com/) for game data. Built with React Router for navigation and serverless functions via Netlify Functions to securely proxy API requests.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|----------------------------------|
| Framework   | React 18 (Create React App)       |
| Routing     | React Router DOM v6               |
| Data        | IGDB API                          |
| Serverless  | Netlify Functions                 |
| Hosting     | Netlify                           |
| Language    | JavaScript / CSS                  |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm
- An [IGDB API](https://api-docs.igdb.com/) key (requires a Twitch Developer account)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alejandro-saav/Videogames-project.git
   cd Videogames-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file at the root with your IGDB credentials:
   ```env
   REACT_APP_TWITCH_CLIENT_ID=your_client_id_here
   REACT_APP_TWITCH_CLIENT_SECRET=your_client_secret_here
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command           | Description                                      |
|-------------------|--------------------------------------------------|
| `npm start`       | Runs the app in development mode                 |
| `npm run build`   | Builds the app for production into `/build`      |
| `npm test`        | Launches the test runner in interactive mode     |
| `npm run eject`   | Ejects CRA config (irreversible)                 |

---

## Deployment

The app is deployed on **Netlify**. The `netlify.toml` file handles build settings and redirect rules. Serverless functions in `netlify/functions/` are deployed automatically alongside the frontend and are used to proxy IGDB API requests server-side, keeping credentials out of the client.

---

## License

This project is open source. See the repository for details.
