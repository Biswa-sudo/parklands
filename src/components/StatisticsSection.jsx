import { FaSolarPanel, FaUsers, FaRegClock, FaProjectDiagram } from 'react-icons/fa'

export default function StatisticsSection({ aboutPage = false }){
 const stats=aboutPage
  ? [{icon:<FaSolarPanel/>,num:'7',unit:'MW',text:'Of Modules Supplied'},{icon:<FaUsers/>,num:'27+',text:'Dealers'},{icon:<FaRegClock/>,num:'30+',text:'Years of Excellence'},{icon:<FaProjectDiagram/>,num:'33+',text:'Projects Completed'}]
  : [{icon:<FaSolarPanel/>,num:'100',unit:'MW',text:'of Modules Supplied'},{icon:<FaUsers/>,num:'400+',text:'Dealers'},{icon:<FaRegClock/>,num:'30+',text:'Years of Excellence'},{icon:<FaProjectDiagram/>,num:'500+',text:'Projects Completed'}]
 return <section className="statistics-section"><div className="container"><div className="row g-3">{stats.map(s=><div className="col-6 col-lg-3" key={s.text}><div className="stat-card"><div className="stat-icon">{s.icon}</div><div><div className="stat-number">{s.num}{s.unit&&<small>{s.unit}</small>}</div><div className="stat-text">{s.text}</div></div></div></div>)}</div></div></section>
}
