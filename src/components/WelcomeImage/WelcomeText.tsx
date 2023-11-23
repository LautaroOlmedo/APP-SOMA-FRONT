import React from 'react'
import { IUser } from '../../interfaces/user.interface'
import style from './welcomeText.module.css'

export const WelcomeText = () => {
    const userData = localStorage?.getItem('user')
    const parsedUser = userData ? JSON.parse(userData) as IUser : undefined
    return (
        <div className={style.welcomeTextContainer}>
            <div className={style.headerContainer}>
                <span className={style.title}>¡Bienvenido, {parsedUser?.firstname}!</span>
                <span className={style.text}>Te espera tu viaje emprendedor</span>
            </div>
            <span className={style.question}>¿Tenés una consulta hoy?</span>
        </div>
    )
}
