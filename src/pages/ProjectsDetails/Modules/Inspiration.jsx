import React from "react"
import ppw from "../../../../public/images/inspiration/ppw.png"
import verisk from "../../../../public/images/inspiration/verisk.png"

const Inspiration = () => {
  return (
    <div className="InspirationPart">
      <div className="InspirationSection">
        <h1>Inspiration</h1>

        <div className="InspirationImages_N_Description">
          <div className="InspirationImages">
            <div className="Inspiration_Image_Div_N_Title">
              <div className="InspirationImageMidManager1">
                <div className="InspirationImageDiv1">
                  <img src={ppw} />
                </div>
              </div>
              <div>PPW [Main Inspiration]</div>
            </div>
            <div className="Inspiration_Image_Div_N_Title">
              <div className="InspirationImageMidManager2">
                <div className="InspirationImageDiv2">
                  <img src={verisk} />
                </div>
              </div>
              <div>Verisk [Mother Company]</div>
            </div>
          </div>

          <div className="InspirationText">
            Eira Company drew significant inspiration for its ERP software architecture from Property Pres Wizard (PPW), a leading work order management solution specializing in property preservation services. PPW, now a part of Verisk, offers a comprehensive suite of tools designed to streamline field service tasks, manage work orders, and ensure compliance with industry regulations.
            
            <br />
            <br />
            <a href="https://home.propertypreswizard.com/?utm_source=chatgpt.com" target="_blank">PPW - PROPERTY PRESERVATION WIZARD </a>

            <br />
            <br />
            By studying PPW's robust features and seamless integration capabilities, Eira Company was motivated to develop a system that enhances operational efficiency and transparency in property preservation. This inspiration led to the creation of an ERP solution that mirrors PPW's strengths, such as intuitive interfaces, comprehensive work order management, and real-time data collection, tailored to meet the specific needs of their clients.
          </div>
        </div>
      </div>
    </div>
  )
};

export default Inspiration;
