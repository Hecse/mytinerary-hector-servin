import { useState, useEffect } from "react"

const Carousulb = () => {

    const [startIndex, setStartIndex] = useState(0);

    const imagesPerGroup = 4;

    const slid = [
        "/assets/images/1.jpg",
        "/assets/images/2.jpeg",
        "/assets/images/3.jpeg",
        "/assets/images/4.jpg",
        "/assets/images/5.jpeg",
        "/assets/images/6.jpeg",
        "/assets/images/7.jpeg",
        "/assets/images/8.jpeg",
        "/assets/images/9.jpeg",
        "/assets/images/10.jpeg",
        "/assets/images/11.jpeg",
        "/assets/images/12.jpg",
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
        }, 2000); 

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