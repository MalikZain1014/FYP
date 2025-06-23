import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './SingleBlogPage.css'
const SingleBlogPage = () => {
    return (
        <div className='SingleblogContainer'>
            <NavBar />
            <Header smallTitle="EDU Blog Page" largetTitle="Single Article / Blog" />
            Single Blog Item
            <Footer />
        </div>
    )
}

export default SingleBlogPage