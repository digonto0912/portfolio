import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="Page404">
            <h1>
                404
            </h1>
            <button>
                <Link to="/">
                    Go Home
                </Link>
            </button>
        </div>
    );
};

export default Page404;