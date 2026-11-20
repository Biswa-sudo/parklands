import {
  FaChartLine, FaBolt, FaSolarPanel, FaArrowTrendUp,
  FaShieldHalved, FaPlugCircleBolt, FaLeaf, FaCompactDisc
} from 'react-icons/fa6'

const features = [
  { icon: FaChartLine, title: 'Enhanced Performance', number: '01' },
  { icon: FaBolt, title: 'High Power Density', number: '02' },
  { icon: FaSolarPanel, title: 'High Endurance', number: '03' },
  { icon: FaArrowTrendUp, title: 'Micro Crack Free', number: '04' },
  { icon: FaShieldHalved, title: 'Premium Quality', number: '05' },
  { icon: FaPlugCircleBolt, title: 'PID Resistant', number: '06' },
  { icon: FaLeaf, title: 'Modern Aesthetics', number: '07' },
  { icon: FaCompactDisc, title: 'Outstanding Durability', number: '08' },
]

export default function PanelFeaturesSection() {
  return (
    <section className="panel-features-section">
      <div className="container">
        <div className="text-center">
          <span className="panel-badge"><b>✓</b> Features</span>
          <h2>Innovative <span>Solar</span> Panels</h2>
          <p>Are Manufactured with Highest Quality Material Featuring Best in Class<br className="d-none d-md-block" /> Technology.</p>
          <div className="heading-lines"><i></i><i></i></div>
        </div>
        <div className="row panel-feature-grid g-4">
          {features.map(({ icon: Icon, title, number }) => (
            <div className="col-6 col-md-3" key={title}>
              <article className="panel-feature-card">
                <span className="panel-feature-number">{number}</span>
                <div className="panel-feature-icon"><Icon /></div>
                <h3>{title}</h3>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
