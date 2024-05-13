import MovieList from './components/MovieList'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-zinc-950 text-white grid grid-rows-[80px,auto] min-h-screen w-screen">
      <Navbar />
      <main className="w-screen">
        <MovieList />
      </main>
    </div>
  )
}
