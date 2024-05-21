import { useRef } from 'react'

import Navbar from './components/Navbar'
import RoutesWithAnimation from './components/RoutesWithAnimation'
import LocationProvider from './components/LocationProvider'

export default function App() {
  const wrapperRef = useRef()

  return (
    <div
      className="grid grid-rows-[80px,auto] min-h-screen w-screen"
      ref={wrapperRef}
    >
      <Navbar wrapper={wrapperRef} />
      <main className="w-screen">
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </main>
    </div>
  )
}
