import MovieList from './components/MovieList'
import App from './App'

import fire from './assets/fire.png'
import star from './assets/glowing-star.png'
import party from './assets/partying-face.png'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MovieList type="popular" title="Popular" emoji={fire} />,
      },
      {
        path: 'top_rated',
        element: <MovieList type="top_rated" title="Top Rated" emoji={star} />,
      },
      {
        path: 'upcoming',
        element: <MovieList type="upcoming" title="Upcoming" emoji={party} />,
      },
    ],
  },
]

export default routes
