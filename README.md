# Movie Maniac

Movie Maniac is a React application that utilizes the TMDB movie APIs to display lists of popular, top-rated, and upcoming movies. The app also features a dark mode toggle for improved user experience in low-light environments. Also the routes have animated tranisition for smooth navigation built with framer-motion.

## Features

- View lists of popular, top-rated, and upcoming movies.
- Dark mode toggle for comfortable viewing in low-light conditions.
- Styling using Tailwind CSS for a sleek and modern UI.
- Routes animation with framer-motion.

## Getting Started

Clone the project

```bash
  git clone https://github.com/shann592/movie-maniac
```

Go to the project directory

```bash
  cd my-project
```

Register on TMDB for API key and set up .env file as below

```bash
  VITE_REACT_TMDB_API_KEY
  VITE_REACT_TMDB_URL=https://api.themoviedb.org/3/movie/
  VITE_REACT_TMDB_IMG_URL=https://image.tmdb.org/t/p/w500
```

Install dependencies

```bash
  npm i
```

Run dev server locally

```bash
  npm run dev
