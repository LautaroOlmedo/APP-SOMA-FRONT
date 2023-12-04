import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import style from './rapidAccessCard.module.css'

interface IProps{
    title: string,
    color: string,
    value: string,
    percentage: string
}


export const RapidAccessCard = ({ title, color, value, percentage }: IProps) => {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardHeader}>
                <span className={style.cardTitle} style={{color}}>{title}</span>
                <div className={style.cardIconContainer}>
                    <CiCirclePlus color={color} size={36}/>
                </div>
            </div>
            <span className={style.cardValue}>{value}</span>
            <span className={`${percentage[0] === '-' ? style.red : style.green}`}>{`${percentage}`}<span className={style.cardYesterday}> que ayer</span></span>
        </div>
    )
}
