import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination, Row } from "react-table";
import { BsEye } from "react-icons/bs";
import styles from "./Analysts.module.css";
import FormButton from "../theme/button/FormButton";
import TableSearch from "../theme/table/tableSearchInput/TableSearchInput";
import TableSearchButton from "../theme/table/tableSearchButton/TableSearchButton";
import { Link } from "react-router-dom";
import PaginationButton from "../theme/PaginationButton/PaginationButton";

interface ColumnDetails {
  [key: string]: any;
}

const Analyst = () => {
  const [inputValue, setInputValue] = useState("");
  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        name: "Pranav vikram",
        EmployeeId: "AH2021",
        emailAddress: "pranavvikram2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Pradeep",
        EmployeeId: "PRR021",
        emailAddress: "Pradeep@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Sathisk k Kumar",
        EmployeeId: "A256021",
        emailAddress: "sathiskkkumar@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Selvam",
        EmployeeId: "HAH21",
        emailAddress: "Selvam2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Prakash",
        EmployeeId: "AH20gh21",
        emailAddress: "Prakash2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Kumar",
        EmployeeId: "A2568021",
        emailAddress: "kumar@gmail.com",
        mobile: "+91 0214254",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Selvam Rahaman",
        EmployeeId: "HAH621",
        emailAddress: "selvamrahaman2021@gmail.com",
        mobile: "+91 024142574",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Prakash Nandi",
        EmployeeId: "AH20gh281",
        emailAddress: "Prakashnandi2021@gmail.com",
        mobile: "+91 024142754",
        action: (
          <Link to="/analyst/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Employee ID",
        accessor: "EmployeeId",
      },
      {
        Header: "Email address",
        accessor: "emailAddress",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //@ts-ignore
    page,
    prepareRow,
    //@ts-ignore
    setGlobalFilter,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    setPageSize,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  return (
    <div className="py-6 px-10 w-full flex flex-col">
      <p className="text-base text-fontColor-gray ">
        Find details about analyst and can update details
      </p>
      <div className="flex items-center justify-between  flex-wrap">
        <div className="flex items-center flex-wrap">
          <div className="mr-4 mt-6">
            <TableSearch
              value={inputValue}
              handleChange={(val) => setInputValue(val)}
              placeholder="Search for hospital name"
            />
          </div>
          <div className="mt-6 ">
            <TableSearchButton
              handleClick={() => setGlobalFilter(inputValue)}
            />
          </div>
        </div>
        <Link to="/analyst/create" className="mt-6 ">
          <FormButton text="Add Analyst" iconPlus={true} />
        </Link>
      </div>

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
          {page.map((row: Row<ColumnDetails>) => {
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
      <div className="flex items-center justify-between pt-7">
        <p className="text-sm text-fontColor text-semibold">
          Results:{" "}
          <span className="text-sm text-fontColor pl-1">{page?.length}</span>{" "}
        </p>
        <div className="flex">
          <div className="pr-2">
            <PaginationButton
              leftIcon={true}
              handleClick={() => previousPage()}
              disability={!canPreviousPage}
            />
          </div>
          <PaginationButton
            rightIcon={true}
            handleClick={() => nextPage()}
            disability={!canNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Analyst;
