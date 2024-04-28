// home page CSS
import "./HomePage.css";
// Sections import
import HeroSection from "./Sections/HeroSection/HeroSection"
import AreasOfInterest from "./Sections/AreasOfInterest/AreasOfInterest"

function HomePage() {
    return (
        <div className='completePage'>
            <HeroSection></HeroSection>
            <AreasOfInterest></AreasOfInterest>
        </div>
    )
}

export default HomePage;