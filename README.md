# Chrome Extension - Movie Search Enhancer

## Overview

This Chrome extension enhances the Google search experience for movie queries by parsing search results and retrieving detailed information from the TMDB API. It provides a user-friendly interface within the extension popup to display movie details and maintains a searchable history of all past movie queries.

## Features

- Google Search Page Parsing: Automatically detects movie searches on Google and extracts the movie title.
- TMDB API Integration: Fetches detailed movie information from the TMDB API based on the parsed title.
- Popup Interface: Displays movie details such as title, release date, overview, rating, etc., in a clear and organized manner.
- Search History: Maintains a searchable history of all movie queries made through the extension(column searchable)
- Clear History Button: Allows users to clear the search history with a single button click.
- Popup Expansion and Compression: Provides a button to expand the extension popup for better readability of movie details.

## Built Using

- React: Frontend library for building the user interface.
- Material UI v5 - An open-source React component library
- TypeScript: Provides static typing to JavaScript for enhanced development.
- Redux: State management library for managing application state.
- TMDB API: The Movie Database API for retrieving movie details.
- Chrome Extension APIs: Interfaces provided by Chrome to develop browser extensions.

## Generating TMDB key
- Follow this document to create the key - https://developer.themoviedb.org/docs/getting-started
- Paste the key in utils/backgroundScript.js
   ### ``https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key={ADD_TMDB_KEY_HERE}``
- Verify if the above URL is working by directly accessing it in Chrome. Note that it may not work with some internet service providers.

## Installation And Starting up

- Clone the repository from GitHub
  ### `git clone <repository-url>`

- Navigate to the project directory
  ### `cd <path>`
  
- Install dependencies
  ### `npm install`
  
- Build the extension
  ### `npm run build`

- Open Chrome and go to chrome://extensions/.

- Enable Developer mode.

- Click on "Load unpacked" and select the build directory from the cloned repository.

## Usage

- Once installed, open a new tab in Chrome and perform a Google search for any movie title.

- The extension will detect the search and display movie details in its popup interface.

- Click on past searches in the history to view detailed information.
