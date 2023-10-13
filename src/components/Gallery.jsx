
// image import
import {motion} from 'framer-motion';

import { useState } from "react";
import city1 from "../assets/city1.png";
import city2 from "../assets/city2.png";
import city3 from "../assets/city3.png";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import { fadeIn } from '../variants';

const Gallery = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
  
    const handleBack = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 4) % 5
        );
  
        return updatedIndexes;
      });
    };
  
    const images = [city1, city2, city3, planet1, planet2];
  
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3 },
      left: { x: "-90%", scale: 0.5, zIndex: 2 },
      right: { x: "90%", scale: 0.5, zIndex: 1 },
      right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
        <section className="section" id="gallery">
            <div className="container max-auto">
                <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] lg:text-[110px] text-center  font-bold leading-[0.8] '>PHOTOS <span> GALLERY</span> </motion.h1>
                <div className="flex items-center flex-col justify-center ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3 mt-20">
        <button
          className="text-white mt-[135px] lg:mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[135px] lg:mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>

               
            </div>
        </section>
    );
};

export default Gallery;