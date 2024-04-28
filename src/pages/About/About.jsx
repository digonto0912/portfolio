import "./About.css";
import BlueMe from "../../../public/images/BlueMe.png";
import BlueMe2 from "../../../public/images/BlueMe2.png";

const About = () => {
    return (
        <div className="About">
            <div>
                <div className="AboutImgDiv"><img src={BlueMe2} /></div>
                <div className="aboutTxt">
                    <h1>About</h1>
                    <div>
                        <h2>Hi, I am Fardul Islam</h2>
                        I am 21 years old, currently in 4th year (Graduating 2021), pursuing a career in Computer Science & Engineering from Amity University, Kolkata, India. Born and brought up in Kolkata, India. I have done my schooling from Seventh Day Adventist Senior Secondary School in 2017, with Science + Computers as my background.
                        <br />
                        <br />
                        My idea behind taking up Computer Science & Engineering is my love for programming and the fact that, given the knowledge, I can make a computer do almost anything I want it to do.
                        <br />
                        <br />
                        I have a keen interest in the field of Machine Learning and Data Science, and I'm presently learning and working on the skills required to expertise in the same.
                        <br />
                        <br />
                        My hobbies include playing simulation games, such as Microsoft Flight Simulator X, Euro Truck Simulator 2, and Tower 3D pro; reading articles, browsing YouTube recommendations, traveling, and binge watching series.
                        <br />
                        <br />
                        I am a firm believer of passion and determination can lead you to success.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;