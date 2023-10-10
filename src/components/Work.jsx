
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//image
import Img1 from '../assets/Portfolio-img1.png';
import Img2 from '../assets/Portfolio-img2.png';
import Img3 from '../assets/Portfolio-img3.png';
const Work = () => {
    return (
        <section className="section" id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                     variants={fadeIn('right', 0.3)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.5 }}
                    className='flex-1 flex flex-col gap-y-4 lg:gap-y-12 mb-10 lg:mb-0 '>
                        {/* text  */}
                        <div>
                            <h1 className='h2 leading-tight text-accent'>My Latest <br />Work.</h1>
                            <p className='max-w-sm mb-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                            <button className='btn btn-sm'>View all projects</button>
                        </div>
                        {/* image  */}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            {/* overlay  */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                            {/* img  */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
                            {/* pretitle  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                             <span>UI/UX Design</span></div>
                            {/* title  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50' >
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                     variants={fadeIn('left', 0.3)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.5 }}
                    className='flex-1 flex flex-col gap-y-10 lg:gap-y-[70px]'>
                         {/* image  */}
                         <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            {/* overlay  */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                            {/* img  */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
                            {/* pretitle  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                             <span>UI/UX Design</span></div>
                            {/* title  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50' >
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                         {/* image  */}
                      
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            {/* overlay  */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                            {/* img  */}
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
                            {/* pretitle  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                             <span>UI/UX Design</span></div>
                            {/* title  */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50' >
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </motion.div>    
            </div>
            </div>
        </section>
    );
};

export default Work;