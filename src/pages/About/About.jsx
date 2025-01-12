import "./About.css";
import BlueMe from "../../../public/images/BlueMe.png";
import BlueMe2 from "../../../public/images/BlueMe2.png";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div>
            <div className="About">
                <div>
                    <div className="AboutImgDiv"><img src={BlueMe2} /></div>
                    <div className="aboutTxt">
                        <h1>About</h1>
                        <div>
                            <h2>Hi, I am Fardul Islam</h2>
                            I am pursuing a career in Computer Science & Engineering from ICST, Bangladesh. Born and brought up in Feni, Bangladesh.
                            <br />
                            <br />
                            My idea behind taking up Computer Science & Engineering is my love for programming and the fact that, given the knowledge, I can make a computer do almost anything I want it to do (As a gift from God).
                            <br />
                            <br />
                            I have a keen interest in the field of Web Development, Machine Learning and Data Science, and I'm presently learning and working on the skills required to expertise in the same.
                            <br />
                            <br />
                            My hobbies include researching, reading articles, exploring YouTube recommendations, traveling, and binge-watching series.
                            <br />
                            <br />
                            I am a firm believer of passion and determination can lead you to success (As a gift from God).
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;