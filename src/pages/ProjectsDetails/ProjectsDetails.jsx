import "./ProjectsDetails.css";
import HeroSection from "./Modules/HeroSection";
import Introduction from "./Modules/Introduction";
import TechnolgyUsed from "./Modules/TechnolgyUsed";
import Inspiration from "./Modules/Inspiration";
import Duties from "./Modules/Duties";
import Challenges from "./Modules/Challenges";
import FinishingSection from "./Modules/FinishingSection";

const ProjectsDetails = () => {
  return (
    <div className="ProjectsDetails">
      <HeroSection />

      <div className="PD_overview">
        <h1>Overview</h1>
        <Introduction />
        <TechnolgyUsed />
      </div>

      <Inspiration />

      {/* <Duties />
      <Challenges /> */}
      <FinishingSection />
    </div>
  )
};

export default ProjectsDetails;
