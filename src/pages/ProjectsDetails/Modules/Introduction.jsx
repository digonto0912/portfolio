import React from "react"
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
              Sector. Ever since the 1500s, the standard placeholder text in the sector has been Lorem Ipsum, originating from.

              <br />
              <br />
              1. unidentified printmaker who.
              <br />
              2. he sector has been Lorem Ipsum.
              <br />
              3. he he sector Lorem Ipsum

              <br />
              <br />
              holder text in the sector has been Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Introduction;
