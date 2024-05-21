import { useLocation, Route, Routes } from 'react-router-dom'

import MovieList from './MovieList'
import fire from '../assets/fire.png'
import star from '../assets/glowing-star.png'
import party from '../assets/partying-face.png'

export default function RoutesWithAnimation() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.key}>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" emoji={fire} />}
      />
      <Route
        path="/top_rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" emoji={party} />}
      />
    </Routes>
  )
}
