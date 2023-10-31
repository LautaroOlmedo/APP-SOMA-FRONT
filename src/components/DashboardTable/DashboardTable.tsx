import React from 'react'
import style from './dashboardTable.module.css'

interface IProps{
    transactions: {
        id: number,
        date: Date,
        from: string,
        to: string,
        amount: number,
        status: string
    }[]
}

export const DashboardTable = ({ transactions }: IProps ) => {

    return (
        <div className={style.containerTable}>
            <div className={style.header}>
                <span className={style.titleHeader}>Transacciones Recientes</span>
                <div className={style.searcherContainer}>
                    <div className={style.iconContainer}>

                    </div>
                    <div className={style.filterContainer}>
                        Ultimos 7 dias
                    </div>
                </div>
            </div>
            <div className={style.bodyTable}>
                {transactions.map(transaction => <div key={transaction.id} className={style.transactionContainer}>
                    <div className={style.firstSection}>
                        <div className={`${style.iconTransaction} ${style[transaction.status]}`}>
                            OO
                        </div>
                        <div className={style.transactionPrincipal}>
                            <span className={style.titleTransaction}>Cobranza por venta</span>
                            <span className={style.dateTransaction}>{transaction.date.toString()}</span>
                        </div>
                    </div>
                    <div className={style.secondSection}>
                        <div className={style.moreInfo}>
                            <div className={style.iconInfo}>

                            </div>
                            <span className={style.moreInfoText}>Mas informacion</span>
                        </div>
                        <span className={style.from}>{transaction.from}</span>
                        <span className={style.to}>{transaction.to}</span>
                        <span className={style.amount}>{transaction.amount}</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
