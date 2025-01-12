import "./Resume.css";
import resumeImg from "../../../public/images/fidresume.png";
import Footer from "../Footer/Footer";

const Resume = () => {
    return (
        <div>
            <div className="Resume">
                <div className="video-resume">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lo1HRGl1CvE?si=QUmWKkVnY35EdY0d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="resumeImgDiv">
                    <h1>Resume</h1>
                    <a href="https://drive.google.com/file/d/1BAIhy9qDPwi3K4zKXgtOFpAsLBlyzWEU/view?usp=drive_link">
                        <div className="resumeImg">
                            <img src={resumeImg} />
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Resume;