import React from 'react'
import style from './dayCard.module.css'
import { getDaysOfWeek } from './utils/daysOfWeekUtils'



export const DayCard = () => {
    
    return (
        <>
            {getDaysOfWeek().map(day => <div key={day.number} className={style.cardDay}>
                <span className={`${style.yellow} ${style.days} ${day.today && style.selected}`}>{day.day}</span>
                <span>{day.number}</span>
                {day.today && <div className={style.point}></div>}
            </div>)}
        </>
    )
}
