import React from 'react'
import { BiSolidUser, BiSolidBell } from 'react-icons/bi'
import { BsFillGearFill } from 'react-icons/bs'
import style from './profileBadge.module.css'

export const ProfileBadge = () => {    
    return (
        <div className={style.container}>
            <BiSolidUser size={20} />
            <span>
                Carla Rodriguez - Administracion
            </span>
            <BiSolidBell size={20} />
            <BsFillGearFill size={18} />
        </div>
    )
}
