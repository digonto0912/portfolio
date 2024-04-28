import "./Contact.css";
import LinkedIn from "../../../public/images/linkedIn.png";
import Facebook from "../../../public/images/facebook.svg";
import Gmail from "../../../public/images/gmail.jpg";

const Contact = () => {
    return (
        <div className="Contact">
            <div><img src={LinkedIn} /></div>
            <div><img src={Facebook} /></div>
            <div><img src={Gmail} /></div>
        </div>
    );
};

export default Contact;