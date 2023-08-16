import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { useAuthVerification } from "../api/auth/useAuthVerification";

const PrivateRoute = ({ element: RouteComponent } : { element: React.LazyExoticComponent<() => ReactElement>}) => {
    const verification = useAuthVerification()
  
    if(verification?.error) {
        alert("TOKEN NO VALIDO")
        return <Navigate to={"/login"}/>
    }

    return  <RouteComponent />;
};

export default PrivateRoute;
