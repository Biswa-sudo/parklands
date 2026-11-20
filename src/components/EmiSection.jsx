import { FaCircle } from 'react-icons/fa'

export default function EmiSection() {
  const benefits=['Attractive depreciation benefits','Tenure option can be availed','Lowest rate of interest','Minimum documentation','Loan up to 85%']
  return (
    <section className="emi-section section-pad">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6"><h2 className="section-heading">Go Solar With EMIs <span>Starting From</span><br/>Approx Rs. 1635 /Lakh</h2>
            <ul className="benefit-list">{benefits.map(x=><li key={x}><FaCircle/> {x}</li>)}</ul>
            <p className="emi-note"><strong>Our Banking Partners are :</strong><br/>Bank of India / SBI / HDFC / PNB</p>
          </div>
          <div className="col-lg-6"><form className="emi-form"><div className="row g-3"><div className="col-md-6"><input className="form-control" placeholder="Your Name" required/></div><div className="col-md-6"><input className="form-control" placeholder="Your Phone" type="tel" required/></div><div className="col-md-6"><input className="form-control" placeholder="Your Email" type="email" required/></div><div className="col-md-6"><input className="form-control" placeholder="Your Pincode"/></div><div className="col-12"><textarea className="form-control" rows="5" placeholder="Write Your Message"></textarea></div><div className="col-12 text-end"><button className="green-btn" type="submit">Submit ›</button></div></div></form></div>
        </div>
      </div>
    </section>
  )
}
