import React from 'react'
import style from './calendarCard.module.css'
import { DayCard } from './DayCard'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const CalendarCard = () => {
    const date = format(new Date(), 'MMMM d, y', { locale: es})
    return (
        <div className={style.cardContainer}>
            <div className={style.cardHeader}>
                <span className={style.cardTitle}>{date}</span>
                <span className={style.cardGoogle}>{'Ir a Google calendar >'}</span>
            </div>
            <span className={style.currentDay}></span>
            <div className={style.weekContainer}>
                <DayCard />
            </div>
        </div>
    )
}
