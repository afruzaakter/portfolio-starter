
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { InView, useInView } from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
    return (
        <section className='section' id='about' ref={ref} >
            <div className="container mx-auto">
            <div className='flex flex-col  gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-[135vh] lg:h-screen lg:gap-x-20'>
          {/* image  */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className=' flex-1 bg-about bg-contain bg-no-repeat  h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text  */}
          <div className='flex-1'>
            <motion.h2
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
            className='h2 text-accent '>About md.</motion.h2>
            <motion.h3
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='h3 mb-4'> I'm a Frelancer Front-end-Developer with over 5 years of experience.</motion.h3>
            <motion.p 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className='mb-4'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              </motion.p>
              <motion.div
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-6 lg:gap-x-10 mb-12'>
                {/* count-1  */}
                <div>
                   <div className='text-[40px] font-tertiary text-gradient mb-2  '>
                    {inView ? <CountUp start = {0} end={13} duration={5} />:
                    null}
                   </div>
                   <div className='font-primary text-sm tracking-[2px]'>
                     Years of <br/>
                     Experience 
                   </div>
                </div>
                {/* count -2 */}
                <div>
                   <div className='text-[40px] font-tertiary text-gradient mb-2  '>
                    
                    {inView ? <CountUp start = {0} end={15} duration={5} />:
                    null}k+
                   </div>
                   <div className='font-primary text-sm tracking-[2px]'>
                     Projects <br/>
                     Completed 
                   </div>
                </div>
                {/* count- 3  */}
                <div>
                   <div className='text-[40px] font-tertiary text-gradient mb-2  '>
                   
                    {inView ? <CountUp start = {0} end={13} duration={5} />:
                    null}k+
                   </div>
                   <div className='font-primary text-sm tracking-[2px]'>
                     Satisfied <br/>
                     Clients 
                   </div>
                </div>
               
              </motion.div>
              <motion.div 
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className='flex gap-x-8 items-center'>
                  <button className='btn btn-lg'>Contact me</button>
                  <a href='#' className='text-gradient btn-link'>My Portfolio</a>
                </motion.div>
          </div>
        </div>
            </div>
        </section>
    );
};

export default About;