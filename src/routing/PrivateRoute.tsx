import React, { ReactElement, Suspense, useState } from 'react';
import { Loader } from '../components/Loader/Loader';
// import { Navigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
// import { useAuthVerification } from '../api/auth/useAuthVerification';
import { SidebarTest } from '../components/Sidebar/Sidebar';
import styles from '../styles/routerLayout.module.css'

const PrivateRoute = ({ element: RouteComponent } : { element: React.LazyExoticComponent<() => ReactElement>}) => {
    const [closeSidebar, setCloseSidebar] = useState(false)
    // const verification = useAuthVerification()
  
    // if(verification?.error) {
    //     alert('TOKEN NO VALIDO')
    //     return <Navigate to={'/login'}/>
    // }

    return  <Suspense fallback={<Loader text='Cargando ruta...' />}>
        <div className={`${styles.rootLayout}`}>
            <SidebarTest closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}/>
            <div className={`${closeSidebar ? styles.largeRoot : styles.smallRoot}`}>
                <RouteComponent />
            </div>
        </div>
    </Suspense>
};

export default PrivateRoute;
