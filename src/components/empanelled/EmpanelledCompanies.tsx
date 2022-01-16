import React, { useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import FormButton from "../theme/button/FormButton";
import TableSearch from "../theme/table/tableSearchInput/TableSearchInput";
import TableSearchButton from "../theme/table/tableSearchButton/TableSearchButton";
import { Link } from "react-router-dom";
import ReactTable from "../theme/reactTable/ReactTable";
// import BajajLogo from "../../assets/images/Bajaj-Logo.png";
import Eye from "../../assets/icon/eye.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoading } from "../../redux/slices/utilitySlice";
import notification from "../theme/utility/notification";
import axiosConfig from "../../config/axiosConfig";
import { setEmpanelledCompaniesListList } from "../../redux/slices/empanelledCompaniesSlice";
import scrollbar from '../../scrollbar.module.css';

interface ColumnDetails {
  [key: string]: any;
}

const EmpanelledCompanies = () => {
  const [inputValue, setInputValue] = useState("");
  const [tableRow, setTableRow] = useState<ColumnDetails[]>([]);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { empanelledCompaniesList } = useAppSelector(
    (state) => state?.empanelledCompanies
  );

  const fetchDoctor = async () => {
    const URL = `/empanelcompany?email=${user}`;
    dispatch(setLoading(true));
    try {
      const { data } = await axiosConfig.get(URL);
      console.log(data);

      dispatch(setLoading(false));
      dispatch(setEmpanelledCompaniesListList(data?.data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    if (!Object.entries(empanelledCompaniesList)?.length) {
      fetchDoctor();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.entries(empanelledCompaniesList)?.length) {
      const res = Object.entries(empanelledCompaniesList)?.map(
        (
          //@ts-ignore
          [key, { Exclusion, Ratelist, Discount, expiryDate }]
        ) => ({
          logo: (
            <img
              src={Ratelist}
              alt="logo"
              className="w-24 h-10 object-contain"
            />
          ),
          name: key,
          expiryDate: expiryDate || "",
          discount: Discount,
          exclusion: Exclusion,
          action: (
            <Link to={`/empanelledCompanies/${key}`}>
              <img src={Eye} alt="icon" />
            </Link>
          ),
        })
      );
      setTableRow(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empanelledCompaniesList]);
  const data = React.useMemo<ColumnDetails[]>(() => tableRow, [tableRow]);

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
    <div className={`py-6 px-10 w-full flex flex-col overflow-x-scroll ${scrollbar.scrollBarDesign}`}>
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
