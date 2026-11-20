import { FaStar } from 'react-icons/fa'

export default function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <span className="section-badge light"><b>✓</b> Testimonials</span>
        <h2>What Our Client <span>Says About Us</span></h2>
        <p className="testimonial-intro">The innovative solar panel provides best solar and quality of the panels, we look forward to best technology to serve.</p>
        <div id="testimonialCarousel" className="carousel slide testimonial-carousel" data-bs-ride="carousel">
          <div className="carousel-inner"><div className="carousel-item active"><div className="testimonial-card"><div className="testimonial-text"><div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p>Choosing Innovative Solar Solutions for our solar installation was an excellent decision. The whole process was smooth from initial consultation to final installation. The professional and reliable team ensured the project was completed on time.</p><strong>Mr. Ankit Patel</strong></div><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85" alt="Solar project"/></div></div><div className="carousel-item"><div className="testimonial-card"><div className="testimonial-text"><div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p>The team delivered a dependable and efficient hybrid solar system for our facility. Their service quality, documentation support and after-sales care have been exceptional.</p><strong>Commercial Project Client</strong></div><img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=85" alt="Commercial solar project"/></div></div></div>
          <div className="carousel-indicators"><button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button><button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button></div>
        </div>
      </div>
    </section>
  )
}
