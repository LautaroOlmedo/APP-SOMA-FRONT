import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarTest } from '../components/Sidebar/Sidebar';
import styles from '../styles/routerLayout.module.css'

export const RouterLayout = () => {
    const [closeSidebar, setCloseSidebar] = useState(false)

    return (
        <>
            <div className={`${styles.rootLayout}`}>
                <SidebarTest closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}/>
                <div className={`${closeSidebar ? styles.largeRoot : styles.smallRoot}`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
