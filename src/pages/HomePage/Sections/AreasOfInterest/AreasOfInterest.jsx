import "./AreasOfInterest.css";
import cc from "../../../../../public/images/cc.png";
import nlp from "../../../../../public/images/nlp.png";
import ml from "../../../../../public/images/ml.png";
import wd from "../../../../../public/images/wd.png";
import md from "../../../../../public/images/md.png";
import da from "../../../../../public/images/da.png";

const AreasOfInterest = () => {
    return (
        <div className="AreasOfInterest">
            <div>
                <div className="AOIHeadLine">
                    <h1>Areas of Interest</h1>
                    <h5>Take a look at some of the things I love working on</h5>
                </div>
                <div className="AOICarts">
                    <div>
                        <img src={wd} className="h60" />
                        <div className="AOICarts_headline">Web Development</div>
                        <div>I build responsive and efficient web applications using the MERN stack, focusing on both functionality and user experience</div>
                    </div>
                    <div>
                        <img src={cc} className="h60" />
                        <div className="AOICarts_headline">Cloud Compute</div>
                        <div>I maintain servers for database storage, model training, and model deployment.</div>
                    </div>
                    <div>
                        <img src={nlp} className="h60" />
                        <div className="AOICarts_headline">NLP</div>
                        <div>I have worked with researchers to apply NLP techniques to make sense of the motivations behind human interactions.</div>
                    </div>
                    <div>
                        <img src={ml} className="h60" />
                        <div className="AOICarts_headline">Machine Learning</div>
                        <div>Machine learning is more than an API call to scikit-learn. I love the math and theory as well as the implementation.</div>
                    </div>
                    <div>
                        <img src={md} className="h60" />
                        <div className="AOICarts_headline">Model Deployment</div>
                        <div>I implement machine learning models in real world production systems using REST APIS.</div>
                    </div>
                    <div>
                        <img src={da} className="h60" />
                        <div className="AOICarts_headline">Data Analytics</div>
                        <div>I love telling a story. Making a beautiful and compelling presentation is one of my favorite skills.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreasOfInterest;