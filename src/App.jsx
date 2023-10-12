
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Gallery from './components/Gallery';
import Header from './components/Header'
import Nav from './components/Nav'
import Services from './components/Services'
import Work from './components/Work'

function App() {
  return (
    <div  className='flex flex-col'>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      {/* <Gallery/> */}
      <Contact />
    
      {/* <div className='h-[4000px]'></div> */}
      </div>
      <div>
      <Footer/>
      </div>
    </div>
    
  )
}

export default App
