import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navNameSide">Fardul Islam</div>
            <div className="navPagesSide">
                <div><a href="/">HOME</a></div>
                <div><a href="/about">ABOUT</a></div>
                <div><a href="/projects">PROJECTS</a></div>
                <div><a href="/blog">BLOG</a></div>
                <div><a href="/contact-info">CONTACT INFO</a></div>
                <div className="resumeBtn"><a href="/resume">MY RESUME</a></div>
            </div>
        </div>
    );
};

export default NavBar;