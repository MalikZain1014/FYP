import ApplyAdmission from "../../components/ApplyForAddmission/ApplyAdmission";
import Chatbot from "../../components/Chatbot/Chatbot";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Team from "../../components/OurTeam/Team";
import PreNav from "../../components/PreNav/PreNav";
import Pricing from "../../components/Pricing/Pricing";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
const Index = () => {
  return (
    <div>
      <Chatbot />
      <PreNav />
      <NavBar />
      <Slider />
      <ApplyAdmission />
      <Testimonials />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
