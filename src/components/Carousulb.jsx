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

            <div className='absolute inset-0 flex justify-between p-4'>
                <button onClick={handlePrev}>
                    <img
                        className='h-8 p1 rounded-full bg-white/50 hover:bg-white'
                        src='public/assets/images/chevron-left-svgrepo-com.svg'
                        alt='left'
                    />
                </button>

                <button onClick={handleNext}>
                    <img
                        className='h-8 p1 rounded-full bg-white/50 hover:bg-white'
                        src='public/assets/images/chevron-right-svgrepo-com.svg'
                        alt='right'
                    />
                </button>

            </div>

        </div>
    )
}

export default Carousulb