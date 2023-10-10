// import { Link } from 'react-scroll';
import logo from '../assets/logo.svg'

const Header = () => {
    return <header className='py-8 '>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center sticky'>
       {/* logo */}
       <a href='#'>
         <img src={logo} alt=''/>
       </a>
       {/* <ul className='flex gap-x-8 sticky'>
        
        <Link to='home'   offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px ] h-[60px] flex items-center justify-center'>Home</Link>
        <Link to='about'   offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px ] h-[60px] flex items-center justify-center'>About</Link>
        <Link to='services'   offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px ] h-[60px] flex items-center justify-center'>Services</Link>
        <Link to='work'   offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px ] h-[60px] flex items-center justify-center'>Work</Link>
        <Link to='contact'   offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px ] h-[60px] flex items-center justify-center'>Contact</Link>
       
       </ul> */}
       <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
</header>;
};

export default Header;