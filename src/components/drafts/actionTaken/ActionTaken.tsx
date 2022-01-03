import React from "react";
import FormButton from "../../theme/button/FormButton";
import { VscFilePdf } from "react-icons/vsc";
import { Row, useTable } from "react-table";
import styles from "./ActionTaken.module.css";

interface ColumnDetails {
  [key: string]: any;
}

const ActionTaken = () => {
  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        actionTaken: "Form creation",
        last_action_date: "28 Nov 2021",
        summery: "PreAuth creation",
        amount: 2000,
        documents: (
          <div className="flex">
            <VscFilePdf className="mr-2 text-2xl" /> documents
          </div>
        ),
      },
      {
        actionTaken: "Form creation",
        last_action_date: "28 Nov 2021",
        summery: "PreAuth creation",
        amount: 2000,
        documents: (
          <div className="flex">
            <VscFilePdf className="mr-2 text-2xl" /> documents
          </div>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Action Taken",
        accessor: "actionTaken", // accessor is the "key" in the data
      },
      {
        Header: "Last Action Date",
        accessor: "last_action_date",
      },
      {
        Header: "Summery",
        accessor: "summery",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Documents",
        accessor: "documents",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="mt-6">
      <div className="flex justify-end">
        <FormButton text="Add Action" iconPlus={true} />
      </div>

      <div>
        <table {...getTableProps()} className="w-full mt-8 overflow-x-scroll">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className={`bg-secondary py-3 px-4 text-sm font-semibold text-fontColor text-left ${styles.tableHeader}`}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: Row<ColumnDetails>) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 pt-5 pb-12 border-b border-fontColor-darkGray text-sm text-fontColor font-thin last:border-b-0"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActionTaken;
