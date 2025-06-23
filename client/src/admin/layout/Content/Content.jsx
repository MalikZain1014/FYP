import MainContent from "../../MainContent/MainContent";
import ContentTop from "../../adminComponents/ContentTop";
import "./Content.css"

const Content = () => {
  return (
    <div className='main-content'>
       <ContentTop/>
       <MainContent/>
    </div>
  )
}

export default Content