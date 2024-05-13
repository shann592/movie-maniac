import { useEffect, useState } from 'react'
import fire from '../assets/fire.png'
import config from '../config'
import MovieCard from './MovieCard'
export default function MovieList() {
  const [movies, setMovies] = useState([])
  const fetchMovies = async () => {
    const url = `${config.tmbd_api_url}popular`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.tmbd_api_key}`,
      },
    })
    const data = await res.json()
    setMovies(data.results)
  }
  useEffect(() => {
    fetchMovies()
  }, [])
  return (
    <section className="w-full">
      <header className="flex justify-between items-center py-[10px] px-[30px]">
        <h2 className="flex text-2xl font-bold items-center text-yellow-400">
          Popular
          <img
            className="md:w-6 md:h-6 w-4 h-4 ml-2"
            src={fire}
            alt="fire emoji"
          />
        </h2>
        <div className="flex items-center">
          <ul className="flex items-center text-lg">
            <li className="border-b-[1px] border-gray-100 mr-4 cursor-pointer">
              8+ Star
            </li>
            <li className="mr-4 cursor-pointer">7+ Star</li>
            <li className="mr-4 cursor-pointer">6+ Star</li>
          </ul>
          <select className="text-black py-1 px-2 cursor-pointer rounded-lg mr-4">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select className="text-black py-1 px-2 cursor-pointer rounded-lg">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="flex flex-wrap justify-evenly items-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
