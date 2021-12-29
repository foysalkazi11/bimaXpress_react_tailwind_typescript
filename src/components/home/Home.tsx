import React, { useEffect, useState } from "react";
import HomeCard from "../theme/card/HomeCard";
import approved from "../../assets/icon/approved.svg";
import dischargedApproved from "../../assets/icon/dischargedApproved.svg";
// import document from "../../assets/icon/document-info.svg";
import draft from "../../assets/icon/draft.svg";
import enhance from "../../assets/icon/enhance.svg";
import fci from "../../assets/icon/fci.svg";
import query from "../../assets/icon/noun_query_3407971.svg";
import process from "../../assets/icon/process.svg";
import reject from "../../assets/icon/reject.svg";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import notification from "../theme/utility/notification";
import { setLoading } from "../../redux/slices/utilitySlice";
import { setCounter } from "../../redux/slices/homeSlice";

const Home = () => {
  const [menuList, setMenuList] = useState<
    { name: any; icon: any; amount: any; pageLink: any }[]
  >([]);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.user);
  const { counter } = useAppSelector((state) => state?.home);
  const navigate = useNavigate();

  const fetchCounter = async () => {
    dispatch(setLoading(true));
    const URL = `/counter?email=${user}`;

    try {
      const {
        data: { data },
      } = await axiosConfig.get(URL);
      dispatch(setLoading(false));
      dispatch(setCounter(data));
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (!Object.entries(counter).length) {
        fetchCounter();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (Object.entries(counter).length) {
      if (!menuList?.length) {
        setMenuList([
          {
            name: "Draft",
            icon: draft,
            //@ts-ignore
            amount: counter?.draft,
            pageLink: "/caseData/draftcases",
          },
          {
            name: "Unprocessed",
            icon: process,
            //@ts-ignore
            amount: counter?.Unprocessed,
            pageLink: "/caseData/unprocessedcases",
          },
          {
            name: "Queries",
            icon: query,
            //@ts-ignore
            amount: counter?.query,
            pageLink: "/caseData/querycases",
          },
          {
            name: "Approved",
            icon: approved,
            //@ts-ignore
            amount: counter?.Approved,
            pageLink: "/caseData/approvedcases",
          },
          {
            name: "Rejected",
            icon: reject,
            //@ts-ignore
            amount: counter?.Reject,
            pageLink: "/caseData/rejectcases",
          },
          {
            name: "Enhance",
            icon: enhance,
            //@ts-ignore
            amount: counter?.Enhance,
            pageLink: "/caseData/enhancedcases",
          },
          {
            name: "FCI",
            icon: fci,
            //@ts-ignore
            amount: counter?.fci,
            pageLink: "/caseData/fcicases",
          },

          {
            name: "Discharge Approved",
            icon: dischargedApproved,
            //@ts-ignore
            amount: counter?.Discharge_Approved,
            pageLink: "/caseData/dischargeapprovedcases",
          },
          {
            name: "Settle",
            icon: approved,
            //@ts-ignore
            amount: counter?.Settled,
            pageLink: "/caseData/settledcases",
          },
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <div className="p-10 flex flex-wrap mx-auto">
      {menuList?.map((menu, index) => {
        return (
          <>
            {menu?.pageLink === "#" ? (
              <div key={index} className="pr-8 pb-8">
                <HomeCard
                  name={menu?.name}
                  icon={menu?.icon}
                  amount={menu?.amount}
                />
              </div>
            ) : (
              <Link to={menu?.pageLink} key={index} className="pr-8 pb-8">
                <HomeCard
                  name={menu?.name}
                  icon={menu?.icon}
                  amount={menu?.amount}
                />
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Home;
