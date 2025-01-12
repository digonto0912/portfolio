import React from "react"
import erpsys from "../../../../public/images/projects/erpsys.png"
import MP_Img from "../../../../public/images/projects/mp_img.jpg"
import MP_blur_Img from "../../../../public/images/projects/mp-blur.png"
import info from "../../../../public/images/info.png"

const WebDevelopment = ({
    active_Project_Lists_Is_Web_Development,
    projectLists
}) => {
    return (
        <div className={`${!active_Project_Lists_Is_Web_Development ? "d-none" : ""} WDProjectsList`}>

            <div className="mt-30">
                <h1>Complex Production Focused</h1>
                <div className={"TopProject WDProject"}>
                    <div>
                        <div className="WDProjectImg">
                            <img src={erpsys} />
                        </div>

                        <div>
                            <div>
                                <h3>EIRA ERP (Enterprise Resource Planning) System</h3>

                                <br />
                                <div>Company: Eira Group (Recent)</div>
                                <div>Date: Sep 2024</div>
                            </div>

                            <br />
                            <a href={`project-details/${"eira-erp"}`} >
                                <button className="WEProjectBtn">Details</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-50">
                <h1>Design Focused</h1>

                {projectLists.map((project, index) => (
                    <div className="WDProject WDNormalProject">
                        <div>
                            <div className="WDProjectImg" style={{ backgroundImage: `url(${MP_blur_Img})` }}>
                                <img src={MP_Img} /* project.img */ />
                            </div>
                            <div>
                                <div>
                                    <h3>{project.title}</h3>

                                    <br />
                                    <div>Project: Side Project</div>
                                    <div>Date: {project.date}</div>

                                    <br />
                                    <div>Live View: <a
                                        href="https://magical-programmer.netlify.app/"
                                        target="_blank">
                                        https://magical-programmer
                                    </a>
                                    </div>

                                    <br />
                                    <div>GitHub:       <a
                                        href="https://github.com/digonto0912/magical-programmer"
                                        target="_blank">
                                        digonto0912/magical-programmer
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="time-saving-note">
                <img src={info} />
                <div>
                    To save your time, I’ve highlighted my best work. For more projects, feel free to explore my <a href="https://github.com/digonto0912" target="_blank"> <u>GitHub</u> </a>
                </div>
            </div>
        </div >
    )
};

export default WebDevelopment;