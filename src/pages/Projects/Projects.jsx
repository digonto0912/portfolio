import "./Projects.css";
import img1 from "../../../public/images/nlp-nltk.png";
import img2 from "../../../public/images/TSA.png";
import img3 from "../../../public/images/CS1.png";
import img4 from "../../../public/images/CS2.png";
import img5 from "../../../public/images/insta-bot-1.png";
import img6 from "../../../public/images/insta-bot-2.png";
import img7 from "../../../public/images/gradient descent batch.png";

const Projects = () => {
    return (
        <div className="Projects">
            <div className="ProjectsHeader">
                <div>
                    <h1>
                        Perfect is greater than Pretty Good
                    </h1>
                    <h4>- my belive</h4>
                </div>
            </div>
            <div className="ProjectsListDiv">
                <div className="ProjectsListDivHeadline">
                    <h1>my latest works</h1>
                    <h5>check my weork</h5>
                </div>
                <div className="ProjectsList">

                    {/* 1 */}
                    <a href="https://github.com/digonto0912/NLP-with-NLTK" target="_blank">
                        <div className="Project">
                            <img src={img1} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 2 */}
                    <a href="https://github.com/digonto0912/twitter-sentiment-analysis" target="_blank">
                        <div className="Project">
                            <img src={img2} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 3 */}
                    <a href="https://github.com/digonto0912/case-study-1" target="_blank"> 
                        <div className="Project">
                            <img src={img3} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 4 */}
                    <a href="https://github.com/digonto0912/case-study-2" target="_blank">
                        <div className="Project">
                            <img src={img4} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 5 */}
                    <a href="https://github.com/digonto0912/Instagram-Bot---1" target="_blank">
                        <div className="Project">
                            <img src={img5} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 6 */}
                    <a href="https://github.com/digonto0912/Instagram-Bot---2" target="_blank">
                        <div className="Project">
                            <img src={img6} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>

                    {/* 7 */}
                    <a href="https://github.com/digonto0912/gradient-descent-batch-from-scratch" target="_blank">
                        <div className="Project">
                            <img src={img7} alt="" />
                            <div>12 12 april</div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate natus eos? Eaque sunt possimus numquam quia obcaecati delectus non molestias dicta asperiores enim libero, distinctio totam alias provident repudiandae.</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;