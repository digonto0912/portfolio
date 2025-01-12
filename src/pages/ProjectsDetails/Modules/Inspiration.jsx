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
            My inspiration for this project was American conceptual and minimalist sculptor Carl Andre. I was initially introduced to his works with an exhibition at the Milwaukee Art Museum of 144 Magnesium Square, and I was initially enticed by its perceived simplicity, and, more notably, because visitors were allowed to interact with the art by walking on top of the metal squares. His body of work primarily consists of these grids of metal squares, as well as other simple, geometric constructions. In looking for an installation artist, I thought I could use Andre's characteristic grid technique to create a specific meaning relating to my theme of the American West. I was also initially enticed to the appeared simplicity of his works, as I'm often attracted to artists who create simple seeming work, that, in reality, requires extensive work and planning, which the project did for me.
          </div>
        </div>
      </div>
    </div>
  )
};

export default Inspiration;
