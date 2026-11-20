import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa'

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="topbar-left">
          <span><FaEnvelope /> <a href="mailto:innovativesolarsolution2024@gmail.com">innovativesolarsolution2024@gmail.com</a></span>
          <span><FaPhone /> <a href="tel:+919876543210">+91 98765 43210</a></span>
        </div>
        <div className="topbar-social"><span>Follow us:</span><a href="#"><FaFacebookF /></a><a href="#"><FaInstagram /></a><a href="#"><FaWhatsapp /></a></div>
      </div>
    </div>
  )
}

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg main-nav sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/"><span className="brand-mark">Innovative</span><b>Solar</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation"><FaBars /></button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/#services">Our Products</a></li>
            <li className="nav-item"><a className="nav-link" href="/#services">Our Solutions</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
            <li className="nav-item"><a className="nav-link" href="/#contact">Contact Us</a></li>
            <li className="nav-item"><a className="btn collaboration-btn ms-lg-2" href="/#contact">Get in Collaboration</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
