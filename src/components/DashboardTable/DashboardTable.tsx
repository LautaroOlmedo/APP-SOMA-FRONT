import moment from 'moment'
import React, { useState } from 'react'
import style from './dashboardTable.module.css'
import { BsArrowUpCircle, BsArrowDownCircle, BsExclamationCircle, BsInfoCircleFill } from 'react-icons/bs'
import { CiCalendar, CiSearch } from 'react-icons/ci'

interface ITransaction{
    id: number,
    date: Date,
    from: string,
    to: string,
    amount: number,
    status: 'pending' | 'done' | 'partial'
}

interface IProps{
    transactions: ITransaction[]
}

export const DashboardTable = ({ transactions }: IProps ) => {
    const [hoveredItem, setHoveredItem] = useState<string>()
    const [expandSearcher, setExpandSearcher] = useState<boolean>(false)
    const [filteredOptions, setFilteredOptions] = useState<ITransaction[]>([])

    const iconStatus = {
        pending: <BsExclamationCircle color='#3B3B3B' size={24} />,
        done: <BsArrowUpCircle color='#8fffe5' size={24} />,
        partial: <BsArrowDownCircle color='#f54d4b' size={24} />
    }

    const handleFilter = (value: string) =>{
        const filterTransactions = transactions.filter(t => t.to.toLowerCase().includes(value.toLowerCase()) || t.from.toLowerCase().includes(value.toLowerCase()))
        setFilteredOptions(filterTransactions)
    }

    const optionsToMap = filteredOptions.length ? filteredOptions : transactions

    return (
        <div className={style.containerTable}>
            <div className={style.header}>
                <span className={style.titleHeader}>Transacciones Recientes</span>
                <div className={style.searcherContainer}>
                    {expandSearcher && <input onChange={({target}) => handleFilter(target.value)} placeholder='Buscar' type='text' className={style.seatcherInput}/>}
                    <div role='button' tabIndex={0} aria-hidden className={style.iconContainer} onClick={() => {
                        expandSearcher && setFilteredOptions([])
                        setExpandSearcher(!expandSearcher)}
                    }>
                        <CiSearch size={12} color='#231815' />
                    </div>
                    <div className={style.filterContainer}>
                        <CiCalendar size={12} color='#231815'/>
                        <span>Ultimos 7 dias</span>
                    </div>
                </div>
            </div>
            <div className={style.bodyTable}>
                {optionsToMap.map(transaction => <div onMouseEnter={() => setHoveredItem(String(transaction.id))} onMouseLeave={() => setHoveredItem('')} aria-hidden role='button' tabIndex={0} key={transaction.id} className={`${style.transactionContainer}`}>
                    <div className={style.firstSection}>
                        <div className={`${style.iconTransaction} ${style[transaction.status]}`}>
                            {iconStatus[transaction.status]}
                        </div>
                        <div className={style.transactionPrincipal}>
                            <span className={style.titleTransaction}>Venta</span>
                            <span className={style.dateTransaction}>{moment(transaction.date).format('DD MMM YYYY, hh:mm A')}</span>
                        </div>
                    </div>
                    <div className={style.secondSection}>
                        <div className={style.moreInfo}>
                            <div className={style.iconInfo}>

                            </div>
                            {hoveredItem === String(transaction.id) && 
                                <div className={style.moreInfoText}>
                                    <BsInfoCircleFill size={12} color='#0A1A29'/>
                                    <span>Mas informacion</span>
                                </div>
                            }
                        </div>
                        <span className={style.from}>{transaction.from}</span>
                        <span className={style.to}>{transaction.to}</span>
                        <span className={style.amount}>{transaction.status === 'partial' ? '-' : '+'} ${transaction.amount}</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
