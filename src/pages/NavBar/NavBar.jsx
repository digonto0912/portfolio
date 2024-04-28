import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navNameSide">Fardul Islam</div>
            <div className="navPagesSide">
                <div>HOME</div>
                <div>ABOUT</div>
                <div>PROJECTS</div>
                <div>BLOG</div>
                <div>CONTACT INFO</div>
                <div className="resumeBtn">MY RESUME</div>
            </div>
        </div>
    );
};

export default NavBar;