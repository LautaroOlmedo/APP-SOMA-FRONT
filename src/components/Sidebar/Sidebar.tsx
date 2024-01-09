/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { SetStateAction, Dispatch, useState,useEffect } from 'react';
import { CiCalendar } from 'react-icons/ci'
import { GoChevronRight } from 'react-icons/go'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import style from './index.module.css';
import { useGetUserById } from '../../api/user/useGetUserById';
import { useNavigate } from 'react-router-dom';
import { useGetBrandById } from '../../api/brand/getBrandById';
import { useGetStoreId } from '../../api/store/getStoreId';
import { StoreType } from '../../interfaces/store.interface';

export const SidebarTest = ({ closeSidebar, setCloseSidebar }: { closeSidebar: boolean, setCloseSidebar: Dispatch<SetStateAction<boolean>> }) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : null;
    const brandId = userData ? userData.brandId : null;
    const brandName = userData ? userData.brandName : null;
    const brandImage = userData ? userData.brandImage : null;
    const userId = userData ? userData.id : null;
    const getUserById = useGetUserById(userId);
    const [storeInfo, setStoreInfo] = useState<StoreType | null>(null);   
    const [selectedStoreId, setSelectedStoreId] = useState('');

    const handleStoreClick = async (storeId: string) => {
        setSelectedStoreId(storeId);
    };
    
  
    const { data: storeData, isLoading, isError } = useGetStoreId(selectedStoreId);
  
    useEffect(() => {
        if (storeData && storeData.data && selectedStoreId) {
          setStoreInfo(storeData.data);
          console.log(storeData.data)
        }
      }, [selectedStoreId, storeData]);

    const handleProductosClick = () => {
        navigate('/admin/panel/products/productManagement');
    };
    const handleHistorialVentasClick = () => {
        navigate('/admin/panel/ventas/historialVentas')
    }
    const handlePuntoDeVentasClick = () => {
        navigate('/admin/panel/ventas/puntoVentas')
    }
    const handleClientesClick = () => {
        navigate('/admin/panel/clients');
    };
    const handleTeamsClick = () => {
        navigate('/admin/panel/teams');
    };
    const handleWalletClick = () => {
        navigate('/admin/panel/wallet/walletManagement');
    };
    const handleMovFinancieroClick = () => {
        navigate('/admin/panel/finanzas/movimientosFinancieros')
    }

    return (
        <div className={style.sidebarContainer}>
            <button className={`${style.collapseButton} ${closeSidebar ? style.moveLeft : style.moveRight}`} onClick={() => setCloseSidebar(!closeSidebar)}>
                <GoChevronRight color='white' />
            </button>
            <Sidebar collapsed={closeSidebar} color='#ffffff' backgroundColor='#0B1B29'>
                <Menu menuItemStyles={{
                    button: ({ level }) => {
                        if (level === 0) return {
                            backgroundColor: '#0B1B29',
                            ':hover': {
                                borderLeft: '3px solid #A9D4F6',
                                backgroundColor: '#06121d',
                            },
                            ':focus': {
                                borderLeft: '3px solid #A9D4F6',
                            }
                        }
                        return {
                            backgroundColor: '#06121d',
                            ':hover': {
                                borderLeft: '3px solid #A9D4F6',
                                backgroundColor: '#06121d',
                            },
                            ':focus': {
                                borderLeft: '3px solid #A9D4F6',
                            }
                        }
                    }
                }}>
                    <MenuItem icon={<div className={style.imgContainer}>
                        {brandImage && <img className={style.img} src={brandImage} alt='logo marca' />}
                    </div>} className={style.menuItem} itemType='s'>{brandName}</MenuItem>

                    <SubMenu label="TIENDAS" icon={<CiCalendar />}>
                        {getUserById.data ? getUserById.data.storesIncludes?.map((storeid) => (
                            <MenuItem
                                key={storeid.id}
                                icon={<CiCalendar />}
                                className={style.menuItem}
                                onClick={() => handleStoreClick(storeid.store.id)}
                            >
                                {storeid.store.storeName}
                            </MenuItem>
                        )) : <></>}
                    </SubMenu>
                    {!closeSidebar && <MenuItem className={style.menuItem} itemType='s'><b>GENERAL</b></MenuItem>}
                    <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleTeamsClick}>Equipo</MenuItem>
                    <SubMenu label="Productos" icon={<CiCalendar />}>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleProductosClick}>Stock</MenuItem>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem}>Compras</MenuItem>
                    </SubMenu>
                    <SubMenu label="Ventas" icon={<CiCalendar />}>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handlePuntoDeVentasClick}>Puntos de ventas</MenuItem>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleHistorialVentasClick}>Historial de ventas</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleClientesClick}>Clientes</MenuItem>
                    <SubMenu label="Finanzas" icon={<CiCalendar />}>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleMovFinancieroClick}>Historial de movimientos</MenuItem>
                        <MenuItem icon={<CiCalendar />} className={style.menuItem} onClick={handleWalletClick}>Billeteras</MenuItem>

                    </SubMenu>
                    <MenuItem icon={<CiCalendar />} className={style.menuItem} >Configuraciones</MenuItem>

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
    )
}