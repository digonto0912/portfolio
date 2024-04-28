

import "./Resume.css";
import resumeImg from "../../../public/images/fidresume.png";

const Resume = () => {
    return (
        <div className="Resume">
            <div className="video-resume">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lo1HRGl1CvE?si=QUmWKkVnY35EdY0d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="resumeImgDiv">
                <h1>Resume</h1>
                <div className="resumeImg">
                    <img src={resumeImg} />
                </div>
            </div>
        </div>
    );
};

export default Resume;