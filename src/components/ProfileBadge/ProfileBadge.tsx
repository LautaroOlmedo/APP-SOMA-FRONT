import React from 'react'
import { BiSolidUser, BiSolidBell } from 'react-icons/bi'
import { BsFillGearFill } from 'react-icons/bs'
import style from './profileBadge.module.css'
import { IUser } from '../../interfaces/user.interface'




interface ProfileBadgeProps {
    user: IUser | null;
}


export const ProfileBadge: React.FC<ProfileBadgeProps> = ({ user }) => {
    if (!user) {
        return null;
    }

    const { firstname, lastname, role } = user;
    return (
        <div className={style.container}>
            <BiSolidUser size={20} />
            <span>
                {firstname} {lastname} - {role}
            </span>
            <BiSolidBell size={20} />
            <BsFillGearFill size={18} />
        </div>
    )
}
