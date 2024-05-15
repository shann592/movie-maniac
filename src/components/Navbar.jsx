import fire from '../assets/fire.png'
import star from '../assets/glowing-star.png'
import party from '../assets/partying-face.png'
import DarkMode from './DarkMode/DarkMode'

export default function Navbar({ wrapper }) {
  return (
    <nav className="flex justify-between items-center px-7 border-b-[1px] border-gray-200 w-screen">
      <h1 className="text-3xl md:xl text-yellow-300 font-bold">MovieManiac</h1>
      <div className="flex items-center">
        <DarkMode wrapper={wrapper} />
        <a className="flex text-xl items-center px-4" href="#popular">
          <span className="hidden md:flex">Popular</span>{' '}
          <img
            className="md:w-6 md:h-6 w-4 h-4 ml-2"
            src={fire}
            alt="fire emoji"
          />
        </a>
        <a className="flex text-xl items-center px-4" href="#top_rated">
          <span className="hidden md:flex">Top Rated</span>{' '}
          <img
            className="md:w-6 md:h-6 w-4 h-4 ml-2"
            src={star}
            alt="star emoji"
          />
        </a>
        <a className="flex text-xl items-center  px-4" href="#upcoming">
          <span className="hidden md:flex">Upcoming</span>
          <img
            className="md:w-6 md:h-6 w-4 h-4 ml-2"
            src={party}
            alt="party emoji"
          />
        </a>
      </div>
    </nav>
  )
}
