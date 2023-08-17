//import { MenuHandler } from "@material-tailwind/react"
import { useState } from "react"

const Carousulb = () => {

    let [index, setIndex] = useState(0);

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
        setIndex((index) => (index === 0 ? slid.length - 1 : index - 1));
    };

    const handleNext = () => {
        setIndex((index) => (index === slid.length - 1 ? 0 : index + 1));

    };

    return (
        <div>
            <h2>Carouselb</h2>
            <img src={slid[index]} alt="" />
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousulb