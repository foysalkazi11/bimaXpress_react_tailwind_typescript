import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { BsEye } from "react-icons/bs";
import FormButton from "../theme/button/FormButton";
import TableSearch from "../theme/table/tableSearchInput/TableSearchInput";
import TableSearchButton from "../theme/table/tableSearchButton/TableSearchButton";
import { Link } from "react-router-dom";
import ReactTable from "../theme/reactTable/ReactTable";

interface ColumnDetails {
  [key: string]: any;
}

const Doctor = () => {
  const [inputValue, setInputValue] = useState("");
  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        name: "Pranav vikram",
        speciality: "Anesthesiologists",
        registeredNumber: "AH2021",
        emailAddress: "pranavvikram2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Pradeep",
        speciality: "Corneal Transplant",
        registeredNumber: "PRR021",
        emailAddress: "Pradeep@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Sathisk k Kumar",
        speciality: "General Surgery",
        registeredNumber: "A256021",
        emailAddress: "sathiskkkumar@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Selvam",
        speciality: "Hepatic Surgery",
        registeredNumber: "HAH21",
        emailAddress: "Selvam2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Prakash",
        speciality: "Cordiology",
        registeredNumber: "AH20gh21",
        emailAddress: "Prakash2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "S Kumar",
        speciality: "General Surgery",
        registeredNumber: "A2569021",
        emailAddress: "skkkumar@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Khan Selvam",
        speciality: "Hepatic Surgery",
        registeredNumber: "HAH21",
        emailAddress: "Khan2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
            <BsEye className="text-lg" />
          </Link>
        ),
      },
      {
        name: "Prakash Nandi",
        speciality: "Cordiology",
        registeredNumber: "AH240gh21",
        emailAddress: "Prakashnandi2021@gmail.com",
        mobile: "+91 02414254",
        action: (
          <Link to="/doctor/update">
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
        Header: "Speciality",
        accessor: "speciality",
      },
      {
        Header: "Registered number",
        accessor: "registeredNumber",
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
        Find details about doctor and can update details
      </p>
      <div className="flex items-center justify-between  flex-wrap">
        <div className="flex items-center flex-wrap">
          <div className="mr-4 mt-6">
            <TableSearch
              value={inputValue}
              handleChange={(val) => setInputValue(val)}
              placeholder="Search for doctor name"
            />
          </div>
          <div className="mt-6 ">
            <TableSearchButton
              handleClick={() => setGlobalFilter(inputValue)}
            />
          </div>
        </div>
        <Link to="/doctor/create" className="mt-6 ">
          <FormButton text="Add Doctor" iconPlus={true} />
        </Link>
      </div>
      <ReactTable
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        page={page}
        prepareRow={prepareRow}
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
      />
    </div>
  );
};

export default Doctor;
