import { useState } from 'react'

export default function Carousel({
  children: slides,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <div className='overflow-hidden relative'>
      <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}> {slides}
      </div>

      <div className="absolute inset-0 flex justify-between p-4" >
        <button onClick={prev}>
          <img className='h-8 p1 rounded-full shadow bg-white/50 hover:bg-white' src="public/assets/images/chevron-left-svgrepo-com.svg " alt="left" />
        </button>

        <button onClick={next}>
          <img className='h-8 p1 rounded-full shadow bg-white/50 hover:bg-white' src="public/assets/images/chevron-right-svgrepo-com.svg " alt="right" />
        </button>
      </div>
    </div>
  )
}
