import { subDays } from 'date-fns';
import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
} from 'recharts';
import style from './index.module.css'
  
const data: {date: string, value: number}[] = [];
for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        value: 1 + Math.random(),
    });
}

interface IProps{
    data:{
        date: number,
        value: number
    }[]
}

function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString('es-AR', { month: 'long' });
}

export const Chart = ({data}: IProps) => {
    return (
        <div className={style.chartContainer}>
            <div className={style.badgeSection}>
                <span>Ventas</span><span className={style.badgeColorTitle}> Mensual</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4124b7" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#ffffff" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
          
                    <Area dataKey="value" stroke="#4124b7" fill="url(#color)" />
          
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(str) => {
                            if(str % 2 == 0){
                                return getMonthName(str).slice(0,3)
                            }
                            return ''
                        }}
                    />
          
                    <YAxis
                        dataKey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={5}
                        
                    />
          
                    <Tooltip content={(values) => <CustomTooltip {...values} />} />
          
                    <CartesianGrid color='black' opacity={0.5} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustomTooltip({ active, payload, label }: any) {
    if (active) {
        const monthName = getMonthName(label)
        const capitalizedMonthName = monthName[0].toUpperCase() + monthName.slice(1)
        return (
            <div className={style.tooltip}>
                <span className={style.tooltipTitle}>{capitalizedMonthName}</span>
                <span className={style.descriptionTooltip}>{payload[0].value} Ventas realizadas</span>
            </div>
        );
    }
    return null;
}