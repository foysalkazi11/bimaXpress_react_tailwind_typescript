import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import FormButton from "../theme/button/FormButton";
import TableSearch from "../theme/table/tableSearchInput/TableSearchInput";
import TableSearchButton from "../theme/table/tableSearchButton/TableSearchButton";
import { Link } from "react-router-dom";
import ReactTable from "../theme/reactTable/ReactTable";
import BajajLogo from "../../assets/images/Bajaj-Logo.png";
import Eye from "../../assets/icon/eye.svg";

interface ColumnDetails {
  [key: string]: any;
}

const EmpanelledCompanies = () => {
  const [inputValue, setInputValue] = useState("");
  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        logo: (
          <img
            src={BajajLogo}
            alt="logo"
            className="w-24 h-10 object-contain"
          />
        ),
        name: "Bajaj_Allianz_General_Insuranc",
        expiryDate: "10 Dec 2021",
        discount: 10,
        exclusion: 10,
        action: (
          <Link to="/empanelledCompanies/update">
            <img src={Eye} alt="icon" />
          </Link>
        ),
      },
      {
        logo: (
          <img
            src={BajajLogo}
            alt="logo"
            className="w-24 h-10 object-contain"
          />
        ),
        name: "MDIndia_Health_Insurance_T",
        expiryDate: "10 Dec 2021",
        discount: 10,
        exclusion: 10,
        action: (
          <Link to="/empanelledCompanies/update">
            <img src={Eye} alt="icon" />
          </Link>
        ),
      },
      {
        logo: (
          <img
            src={BajajLogo}
            alt="logo"
            className="w-24 h-10 object-contain"
          />
        ),
        name: "Health_Insurance_TPA_of_Ind",
        expiryDate: "10 Dec 2021",
        discount: 10,
        exclusion: 10,
        action: (
          <Link to="/empanelledCompanies/update">
            <img src={Eye} alt="icon" />
          </Link>
        ),
      },
      {
        logo: (
          <img
            src={BajajLogo}
            alt="logo"
            className="w-24 h-10 object-contain"
          />
        ),
        name: "Cholamandalam_MS_Genera",
        expiryDate: "10 Dec 2021",
        discount: 10,
        exclusion: 10,
        action: (
          <Link to="/empanelledCompanies/update">
            <img src={Eye} alt="icon" />
          </Link>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Logo",
        accessor: "logo", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Expiry date",
        accessor: "expiryDate",
      },
      {
        Header: "Discount",
        accessor: "discount",
      },
      {
        Header: "Exclusion",
        accessor: "exclusion",
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
        Find details about the insurance companies
      </p>
      <div className="flex items-center justify-between  flex-wrap">
        <div className="flex items-center flex-wrap">
          <div className="mr-4 mt-6">
            <TableSearch
              value={inputValue}
              handleChange={(val) => setInputValue(val)}
              placeholder="Search for insurance company"
            />
          </div>
          <div className="mt-6 ">
            <TableSearchButton
              handleClick={() => setGlobalFilter(inputValue)}
            />
          </div>
        </div>
        <Link to="/empanelledCompanies/create" className="mt-6 ">
          <FormButton text="Add Company" iconPlus={true} />
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

export default EmpanelledCompanies;
