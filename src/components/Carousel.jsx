import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel({ 
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000, 
}) {
    const [curr, setCurr] = useState(0)    
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1
            ))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1
            ))
    
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    })
    return (
        <div className="my-10 overflow-hidden relative">
            <div 
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-2'>
                <button 
                onClick={prev} 
                className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40} />
                </button>
                <button 
                onClick={next} 
                className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className='absolute bottom-6 right-0 left-0 '>
                <div className='flex justify-center gap-2 items-center'>
                    {slides.map((_, i) => (
                        <div
                            className={`
                            trantition-all w-3 h-3 hp:w-2 hp:h-2 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}
                            `} 
                            key={i}/>
                        ))}
                </div>
            </div>
        </div>
    )
}