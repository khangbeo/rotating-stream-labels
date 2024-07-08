# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Add a file at the root directory called excludedUsers.json with this schema, username needs to match with what's on Twitch

["first_user", "second_user"]

Create a .env file with all required variables
VITE_TWITCH_USER=your twitch username
VITE_CHANNEL_ID= your channel ID from streamelement
VITE_BASE_URL=https://api.streamelements.com/kappa/v2
VITE_TWITCH_URL=https://api.twitch.tv/helix/users
VITE_TWITCH_TOKEN_GENERATOR_CLIENT_ID= generate a token from twitch token generator client
VITE_TWITCH_TOKEN= get from twitch token generator client
VITE_TWITCH_REFRESH_TOKEN= get from twitch token generator client
VITE_TWITCH_CLIENT_ID= get from twitch token generator client
VITE_TWITCH_SECRET= get from twitch token generator client
VITE_SE_TOKEN=your streamelement token
