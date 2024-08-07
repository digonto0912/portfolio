import "./HeroSection.css";
import abc from "../../../../../public/images/med (2).png";

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <div>
                <div className="imageDiv imageDivtop">
                    <img src={abc} />
                </div>
                <div className="leftDivOfTxt">
                    <div>
                        <span>I am</span>
                        <br />
                        Fardul Islam
                    </div>
                    <h4>
                        Innovative Integrator: Uniting Data Science, ML, and Web Dev with Passion and Precision.
                    </h4>
                    <button>
                        MY PROJECTS
                    </button>
                </div>
                <div className="imageDiv imageDivbottom">
                    <img src={abc} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;