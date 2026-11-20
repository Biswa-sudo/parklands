import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/global.css'
import { TopBar, Navbar } from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AboutPage from './components/AboutPage'
import ServicesSection from './components/ServicesSection'
import EmiSection from './components/EmiSection'
import TestimonialsSection from './components/TestimonialsSection'
import StatisticsSection from './components/StatisticsSection'
import SolarProcessSection from './components/SolarProcessSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  const isAboutPage = window.location.pathname === '/about-us' || window.location.hash === '#about-us'

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {isAboutPage ? <AboutPage /> : (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <EmiSection />
            <TestimonialsSection />
            <StatisticsSection />
            <SolarProcessSection />
            <MapSection />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
