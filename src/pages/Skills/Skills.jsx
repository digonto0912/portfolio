import "./Skills.css";
import { useState } from "react";

// buttons
import lockImg from "../../../public/images/lock.png";

// web development skills images 
import htmlImg from "../../../public/images/skills image/development/frontEnd/html.png";
import cssImg from "../../../public/images/skills image/development/frontEnd/css.png";
import jsImg from "../../../public/images/skills image/development/frontEnd/js.png";
import tsImg from "../../../public/images/skills image/development/frontEnd/ts.png";
import reactImg from "../../../public/images/skills image/development/frontEnd/react.png";
import MaterialImg from "../../../public/images/skills image/development/frontEnd/Material-UI.png";
import TailwindImg from "../../../public/images/skills image/development/frontEnd/Tailwind.png";
import BootstrapImg from "../../../public/images/skills image/development/frontEnd/Bootstrap.png";
import nodeImg from "../../../public/images/skills image/development/backEnd/node.png";
import expressImg from "../../../public/images/skills image/development/backEnd/express.png";
import apiImg from "../../../public/images/skills image/development/backEnd/api.png";
import firebaseImg from "../../../public/images/skills image/development/backEnd/firebase.png";
import mongoDBImg from "../../../public/images/skills image/development/backEnd/mongoDB.png";
import c_plImg from "../../../public/images/skills image/development/backEnd/c_pl.png";
import jestImg from "../../../public/images/skills image/development/testing/jest.jpg";
import seleniumImg from "../../../public/images/skills image/development/testing/selenium.png";
import beautifulSoupImg from "../../../public/images/skills image/development/testing/beautifulSoup.png";
import pyImg from "../../../public/images/skills image/development/programming_language/python.png";

// web deployment skills images 
// environment
import gcpImg from "../../../public/images/skills image/deployment/environment/gcp.png";
import RenderImg from "../../../public/images/skills image/deployment/environment/Render.png";
import HerokuImg from "../../../public/images/skills image/deployment/environment/Heroku.png";
import HostingImg from "../../../public/images/skills image/deployment/environment/Hosting.png";
import NetlifyImg from "../../../public/images/skills image/deployment/environment/Netlify.png";
import VercelImg from "../../../public/images/skills image/deployment/environment/Vercel.png";
import linuxImg from "../../../public/images/skills image/deployment/environment/linux.svg";
import dockerImg from "../../../public/images/skills image/deployment/environment/docker.png";
// deployment tools
import gitImg from "../../../public/images/skills image/deployment/deploymentTools/git.png";
import githubImg from "../../../public/images/skills image/deployment/deploymentTools/github.png";
import npmImg from "../../../public/images/skills image/deployment/deploymentTools/npm.png";
import yarnImg from "../../../public/images/skills image/deployment/deploymentTools/yarn.png";
// security
import jwtImg from "../../../public/images/skills image/deployment/security/jwt.png";
import bcryptImg from "../../../public/images/skills image/deployment/security/bcrypt.png";
import CustomImg from "../../../public/images/skills image/deployment/security/Custom.png";

// tools 
import vscodeImg from "../../../public/images/skills image/tools/vscode.png";
import figmaImg from "../../../public/images/skills image/tools/figma.png";



const Projects = () => {
    const [active_Skills_Lists_Is_Web_Development, set_Active_Skills_Lists_Is_Web_Development] = useState(true);

    const showWebDevelopmentSkills = () => {
        set_Active_Skills_Lists_Is_Web_Development(true)
    };

    const showMachineLearningSkills = () => {
        set_Active_Skills_Lists_Is_Web_Development(false)
    };

    return (
        <div className="Projects">
            <div className="SkillsListDiv">

                {/* headline and buttons */}
                <div className="SkillsListDivHeadline">
                    <div className="SkillsPageHeadline">
                        <h1>What I Love to Do</h1>
                        <p>Here are some things I genuinely enjoy working on.</p>
                    </div>

                    {/* project type seleting buttons */}
                    <div className='projectTypeButton'>
                        <button
                            onClick={showWebDevelopmentSkills}
                            className={active_Skills_Lists_Is_Web_Development ? "projects_active_btn" : ""}
                        >
                            Web Development
                        </button>

                        <button
                            // onClick={showMachineLearningSkills}
                            className={
                                `SkillsTypeSeletionButton ${!active_Skills_Lists_Is_Web_Development ? "projects_active_btn" : ""}`
                            }
                        >
                            Data Structure & Algorithm
                            <img src={lockImg} />
                        </button>

                        <button
                            // onClick={showMachineLearningSkills}
                            className={
                                `SkillsTypeSeletionButton ${!active_Skills_Lists_Is_Web_Development ? "projects_active_btn" : ""}`
                            }
                        >
                            Data Science & Machine Learning
                            <img src={lockImg} />
                        </button>
                    </div>
                </div>

                {/* Web Development */}
                {active_Skills_Lists_Is_Web_Development && (
                    <div className="skillsBox">
                        <div className="skillsBoxSkills">
                            <div className="stagesOfSkills">

                                {/* DEVELOPMENT */}
                                <div className="skillsHeadRow">
                                    <h4>DEVELOPMENT</h4>
                                    <div className="skillsBoxDualColumn">

                                        {/* FRONT-END */}
                                        <div className="bg-RoyalBlue skillsCartSingleColumn">
                                            <h3>FRONT END</h3>
                                            <div className="allSkills ">
                                                {[
                                                    ["HTML", htmlImg, ""],
                                                    ["CSS", cssImg, ""],
                                                    ["JavaScript", jsImg, "bg-yellow"],
                                                    ["TypeScript", tsImg, ""],
                                                    ["REACT", reactImg, ""],
                                                    ["Material-UI", MaterialImg, ""],
                                                    ["Tailwind", TailwindImg, ""],
                                                    ["Bootstrap", BootstrapImg, ""]
                                                ].map((item, idx) => (
                                                    <div key={idx} className="singleSkill">
                                                        <div>
                                                            {item[0]}
                                                        </div>
                                                        <img src={item[1]} className={item[2]} />
                                                    </div>
                                                ))}
                                                <div className="singleSkill">
                                                    <div>ETC (and more depending on project)</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* BACK END */}
                                        <div className="bg-DeepPurple skillsCartSingleColumn">
                                            <h3>BACK END</h3>
                                            <div className="allSkills">
                                                {[
                                                    ["Node.JS", nodeImg, ""],
                                                    ["Express.JS", expressImg, ""],
                                                    ["JavaScript", jsImg, "bg-yellow"],
                                                    ["TypeScript", tsImg, ""],
                                                    ["Rest API", apiImg, ""],
                                                    ["Firebase", firebaseImg, ""],
                                                    ["MongoDB", mongoDBImg, ""],
                                                    ["C (not heavy)", c_plImg, ""],
                                                ].map((item, idx) => (
                                                    <div key={idx} className="singleSkill">
                                                        <div>
                                                            {item[0]}
                                                        </div>
                                                        <img src={item[1]} className={item[2]} />
                                                    </div>
                                                ))}
                                                <div className="singleSkill">
                                                    <div>ETC (and more depending on project)</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* TESTING */}
                                        <div className="bg-EmeraldGreen skillsCartSingleColumn">
                                            <h3>TESTING</h3>
                                            <div className="allSkills ">
                                                {[
                                                    ["Jest", jestImg, ""],
                                                    ["Selenium", seleniumImg, ""],
                                                    ["BeautifulSoup", beautifulSoupImg, ""]
                                                ].map((item, idx) => (
                                                    <div key={idx} className="singleSkill">
                                                        <div>
                                                            {item[0]}
                                                        </div>
                                                        <img src={item[1]} className={item[2]} />
                                                    </div>
                                                ))}
                                                <div className="singleSkill">
                                                    <div>ETC (and more depending on project)</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* PROGRAMMING LANGUAGE */}
                                        <div className="bg-AmberYellow skillsCartSingleColumn">
                                            <h3>PROGRAMMING LANGUAGE</h3>
                                            <div className="allSkills">
                                                {[
                                                    ["JavaScript", jsImg, "bg-yellow"],
                                                    ["TypeScript (DEV TOOL)", tsImg, ""],
                                                    ["Python", pyImg, ""],
                                                    ["C", c_plImg, ""]
                                                ].map((item, idx) => (
                                                    <div key={idx} className="singleSkill">
                                                        <div>
                                                            {item[0]}
                                                        </div>
                                                        <img src={item[1]} className={item[2]} />
                                                    </div>
                                                ))}
                                                <div className="singleSkill">
                                                    <div>ETC (and more depending on project)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* DEPLOYMENT */}
                                <div className="skillsHeadRow">
                                    <h4>DEPLOYMENT</h4>
                                    <div className="skillsBoxDualColumn">

                                        {/* PLATFORM/ENVIRONMENT */}
                                        <div className="bg-SkyBlue skillsCartSingleColumn">
                                            <h3>PLATFORM / ENVIRONMENT</h3>
                                            <div className="allSkills ">

                                                <div>
                                                    <div>Server Management: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["Linux basics", linuxImg, ""],
                                                            ["Docker", dockerImg, ""]
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>Cloud Providers: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[["Google Cloud Platform (GCP) [Not too heavy]", gcpImg, ""]]
                                                            .map((item, idx) => (
                                                                <div key={idx} className="singleSkill">
                                                                    <div>
                                                                        {item[0]}
                                                                    </div>
                                                                    <img src={item[1]} className={item[2]} />
                                                                </div>
                                                            ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>Hosting Services: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["Vercel", VercelImg, ""],
                                                            ["Netlify", NetlifyImg, ""],
                                                            ["Firebase", firebaseImg, "bg-yellow"],
                                                            ["Hosting", HostingImg, ""],
                                                            ["Heroku", HerokuImg, ""],
                                                            ["Render", RenderImg, ""]
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="allSkills allSkillsInSub">
                                                    <div className="singleSkill">
                                                        <div>ETC (and more depending on project)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* DEPLOYMENT TOOLS AND PRACTICES */}
                                        <div className="bg-WarmRed skillsCartSingleColumn">
                                            <h3>DEPLOYMENT TOOLS AND PRACTICES</h3>
                                            <div className="allSkills ">

                                                <div>
                                                    <div>Version Control: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["GitHub", githubImg, ""],
                                                            ["Git", gitImg, ""],
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>Containerization: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["Docker", dockerImg, ""]
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>Package Management: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["NPM", npmImg, ""],
                                                            ["YARN", yarnImg, ""]
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="allSkills allSkillsInSub">
                                                    <div className="singleSkill">
                                                        <div>ETC (and more depending on project)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SECURITY PRACTICES */}
                                        <div className="bg-SunsetOrange skillsCartSingleColumn">
                                            <h3>SECURITY PRACTICES</h3>
                                            <div className="allSkills ">

                                                <div>
                                                    <div>Authentication / Authorization: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        {[
                                                            ["Firebase Auth", firebaseImg, ""],
                                                            ["JWT", jwtImg, ""],
                                                            ["BCrypt", bcryptImg, ""],
                                                            ["Custom", CustomImg, ""],
                                                        ].map((item, idx) => (
                                                            <div key={idx} className="singleSkill">
                                                                <div>
                                                                    {item[0]}
                                                                </div>
                                                                <img src={item[1]} className={item[2]} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>Environment Variables: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        <div className="singleSkill">
                                                            <div>Dotenv / secrets management</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div>HTTPS Configuration: </div>
                                                    <div className="allSkills allSkillsInSub">
                                                        <div className="singleSkill">
                                                            <div>SSL/TLS basics</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="allSkills allSkillsInSub">
                                                    <div className="singleSkill">
                                                        <div>ETC (and more depending on project)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TOOLS */}
                            <div className="skillsHeadRow skillsHeadColumn ">
                                <h4>TOOLS</h4>
                                <div className="allSkills bg-green">
                                    {[
                                        ["VS Code", vscodeImg, ""],
                                        ["Figma", figmaImg, ""],
                                        ["GitHub", githubImg, "bg-yellow"],
                                        ["git", gitImg, ""],
                                        ["Docker", dockerImg, ""],
                                        ["Firebase", firebaseImg, ""],
                                        ["Netlify", NetlifyImg, ""]
                                    ].map((item, idx) => (
                                        <div key={idx} className="singleSkill">
                                            <div>
                                                {item[0]}
                                            </div>
                                            <img src={item[1]} className={item[2]} />
                                        </div>
                                    ))}
                                    <div className="singleSkill">
                                        <div>ETC (and more depending on project)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Data Science & Machine Learning */}
                {!active_Skills_Lists_Is_Web_Development && (
                    <div className="skillsBox">
                        <div className="skillsBoxTitle">
                            <h1>Data Science & Machine Learning</h1>
                        </div>

                        {/* Web Development */}
                        <div className="skillsBoxSkills">

                            {/* DEVELOPMENT */}
                            <div className="skillsHeadRow">
                                <h4>DEVELOPMENT</h4>
                                <div className="skillsBoxDualColumn">

                                    {/* FRONT-END */}
                                    <div className="bg-dark-red skillsCartSingleColumn">
                                        <h3>FRONT END</h3>
                                        <div className="allSkills ">
                                            {[
                                                ["HTML", htmlImg, ""],
                                                ["CSS", cssImg, ""],
                                                ["JavaScript", jsImg, "bg-yellow"],
                                                ["TypeScript", tsImg, ""],
                                                ["REACT", reactImg, ""],
                                                ["Material-UI", MaterialImg, ""],
                                                ["Tailwind", TailwindImg, ""],
                                                ["Bootstrap", BootstrapImg, ""]
                                            ].map((item, idx) => (
                                                <div key={idx} className="singleSkill">
                                                    <div>
                                                        {item[0]}
                                                    </div>
                                                    <img src={item[1]} className={item[2]} />
                                                </div>
                                            ))}
                                            <div className="singleSkill">
                                                <div>ETC (and more depending on project)</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK END */}
                                    <div className="bg-dark-blue skillsCartSingleColumn">
                                        <h3>BACK END</h3>
                                        <div className="allSkills">
                                            {[
                                                ["Node.JS", nodeImg, ""],
                                                ["Express.JS", expressImg, ""],
                                                ["JavaScript", jsImg, "bg-yellow"],
                                                ["TypeScript", tsImg, ""],
                                                ["Rest API", apiImg, ""],
                                                ["Firebase", firebaseImg, ""],
                                                ["MongoDB", mongoDBImg, ""],
                                                ["C (not heavy)", c_plImg, ""],
                                            ].map((item, idx) => (
                                                <div key={idx} className="singleSkill">
                                                    <div>
                                                        {item[0]}
                                                    </div>
                                                    <img src={item[1]} className={item[2]} />
                                                </div>
                                            ))}
                                            <div className="singleSkill">
                                                <div>ETC (and more depending on project)</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* TESTING */}
                                    <div className="bg-dark-green skillsCartSingleColumn">
                                        <h3>TESTING</h3>
                                        <div className="allSkills ">
                                            {[
                                                ["Jest", jestImg, ""],
                                                ["Selenium", seleniumImg, ""],
                                                ["BeautifulSoup", beautifulSoupImg, ""]
                                            ].map((item, idx) => (
                                                <div key={idx} className="singleSkill">
                                                    <div>
                                                        {item[0]}
                                                    </div>
                                                    <img src={item[1]} className={item[2]} />
                                                </div>
                                            ))}
                                            <div className="singleSkill">
                                                <div>ETC (and more depending on project)</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PROGRAMMING LANGUAGE */}
                                    <div className="bg-dark-yellow skillsCartSingleColumn">
                                        <h3>PROGRAMMING LANGUAGE</h3>
                                        <div className="allSkills">
                                            {[
                                                ["JavaScript", jsImg, "bg-yellow"],
                                                ["TypeScript", tsImg, ""],
                                                ["Python", pyImg, ""],
                                                ["C", c_plImg, ""]
                                            ].map((item, idx) => (
                                                <div key={idx} className="singleSkill">
                                                    <div>
                                                        {item[0]}
                                                    </div>
                                                    <img src={item[1]} className={item[2]} />
                                                </div>
                                            ))}
                                            <div className="singleSkill">
                                                <div>ETC (and more depending on project)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TOOLS */}
                            <div className="skillsHeadRow">
                                <h4>TOOLS</h4>
                                <div className="allSkills bg-green">
                                    {[
                                        ["HTML", htmlImg, ""],
                                        ["CSS", cssImg, ""],
                                        ["JavaScript", jsImg, "bg-yellow"],
                                        ["TypeScript", tsImg, ""],
                                        ["REACT", reactImg, ""],
                                        ["Material-UI", MaterialImg, ""],
                                        ["Tailwind", TailwindImg, ""],
                                        ["Bootstrap", BootstrapImg, ""]
                                    ].map((item, idx) => (
                                        <div key={idx} className="singleSkill">
                                            <div>
                                                {item[0]}
                                            </div>
                                            <img src={item[1]} className={item[2]} />
                                        </div>
                                    ))}
                                    <div className="singleSkill">
                                        <div>ETC (and more depending on project)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Projects;
