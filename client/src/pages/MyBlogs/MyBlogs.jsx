import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import BlogCard from '../../components/card/Card'
import './MyBlogs.css'
const MyBlogs = () => {
    const date = new Date().toLocaleDateString();
    return (
        <div className="myblogsContainer">
            <NavBar />
            <Header smallTitle="EDU Blogs" largetTitle="Our Blogs" />
            <div className="innerBlogGridContainer">
                <div className='blogDiv'>
                    <BlogCard bloglabel="hot" blogImage="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" blogCategory="Technology" blogTitle="Latest Coding Technologies" blogDescription="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone" blogDate={date} blogWriter="Usama Ahmad" />
                </div>
                <div className='blogDiv'>
                    <BlogCard bloglabel="hot" blogImage="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" blogCategory="Technology" blogTitle="Latest Coding Technologies" blogDescription="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone" blogDate={date} blogWriter="Usama Ahmad" />
                </div>
                <div className='blogDiv'>
                    <BlogCard bloglabel="hot" blogImage="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" blogCategory="Technology" blogTitle="Latest Coding Technologies" blogDescription="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone" blogDate={date} blogWriter="Usama Ahmad" />
                </div>
                <div className='blogDiv'>
                    <BlogCard bloglabel="hot" blogImage="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" blogCategory="Technology" blogTitle="Latest Coding Technologies" blogDescription="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone" blogDate={date} blogWriter="Usama Ahmad" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyBlogs