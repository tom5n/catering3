import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <div style={{ 
        width: '100%',
        height: '100px',
        backgroundColor: '#121212',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)'
        }}></div>
      </div>
      <Approach />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
