import "./HeroSection.css";
import abc from "../../../../../public/images/fardulDigonto.png";

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
                        Bringing Over 5 Years of Expertise in Full-Stack Web Development, Data Science, and Machine Learning
                    </h4>
                    <a href="/projects">
                        <button>
                            MY PROJECTS
                        </button>
                    </a>
                </div>
                <div className="imageDiv imageDivbottom">
                    <img src={abc} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;