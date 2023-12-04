import React from 'react'
import { useLocation } from 'react-router-dom';
import style from './routeHeading.module.css'

export const RouteHeading = () => {
    const location = useLocation()
    return (
        <span className={style.title}>PAGINA <span style={{color: 'black'}}>{location.pathname?.replaceAll(`/`, ' / ')}</span></span>
    )
}
