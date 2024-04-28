import "./About.css";
import BlueMe from "../../../public/images/BlueMe.png";

const About = () => {
    return (
        <div className="About">
            <div>
                <div className="AboutImgDiv"><img src={BlueMe} /></div>
                <div className="aboutTxt">
                    <h1>About</h1>
                    <div>
                        <h2>Hi, I am Fardul Islam</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a ut aperiam nemo commodi tempore laboriosam iusto id odit mollitia molestiae quisquam, quia rem, harum fugiat, pariatur repellat? Officiis a, reprehenderit facilis et asperiores vero est dolor voluptatibus dolore. Incidunt.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;