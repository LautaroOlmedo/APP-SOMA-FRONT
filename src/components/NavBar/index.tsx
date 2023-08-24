import React from "react";
import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
    return (
        <div>
            <div>SOMA APP</div>
            <button>LOGIN</button>
            <Link to={"/login"}>
                <button type="button">LOGIN</button>
            </Link>
        </div>
    );
};
