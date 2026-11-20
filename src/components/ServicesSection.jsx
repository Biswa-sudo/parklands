import { FaBolt } from 'react-icons/fa'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 services-intro">
            <span className="section-badge light"><b>✓</b> Our Services</span>
            <h2>Specialise In<br/>Power Energy</h2>
            <p>We know a better environment and sustainable energy solutions. We provide reliable, innovative power systems for industrial and residential clients.</p>
            <a className="white-outline-btn" href="#">All Services ›</a>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6"><article className="service-card"><div className="service-icon"><FaBolt /></div><h3>Off Grid Solar System</h3><img src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=700&q=80" alt="Off grid solar system"/><p>Clean and reliable power with battery backup for independent energy needs.</p><a className="read-btn" href="#">Read More ›</a></article></div>
              <div className="col-md-6"><article className="service-card"><div className="service-icon"><FaBolt /></div><h3>Hybrid Solar Systems</h3><img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&q=80" alt="Hybrid solar system"/><p>Seamlessly switch between solar, grid and battery for uninterrupted power.</p><a className="read-btn" href="#">Read More ›</a></article></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
