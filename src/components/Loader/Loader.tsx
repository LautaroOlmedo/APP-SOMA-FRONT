import React from 'react'
import style from './loader.module.css'

export const Loader = ({ text } : { text?: string }) => {
    return (
        <div className={style.loaderContainer}>
            <span className={style.loader}></span>
            {text && <span className={style.text}>{text}</span>}
        </div>
    )
}
   