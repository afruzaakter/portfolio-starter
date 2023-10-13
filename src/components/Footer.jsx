
//icons
import {  FaYoutube, FaLinkedin, FaFacebook ,FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='waves'>
                <div className='wave' id="wave1"></div>
                <div className='wave' id="wave2"></div>
                <div className='wave' id="wave3"></div>
                <div className='wave' id="wave4"></div>
            </div>
            <div className="footer flex-col gap-y-5">
                    {/* social icon  */}
                  <ul className="flex justify-center 
                   cursor-pointer items-center relative mr-10px gap-x-7 text-[28px]">
                    <li> <a className=' social-icon' href="#"></a> <FaFacebook/> </li>
                    <li> <a className=' social-icon'  href="#"></a> <FaYoutube/> </li>
                    <li> <a className=' social-icon'  href="#"></a><FaLinkedin/> </li>
                    <li> <a className=' social-icon'  href="#"></a> <FaTwitter/> </li>
                  </ul>
                  {/* menu footer  */}
                  <ul className="lg:flex justify-center flex 
                  cursor-pointer lg:items-center relative lg:mr-10px gap-x-4 lg:gap-x-7 text-[28px]  ">
                    <li> <a className=' social-icon' href="#"></a> Home </li>
                    <li> <a className=' social-icon'  href="#"></a>About </li>
                    <li> <a className=' social-icon'  href="#"></a>Services </li>
                    <li> <a className=' social-icon'  href="#"></a> Work </li>
                    <li> <a className=' social-icon'  href="#"></a>Contact </li>
                  </ul>
                  <p>© 2010-2023 Bizcope Digital Ltd. All Rights Reserved.</p>
            </div>
            
        </footer>
    );
};

export default Footer;