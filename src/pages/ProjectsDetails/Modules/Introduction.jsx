import React, { useState } from "react"
import introImg from "../../../../public/images/project details/introImg.png"

const Introduction = () => {

  return (
    <div className="IntroductionSection">
      <div className="IntroductionPart">
        <div className="IntroductionHeadline">
          <div>
            <h1>Introduction</h1>
            <div className="IntoHeadlineBottom" />
          </div>
        </div>

        <div className="Introduction_img_text">
          <div className="Introduction_img">
            <img src={introImg} />
          </div>
          <div className="Introduction_text">
            <div>
              <h3>summary:</h3>

              <br />
              🔹 Developed a tailored ERP software for ERA Group, a house preservation service provider.

              <br />
              <br />
              🔹 Features include client profiles, work orders, inspections, invoices, and progress tracking.

              <br />
              <br />
              🔹 Streamlined workflows for field workers, office admins, and clients ensure transparency, efficiency, and accountability.

              <br />
              <br />
              <a href="/EraGroupOverview"> <h3>Read Details</h3> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Introduction;
