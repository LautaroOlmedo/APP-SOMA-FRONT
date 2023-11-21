/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { SetStateAction, Dispatch} from 'react';
import { CiCalendar } from 'react-icons/ci'
import { GoChevronRight } from 'react-icons/go'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import style from './index.module.css';
import { useUserData } from '../../api/user/useGetUserById';

export const SidebarTest = ({closeSidebar, setCloseSidebar}: {closeSidebar: boolean, setCloseSidebar: Dispatch<SetStateAction<boolean>>}) =>{
    const userData = useUserData()

    console.log('userData', userData.data)


    return (
        <div className={style.sidebarContainer}>
            <button className={`${style.collapseButton} ${closeSidebar ? style.moveLeft : style.moveRight}`} onClick={() => setCloseSidebar(!closeSidebar)}>
                <GoChevronRight color='white' />
            </button>
            <Sidebar collapsed={closeSidebar} color='#ffffff' backgroundColor='#0B1B29'>
                <Menu menuItemStyles={{
                    button: ({level }) =>{
                        if(level === 0) return {
                            backgroundColor: '#0B1B29',
                            ':hover': {
                                borderLeft: '3px solid #A9D4F6',
                                backgroundColor: '#06121d',
                            },
                            ':focus':{
                                borderLeft: '3px solid #A9D4F6',
                            }
                        }
                        return {
                            backgroundColor: '#06121d',
                            ':hover': {
                                borderLeft: '3px solid #A9D4F6',
                                backgroundColor: '#06121d',
                            },
                            ':focus':{
                                borderLeft: '3px solid #A9D4F6',
                            }
                        }
                    }
                }}>
                    <MenuItem icon={<div className={style.imgContainer}>
                        {userData.data?.brand?.image && <img className={style.img} src={userData.data.brand.image} alt='logo marca'/>}
                    </div>} className={style.menuItem} itemType='s'>{userData.data?.brand?.brandName}</MenuItem>
                
                    <SubMenu label="TIENDAS" icon={<CiCalendar/>}>
                        <MenuItem icon={<CiCalendar/>} className={style.menuItem}>Godoy Cruz</MenuItem>
                        <MenuItem icon={<CiCalendar/>} className={style.menuItem}>Ciudad</MenuItem>
                    </SubMenu>
                    {!closeSidebar && <MenuItem className={style.menuItem} itemType='s'><b>GENERAL</b></MenuItem>}
                    <MenuItem icon={<CiCalendar/>} className={style.menuItem}>Finanzas</MenuItem>
                    <MenuItem icon={<CiCalendar/>} className={style.menuItem}>Productos</MenuItem>
                    <MenuItem icon={<CiCalendar/>} className={style.menuItem}>Billeteras</MenuItem>
                </Menu>
            </Sidebar>
            <div className={`${style.sidebarFooter} ${closeSidebar && style.sidebarFooterClosed}`}>
                {!closeSidebar && <>
                    <span>Take Advanced</span>
                    <span>Our courses will help you boots your career propects</span>
                    <button className={style.buttonFooter}>SHOP NOW</button>
                </>
                }
            </div>
        </div>
    )}