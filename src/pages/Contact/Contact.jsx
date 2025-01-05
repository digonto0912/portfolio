import "./Contact.css";
import LinkedIn from "../../../public/images/contact/linkedIn.png";
import Whatsapp from "../../../public/images/contact/whatsapp.png";
import Gmail from "../../../public/images/contact/gmail.jpg";

const Contact = () => {
    return (
        <div className="Contact">
            <a href="https://www.linkedin.com/in/fardul-islam-7a46021a7/" target="_blank">
                <img src={LinkedIn} />
            </a>

            <a href="https://wa.me/8801842320461" target="_blank" rel="noopener noreferrer">
                <img src={Whatsapp} alt="Contact via WhatsApp" />
            </a>

            <a href="mailto:fardulislamdigonto799@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={Gmail} alt="Contact via Email" />
            </a>
        </div>
    );
};

export default Contact;