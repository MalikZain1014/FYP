import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { Building, GraduationCap, HandCash } from 'iconoir-react'
import './AboutUs.css'
const AboutUsFrontEnd = () => {
  return (
    <div className='OuterAboutUsContainer'>
      <NavBar />
      <Header smallTitle="Knows us better" largetTitle="About Us" />
      <div className="innerAboutUsContainer">
        <div className="histryAboutusContainer">
          <div>
            <h1 className='myhistytitle'>EDU Connect History</h1>
          </div>
          <div className='myaboutdescription'>
            <p>f you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study</p>
          </div>
          <div className='myaboutdescription'>
            <p>If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicantt’s application, academic and personal, to select students who suit to our community.</p>
          </div>
        </div>
        <div className="largetGridContinaer">
          <div className='griditemabout'>
            <div className="innerContentAbout">
              <Building className='aboutusIcon' />
              <h1>Special Campus Tour</h1>
              <p>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
          <div className='griditemabout'>
            <img src="https://images.unsplash.com/photo-1580684744040-4b38f7f4c586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80" alt="" />
          </div>
          <div className='griditemabout'>
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          </div>
          <div className='griditemabout'>
            <div className="innerContentAbout">
              <GraduationCap className='aboutusIcon' />
              <h1>Graduation</h1>
              <p>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
          <div className='griditemabout'>
            <div className="innerContentAbout">

              <HandCash className='aboutusIcon' />
              <h1>Powerful Alumni</h1>
              <p>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
            </div>
          </div>
          <div className='griditemabout'>
            <img src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUsFrontEnd