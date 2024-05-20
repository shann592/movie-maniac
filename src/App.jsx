import { useRef } from 'react'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

export default function App() {
  const wrapperRef = useRef()

  return (
    <div
      className="grid grid-rows-[80px,auto] min-h-screen w-screen"
      ref={wrapperRef}
    >
      <Navbar wrapper={wrapperRef} />
      <main className="w-screen">
        <Outlet />
        {/* <MovieList type="popular" title="Popular" emoji={fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={star} />
        <MovieList type="upcoming" title="Upcoming" emoji={party} /> */}
      </main>
    </div>
  )
}
