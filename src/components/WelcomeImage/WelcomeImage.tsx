import React from 'react'
import welcomeImage from '../../assets/background.png'
import nara from '../../assets/nara.png'
import style from './welcomeImage.module.css'
import { WelcomeText } from './WelcomeText'

export const WelcomeImage = () => {
    return (
        <div className={style.imgContainer}>
            <div className={style.backgrounContainer}>
                <img className={style.imgBackground} src={welcomeImage} alt='fondo'/>
                <WelcomeText />
                <div className={style.nara}>
                    <img className={style.naraImg} src={nara} alt='caricatura'/>
                </div>    
            </div>
        </div>
    )
}
