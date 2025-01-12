import React from "react"

const HeroSection = () => {
  return (
    <div className="Projects_details_hero_section">
      <div className="HR_text_video">
        <div className="HR_text">
          <div className="HR_text_core">

            <div>
              <h1>Eira ERP</h1>
              <div className="HR_text_headline_bottom_line" />
            </div>

            <div className="liveView_and_code">
              <a href="https://eira-erp-0.netlify.app/" target="_blank">View Liver</a>
              <div className="source_code">
                Currently, around 3-4% tasks of this application are in the development phase, which is the reason we're not disclosing its source code at this time. However, should you have a desire to inspect the source code of this application, don't hesitate to contact us through
                <a href="https://wa.me/8801842320461" target="_blank"> WhatsApp</a>,
                <a href="mailto:fardulislamdigonto799@gmail.com" target="_blank"> email</a>, or
                <a href="https://www.linkedin.com/in/fardul-islam-7a46021a7/" target="_blank"> LinkedIn</a>.
              </div>
            </div>

          </div>
        </div>


        <div className="HR_video">
          <div>
            <video controls>
              <source src="https://firebasestorage.googleapis.com/v0/b/portfolio-fid.appspot.com/o/complete.mp4?alt=media&token=3146963e-b5cd-4d50-9619-177dbb66d4c9" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroSection;
