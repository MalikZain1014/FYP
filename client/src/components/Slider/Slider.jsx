import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../components/Slider/Slider.css"
const Slider = () => {
    return (
        <div className="carousel_container">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                interval={4000} // Time interval between slides in milliseconds
                infiniteLoop={true}
            >
                <div className="carousel-slide">
                    <img
                        src="https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?w=1380&t=st=1693119398~exp=1693119998~hmac=3491a43d951ecab9ae4e34d72551c9984a8c41f517fceff24f7f9af353a6e5b7"
                        alt="Slide 1"
                    />
                    <div className="carousel-content">
                        <p>The Best University of the Staate</p>
                        <h2>EDU Conntect University</h2>
                       <button>Read More</button>
                    </div>
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?w=1380&t=st=1693119480~exp=1693120080~hmac=3870bc39eff5c7b4d46b4d0546e3b9773cd7c9a983a9ef14e8ea1b8672b5abe3"
                        alt="Slide 1"
                    />
                    <div className="carousel-content">
                        <p>The Campus Tour</p>
                        <h2>The University of Edu Connect</h2>
                       <button>Read More</button>
                        
                    </div>
                </div>
                <div className="carousel-slide">
                    <img
                        src="https://img.freepik.com/free-photo/building_1127-3357.jpg?w=1380&t=st=1693119507~exp=1693120107~hmac=526b285a9ad3c3613d685cc8ea36d12393a032c5cdada8d077fd88ae233afe86"
                        alt="Slide 3"
                    />
                    <div className="carousel-content">
                        <p>Edu Conntect has  more than</p>
                        <h2>180 Majors & Minors</h2>
                        <button>Read More</button>

                    </div>
                </div>
                {/* Add more slides with similar structure */}
            </Carousel>
        </div>
    );
}

export default Slider