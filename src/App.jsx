import { useRef } from 'react'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'

import fire from './assets/fire.png'
import star from './assets/glowing-star.png'
import party from './assets/partying-face.png'

export default function App() {
  const wrapperRef = useRef()

  return (
    <div
      className="grid grid-rows-[80px,auto] min-h-screen w-screen"
      ref={wrapperRef}
    >
      <Navbar wrapper={wrapperRef} />
      <main className="w-screen">
        <MovieList type="popular" title="Popular" emoji={fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={star} />
        <MovieList type="upcoming" title="Upcoming" emoji={party} />
      </main>
    </div>
  )
}
