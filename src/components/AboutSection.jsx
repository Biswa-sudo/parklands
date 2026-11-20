import { FaSolarPanel, FaShieldAlt, FaBolt, FaClock, FaLeaf, FaGlobe } from 'react-icons/fa'

export default function AboutSection() {
  const features = [
    { icon: FaSolarPanel, title: 'Easy Installation', text: 'Fast & Reliable Solar' },
    { icon: FaShieldAlt, title: 'Quality Material', text: 'Top Quality Raw Materials' },
    { icon: FaBolt, title: 'High Efficiency', text: 'Best value, Long-Term' },
    { icon: FaClock, title: 'Durability', text: 'Built to withstand the Test of Time' },
    { icon: FaLeaf, title: 'Cost-Effective', text: 'Smart Investment for Your Future' },
    { icon: FaGlobe, title: 'Eco-Friendly', text: 'Clean Energy for a Cleaner Planet' },
  ]

  return (
    <section id="about" className="about-section section-pad">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-visual">
              <div className="green-ring"></div>
              <img className="about-img-main" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=85" alt="Solar panel installation" />
              <img className="about-img-small" src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=500&q=85" alt="Solar panels at sunset" />
              <div className="experience-badge"><strong>30+</strong><span>Years of<br/>Experience</span></div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="section-badge"><b>✓</b> Welcome</span>
            <h2 className="section-heading">Innovative <span>Solar Solutions</span></h2>
            <p className="section-copy">INNOVATIVE specializes in manufacturing high-quality solar modules, utilizing stringent supply chain management to select our material suppliers. Our commitment to continuous product optimization and rigorous quality checks guarantees product reliability. We have extend our expertise to roofing solar projects for residential, commercial and industrial clients, enhancing our portfolio alongside panel manufacturing.</p>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <div className="feature-box" key={title}><div className="feature-icon"><Icon /></div><div><h5>{title}</h5><p>{text}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
