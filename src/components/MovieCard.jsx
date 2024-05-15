import star from '../assets/star.png'
import config from '../config'
export default function MovieCard({ movie }) {
  return (
    <a
      className="w-52 h-72 m-[15px] overflow-hidden rounded-[10px] text-white shadow-lg relative hover:scale-105 duration-700 ease-in-out"
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
    >
      <img
        src={`${config.tmdb_img_url}${movie.poster_path}`}
        alt="movie poster"
        className="w-full h-full object-center"
      />
      <div className="absolute top-0 w-full h-full p-2 card-gradient flex flex-col justify-end opacity-0 hover:opacity-100 duration-700 ease-in-out">
        <h3 className="text-lg text-yellow-300 font-bold">
          {movie.original_title}
        </h3>
        <div className="flex items-center justify-between text-xs text-yellow-300 my-[1px]">
          <p>{movie.release_date}</p>
          <p className="flex items-baseline">
            {movie.vote_average.toFixed(1)}
            <img className="w-5 h-5 ml-1 mr-1" src={star} alt="rating icon" />
          </p>
        </div>
        <p className="text-xs italic">
          {movie.overview.length > 1 && movie.overview.slice(0, 100) + '...'}
        </p>
      </div>
    </a>
  )
}
