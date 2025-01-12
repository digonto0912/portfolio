import React from "react"

// web development skills images 
// frontEnd
import htmlImg from "../../../../public/images/skills image/development/frontEnd/html.png";
import cssImg from "../../../../public/images/skills image/development/frontEnd/css.png";
import jsImg from "../../../../public/images/skills image/development/frontEnd/js.png";
import tsImg from "../../../../public/images/skills image/development/frontEnd/ts.png";
import reactImg from "../../../../public/images/skills image/development/frontEnd/react.png";
import BootstrapImg from "../../../../public/images/skills image/development/frontEnd/Bootstrap.png";
// backEnd
import nodeImg from "../../../../public/images/skills image/development/backEnd/node.png";
import expressImg from "../../../../public/images/skills image/development/backEnd/express.png";
import apiImg from "../../../../public/images/skills image/development/backEnd/api.png";
import firebaseImg from "../../../../public/images/skills image/development/backEnd/firebase.png";
import mongoDBImg from "../../../../public/images/skills image/development/backEnd/mongoDB.png";
import puppeteerImg from "../../../../public/images/skills image/development/backEnd/puppeteer.png";
import hbsImg from "../../../../public/images/skills image/development/backEnd/hbs.jpg";
// testing
import jestImg from "../../../../public/images/skills image/development/testing/jest.jpg";

// deployment
// environment
import RenderImg from "../../../../public/images/skills image/deployment/environment/Render.png";
import HerokuImg from "../../../../public/images/skills image/deployment/environment/Heroku.png";
import HostingImg from "../../../../public/images/skills image/deployment/environment/Hosting.png";
import NetlifyImg from "../../../../public/images/skills image/deployment/environment/Netlify.png";
import VercelImg from "../../../../public/images/skills image/deployment/environment/Vercel.png";
import linuxImg from "../../../../public/images/skills image/deployment/environment/linux.svg";
import dockerImg from "../../../../public/images/skills image/deployment/environment/docker.png";
// deployment tools
import gitImg from "../../../../public/images/skills image/deployment/deploymentTools/git.png";
import githubImg from "../../../../public/images/skills image/deployment/deploymentTools/github.png";
import npmImg from "../../../../public/images/skills image/deployment/deploymentTools/npm.png";
import yarnImg from "../../../../public/images/skills image/deployment/deploymentTools/yarn.png";

const TechnolgyUsed = () => {
  return (
    <div className="TechnolgyUsed">
      <div className="TechnolgyUsedSectoin">
        <div className="TechnolgyUsedHeadline">
          <div>
            <h1>Technolgy Used</h1>
            <div className="TechnolgyUsedHeadlineBottom" />
          </div>
        </div>

        <div className="TechnolgysBoxs">
          <div className="TechnolgysBoxsSection">

            {/* box 1 */}
            <div className="TechnolgysBox">
              <div className="TechnolgysBoxHeadline">FRONT END</div>
              <div className="TechnolgysBoxShowPart">
                <div>
                  <div className="allSkills ">
                    {[
                      ["HTML", htmlImg, ""],
                      ["CSS", cssImg, ""],
                      ["JavaScript", jsImg, "bg-yellow"],
                      ["TypeScript", tsImg, ""],
                      ["REACT", reactImg, ""],
                      ["Bootstrap", BootstrapImg, ""]
                    ].map((item, idx) => (
                      <div key={idx} className="singleSkill TechUsedSingleSkill">
                        <div>
                          {item[0]}
                        </div>
                        <img src={item[1]} className={item[2]} />
                      </div>
                    ))}
                    <div className="singleSkill TechUsedSingleSkill">
                      <div>ETC (and more depending on tasks)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* box 2 */}
            <div className="TechnolgysBox">
              <div className="TechnolgysBoxHeadline">BACK END</div>
              <div className="TechnolgysBoxShowPart">
                <div className="allSkills">
                  {[
                    ["Node.JS", nodeImg, ""],
                    ["Express.JS", expressImg, ""],
                    ["JavaScript", jsImg, "bg-yellow"],
                    ["TypeScript", tsImg, ""],
                    ["Rest API", apiImg, ""],
                    ["Firebase", firebaseImg, ""],
                    ["MongoDB", mongoDBImg, ""],
                    ["Puppeteer", puppeteerImg, ""],
                    ["handlebars js", hbsImg, ""],
                  ].map((item, idx) => (
                    <div key={idx} className="singleSkill  TechUsedSingleSkill">
                      <div>
                        {item[0]}
                      </div>
                      <img src={item[1]} className={item[2]} />
                    </div>
                  ))}
                  <div className="singleSkill  TechUsedSingleSkill">
                    <div>ETC (and more depending on tasks)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* box 3 */}
            <div className="TechnolgysBox">
              <div className="TechnolgysBoxHeadline">TESTING</div>
              <div className="TechnolgysBoxShowPart">
                <div className="allSkills ">
                  {[
                    ["Jest", jestImg, ""]
                  ].map((item, idx) => (
                    <div key={idx} className="singleSkill TechUsedSingleSkill">
                      <div>
                        {item[0]}
                      </div>
                      <img src={item[1]} className={item[2]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* box 4 */}
            <div className="TechnolgysBox">
              <div className="TechnolgysBoxHeadline">DEPLOYMENT</div>
              <div className="TechnolgysBoxShowPart">
                <div className="deploymentBox">
                  <ul>
                    <li>
                      <div>
                        <div>Server Management: </div>
                        <div className="allSkills allSkillsInSub">
                          {[
                            ["Linux basics", linuxImg, ""],
                            ["Docker", dockerImg, ""]
                          ].map((item, idx) => (
                            <div key={idx} className="singleSkill TechUsedSingleSkill">
                              <div>
                                {item[0]}
                              </div>
                              <img src={item[1]} className={item[2]} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <div>Hosting Services: </div>
                        <div className="allSkills allSkillsInSub">
                          {[
                            ["Netlify", NetlifyImg, ""],
                            ["Render", RenderImg, ""]
                          ].map((item, idx) => (
                            <div key={idx} className="singleSkill TechUsedSingleSkill">
                              <div>
                                {item[0]}
                              </div>
                              <img src={item[1]} className={item[2]} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <div>Version Control: </div>
                        <div className="allSkills allSkillsInSub">
                          {[
                            ["GitHub", githubImg, ""],
                            ["Git", gitImg, ""],
                          ].map((item, idx) => (
                            <div key={idx} className="singleSkill TechUsedSingleSkill">
                              <div>
                                {item[0]}
                              </div>
                              <img src={item[1]} className={item[2]} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li>
                      <div>
                        <div>Package Management: </div>
                        <div className="allSkills allSkillsInSub">
                          {[
                            ["NPM", npmImg, ""],
                            ["YARN", yarnImg, ""]
                          ].map((item, idx) => (
                            <div key={idx} className="singleSkill TechUsedSingleSkill">
                              <div>
                                {item[0]}
                              </div>
                              <img src={item[1]} className={item[2]} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TechnolgyUsed;
