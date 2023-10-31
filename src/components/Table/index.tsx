import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import React, { useState } from 'react'
import styles from './index.module.css'

type Props<T> = {
  data: T[],
  columns: {
    header: string,
    accessorKey: keyof T
  }[]
}
  
export const Table = <T,>({ data, columns }: Props<T>) => {
    const [sorting, setSorting] = useState([] as any)
    const [filtering, setFiltering] = useState('')
  
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    })
  
    return (
        <div className={styles.tableContainer}>
            <div className='w3-container'>
                <input
                    type='text'
                    value={filtering}
                    onChange={e => setFiltering(e.target.value)}
                />
                <table className='w3-table-all'>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
  
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={() => table.setPageIndex(0)}>First page</button>
                    <button
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                    >
            Previous page
                    </button>
                    <button
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                    >
            Next page
                    </button>
                    <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            Last page
                    </button>
                </div>
            </div>
        </div>
    )
}
