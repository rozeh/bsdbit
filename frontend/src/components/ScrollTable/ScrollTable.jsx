import React from 'react'
import styled from 'styled-components'
import {
  useAsyncDebounce,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table'

const ScrollTableBlock = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;

      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
function ScrollTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data
      },
      useSortBy
    )


    const firstPageRows = rows.slice(0, 20)
  return (
    <ScrollTableBlock>
      <table {...getTableBodyProps()}>
        <thead>
          {headerGroups.map( hg => (
            <tr { ...hg.getHeaderGroupProps()}>
              {hg.headers.map(col => (
                <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                  {col.render('Header')}
                  <span>
                    {col.isSorted
                      ? col.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''
                    }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);

              return(
                <tr {...row.getRowProps()}>
                  { row.cells.map( cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  )}
                </tr>
              )

            }
          )}
        </tbody>
      </table>
    </ScrollTableBlock>)
}

export default ScrollTable
