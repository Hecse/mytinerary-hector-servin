import { useState, useEffect } from "react"

const Carousulb = () => {

    const [startIndex, setStartIndex] = useState(0);

    const imagesPerGroup = 4;

    const slid = [
        "https://www.noticiasgremiales.com/mas_fotos/turism/1.jpg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/2.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/3.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/4.jpg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/5.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/6.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/7.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/8.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/9.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/10.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/11.jpeg",
        "https://www.noticiasgremiales.com/mas_fotos/turism/12.jpg",
    ];

    const handlePrev = () => {
        setStartIndex((startIndex) =>
            startIndex === 0
                ? slid.length - imagesPerGroup
                : startIndex - imagesPerGroup
        );
    };

    const handleNext = () => {
        setStartIndex((startIndex) =>
            startIndex >= slid.length - imagesPerGroup
                ? 0
                : startIndex + imagesPerGroup
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); // mueve al siguiente groupo de imagenes
        }, 2000); // tiempo

        return () => {
            clearInterval(interval); // limpia el intervalo cuando el componente se desmonta
        };
    }, [startIndex]); // ejecuta el efecto cada vez que cambia


    return (
        <div className='overflow-hidden relative max-w-3xl '>
            <div className="flex ">
                {slid.slice(startIndex, startIndex + imagesPerGroup).map((image, idx) => (
                    <div key={idx}>
                        <img src={image} alt={`Image ${idx}`} />
                    </div>
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button className='w-8 h-8 p-1 rounded-full bg-white/50 hover:bg-white' onClick={handlePrev}>
                    <svg className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor" >
                            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>                    
                </button>

                <button className='w-8 h-8 p-1 rounded-full bg-white/50 hover:bg-white' onClick={handleNext}>
                    <svg className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor">
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>                    
                </button>
            </div>
        </div>
    )
}

export default Carousulb