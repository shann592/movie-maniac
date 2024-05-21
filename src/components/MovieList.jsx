import { useEffect, useState } from 'react'
import _ from 'lodash'
import { motion } from 'framer-motion'

import config from '../config'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

export default function MovieList({ type, emoji, title }) {
  const routeVariants = {
    initial: {
      y: '100vh',
    },
    final: {
      y: '0vh',
      transition: {
        type: 'spring',
        mass: 0.4,
      },
    },
  }

  const childVariants = {
    initial: {
      opacity: 0,
      y: '50px',
    },
    final: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  }
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState({
    by: 'default',
    order: 'asc',
  })
  const fetchMovies = async () => {
    const url = `${config.tmbd_api_url}${type}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${config.tmbd_api_key}`,
      },
    })
    const data = await res.json()

    setMovies(data.results)
    setFilterMovies(data.results)
  }
  useEffect(() => {
    fetchMovies()
  }, [type])

  useEffect(() => {
    if (sort.by !== 'default') {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
      setFilterMovies(sortedMovies)
    }
  }, [sort])

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0)
      setFilterMovies(movies)
    } else {
      setMinRating(rate)
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      )
      setFilterMovies(filteredMovies)
    }
  }

  const handleSort = (event) => {
    const { name, value } = event.target
    setSort((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <motion.section
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="w-full"
      id={type}
    >
      <motion.header
        variants={childVariants}
        initial="initial"
        animate="final"
        className="flex justify-between items-center py-[10px] px-[30px]"
      >
        <h2 className="flex text-2xl font-bold items-center text-yellow-400">
          {title}
          <img
            className="md:w-6 md:h-6 w-4 h-4 ml-2"
            src={emoji}
            alt={`${emoji} icon`}
          />
        </h2>
        <div className="flex items-center">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            className="text-black py-1 px-2 cursor-pointer rounded-lg mr-4"
            value={sort.by}
            onChange={handleSort}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            className="text-black py-1 px-2 cursor-pointer rounded-lg"
            value={sort.order}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </motion.header>
      <motion.div
        variants={childVariants}
        initial="initial"
        animate="final"
        className="flex flex-wrap justify-evenly items-center"
      >
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </motion.section>
  )
}
