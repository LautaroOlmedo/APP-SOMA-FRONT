import React from 'react';
import style from './index.module.css'
import { CalendarCard } from '../../components/CalendarCard/CalendarCard';
import { Chart } from '../../components/Chart';
import { DashboardTable } from '../../components/DashboardTable/DashboardTable';
import { ProfileBadge } from '../../components/ProfileBadge/ProfileBadge';
import { RapidAccessCard } from '../../components/RapidAccessCard/RapidAccessCard';
import { RouteHeading } from '../../components/RouteHeading/RouteHeading';
// import { Table } from '../../components/Table';

export const HomePage = () => {
    // const data = [
    //     {
    //         id: '1',
    //         email: 'aslalsd@mail.com',
    //         name: 'bruno',
    //         tel: '21312'
    //     },
    //     {
    //         id: '2',
    //         email: 'aslalsd@mail.com',
    //         name: 'bruno',
    //         tel: '213152'
    //     },
    //     {
    //         id: '3',
    //         email: 'aslalsd@mail.com',
    //         name: 'bruno',
    //         tel: '2131952'
    //     }
    // ]
    // const columns = [
    //     {
    //         header: 'ID',
    //         accessorKey: 'id' as const,
    //     },
    //     {
    //         header: 'Email',
    //         accessorKey: 'email' as const,
    //     },
    //     {
    //         header: 'Name',
    //         accessorKey: 'name' as const,
    //     },
    //     {
    //         header: 'Telefono',
    //         accessorKey: 'tel' as const
    //     }
    // ]
    const dataChart = [
        {
            date: 0,
            value: 15
        },    
        {
            date: 1,
            value: 3
        },
        {
            date: 2,
            value: 15
        },    
        {
            date: 3,
            value: 31
        },
        {
            date: 4,
            value: 15
        },    
        {
            date: 5,
            value: 10
        },{
            date: 6,
            value: 34
        },    
        {
            date: 7,
            value: 10
        },{
            date: 8,
            value: 15
        },    
        {
            date: 9,
            value: 42
        },{
            date: 10,
            value: 15
        },    
        {
            date: 11,
            value: 10
        }
    ]

    const rapidAccesCard = [
        {
            title: 'Ventas',
            color: '#E9C121',
            value: '$312.312',
            percentage: '+55%'
        },
        {
            title: 'Productos',
            color: '#789FBE',
            value: '230',
            percentage: '-55%'
        },
        {
            title: 'Movimientos',
            color: '#D18E9E',
            value: '3200',
            percentage: '-55%'
        },
        {
            title: 'Clientes',
            color: '#124069',
            value: '100',
            percentage: '+55%'
        }
    ]
    const transaction = [
        {
            'id': 1,
            'date': new Date('2023-07-18'),
            'from': 'Babbleset',
            'to': 'Gardie Waycot',
            'amount': 1375,
            'status': 'partial'
        },
        {
            'id': 2,
            'date': new Date('2022-12-16'),
            'from': 'Skippad',
            'to': 'Tammy Hulme',
            'amount': 7266,
            'status': 'pending'
        },
        {
            'id': 3,
            'date': new Date('2022-12-10'),
            'from': 'Eadel',
            'to': 'Chloris Briscam',
            'amount': 9362,
            'status': 'partial'
        },
        {
            'id': 4,
            'date': new Date('2022-11-28'),
            'from': 'Meejo',
            'to': 'Hilarius Cammack',
            'amount': 1614,
            'status': 'partial'
        },
        {
            'id': 5,
            'date': new Date('2022-11-02'),
            'from': 'InnoZ',
            'to': 'Jeannine Conachy',
            'amount': 654,
            'status': 'pending'
        },
        {
            'id': 6,
            'date': new Date('2023-01-29'),
            'from': 'Jabberstorm',
            'to': 'Meryl Napoleone',
            'amount': 2304,
            'status': 'partial'
        },
        {
            'id': 7,
            'date': new Date('2023-03-28'),
            'from': 'Voonder',
            'to': 'Kingsly Gayther',
            'amount': 2829,
            'status': 'pending'
        },
        {
            'id': 8,
            'date': new Date('2023-10-12'),
            'from': 'Vipe',
            'to': 'Kaleena Martinetto',
            'amount': 5843,
            'status': 'partial'
        },
        {
            'id': 9,
            'date': new Date('2022-11-08'),
            'from': 'Mudo',
            'to': 'Elinor Daveridge',
            'amount': 1446,
            'status': 'done'
        },
        {
            'id': 10,
            'date': new Date('2022-12-24'),
            'from': 'Zoomzone',
            'to': 'Dewain Ianinotti',
            'amount': 4837,
            'status': 'pending'
        },
        {
            'id': 11,
            'date': new Date('2023-10-20'),
            'from': 'Zoomcast',
            'to': 'Mort Stillwell',
            'amount': 7556,
            'status': 'done'
        },
        {
            'id': 12,
            'date': new Date('2023-10-13'),
            'from': 'Voolith',
            'to': 'Guillemette Braam',
            'amount': 5610,
            'status': 'partial'
        },
        {
            'id': 13,
            'date': new Date('2023-07-04'),
            'from': 'Talane',
            'to': 'Edgard Ramme',
            'amount': 6374,
            'status': 'done'
        },
    ]

    return (
        <div className={style.container}>
            {/* <Table<{id:string, email:string, name:string, tel:string}> data={data} columns={columns} /> */}
            <RouteHeading />
            <ProfileBadge />
            <CalendarCard />
            <div className={style.accessContainer}>
                {rapidAccesCard.map(dataAccessCard => <RapidAccessCard key={dataAccessCard.title} {...dataAccessCard}/>)}
            </div>
            <Chart data={dataChart}/>
            <DashboardTable transactions={transaction}/>
        </div>
    )
}


