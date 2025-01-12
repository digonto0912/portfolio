// home page CSS
import "./HomePage.css";
// Sections import
import HeroSection from "./Sections/HeroSection/HeroSection"
import AreasOfInterest from "./Sections/AreasOfInterest/AreasOfInterest"
import Footer from "../Footer/Footer";

function HomePage() {
    return (
        <div className='completePage'>
            <HeroSection></HeroSection>
            <AreasOfInterest></AreasOfInterest>
            <Footer />
        </div>
    )
}

export default HomePage;