import React, { useState, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import TableSearch from "../theme/table/tableSearchInput/TableSearchInput";
import TableSearchButton from "../theme/table/tableSearchButton/TableSearchButton";
// import { Link } from "react-router-dom";
import ReactTable from "../theme/reactTable/ReactTable";
import download from "../../assets/icon/eye.svg";
import filter from "../../assets/icon/filter.svg";
import NewCaseSelect from "../theme/select/newCaseSelect/NewCaseSelect";
import TableCheckbox from "../theme/table/tableCheckbox/TableCheckbox";
import { RiDeleteBin6Line } from "react-icons/ri";

const insuranceCompany = [
  { label: "Health India Insurance", value: "health_india_insurance" },
  { label: "Reliance General Insurance", value: "reliance_general_nsurance" },
  { label: "Futura General Insurance", value: "futura_general_insurance" },
  { label: "Medsave Health Insurance", value: "medsave_health_insurance" },
  {
    label: "Bajaj Allianz Life Insurance",
    value: "bajaj_allianz_life_insurance",
  },
];

const dateRange = [
  { label: "Last day", value: "last_day" },
  { label: "Last 15 days", value: "last_15_days" },
  { label: "Last month", value: "last_month" },
  { label: "Last quarter", value: "last_quarter" },
  { label: "Last year", value: "last_year" },
];

interface ColumnDetails {
  [key: string]: any;
}

const Drafts = () => {
  const [inputValue, setInputValue] = useState("");
  const data = React.useMemo<ColumnDetails[]>(
    () => [
      {
        name: "Pranav vikram",
        phone: 9898525481,
        claimNumber: "TFS4556dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "2000",
        insuranceTPA: "Health India Insurance",
        action: <img src={download} alt="icon" />,
      },
      {
        name: "Chandar sekar",
        phone: 9898525481,
        claimNumber: "TFS47556dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "3000",
        insuranceTPA: "Reliance General Insurance",
        action: <img src={download} alt="icon" />,
      },
      {
        name: "Sai shree",
        phone: 9898525481,
        claimNumber: "T4556dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "3000",
        insuranceTPA: "Futura Generali Insurance",
        action: <img src={download} alt="icon" />,
      },
      {
        name: "Rupa rajesh",
        phone: 9898525481,
        claimNumber: "RFS56dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "2300",
        insuranceTPA: "Medsave Health Insurance",
        action: <img src={download} alt="icon" />,
      },
      {
        name: "vikram",
        phone: 9898525481,
        claimNumber: "TFS4556dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "2300",
        insuranceTPA: "Bajaj Allianz Life Insurance",
        action: <img src={download} alt="icon" />,
      },
      {
        name: "Kumar",
        phone: 9898525481,
        claimNumber: "TDS4556dD",
        admissionDate: "20 Nov 2021",
        claimAmount: "2300",
        insuranceTPA: "Bajaj Allianz Life Insurance",
        action: <img src={download} alt="icon" />,
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
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Claim number",
        accessor: "claimNumber",
      },
      {
        Header: "Admission date",
        accessor: "admissionDate",
      },
      {
        Header: "Claim amount",
        accessor: "claimAmount",
      },
      {
        Header: "Insurance TPA",
        accessor: "insuranceTPA",
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
    // @ts-ignore
    // selectedFlatRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // @ts-ignore
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <TableCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              {/* @ts-ignore */}
              <TableCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const [options, setOptions] = useState({
    insuranceTPA: "",
    dateRange: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLDataElement | any
    >
  ) => {
    const { name, value } = e.target;
    setOptions((pre: any) => ({
      ...pre,
      [name]: value,
    }));
  };

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  return (
    <div className="py-6 px-10 w-full flex flex-col">
      <div className="flex items-center justify-between  flex-wrap ">
        <div className="flex items-center mt-6">
          <div className="mr-4 ">
            <TableSearch
              value={inputValue}
              handleChange={(val: React.SetStateAction<string>) =>
                setInputValue(val)
              }
              placeholder="Search for Name, claim number"
            />
          </div>
          <div className=" ">
            <TableSearchButton
              handleClick={() => setGlobalFilter(inputValue)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img src={filter} alt="icon" />
            </div>
            <div className="mr-2">
              <NewCaseSelect
                options={insuranceCompany}
                name="insuranceTPA"
                handleChange={handleChange}
                defaultOption="Insurance TPA"
                value={options?.insuranceTPA || ""}
                style={{
                  maxWidth: "170px",
                  height: "30px",
                  backgroundColor: "#FFFFFF17",
                  padding: "0px",
                  borderRadius: "3px",
                  fontSize: "12px",
                }}
              />
            </div>
            <div className="mr-12">
              <NewCaseSelect
                options={dateRange}
                name="dateRange"
                handleChange={handleChange}
                defaultOption="Status"
                value={options?.dateRange || ""}
                style={{
                  maxWidth: "125px",
                  height: "30px",
                  backgroundColor: "#FFFFFF17",
                  padding: "0px",
                  borderRadius: "3px",
                  fontSize: "12px",
                }}
              />
            </div>
          </div>
          <div className="flex items-center text-xs text-fontColor">
            <RiDeleteBin6Line className="text-fontColor text-lg mr-2 " />
            Delete
          </div>
        </div>
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

export default Drafts;
