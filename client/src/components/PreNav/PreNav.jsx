import "./PreNav.css"
import { Mail, Phone } from 'iconoir-react';
const PreNav = () => {
  return (
    <div className="outerPreNavContainer">
      <div className="prenavContainer">
        <div className="leftpre">
          <div><Mail className="myPreIcon" /> <span>Contact@EduConnect.edu</span></div>
          <div><Phone className="myPreIcon" /> <span>+92-3116453909</span></div>
        </div>
        <div className="rightpre">
          <ul>
            <li>
              Alumni
            </li>
            <li>
              Calendar
            </li>
            <li>
              Portal
            </li>
            <li>
              Support EDU
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PreNav