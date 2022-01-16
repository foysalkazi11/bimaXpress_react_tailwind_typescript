import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axiosConfig from "../../config/axiosConfig";
import notification from "../theme/utility/notification";
import { setLoading } from "../../redux/slices/utilitySlice";

const PreauthForm = () => {
  const [data, setData] = useState<any>("");
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);
  const dispatch = useAppDispatch();

  const getPreauthForm = async () => {
    // const URL = `/preauthform?email=${user}&casenumber=${newCaseNum}`;
    dispatch(setLoading(true));
    const URL = `/preauthform?email=${user}&casenumber=${newCaseNum}`;
    try {
      const { data } = await axiosConfig.get(URL);
      dispatch(setLoading(false));
      setData(data?.data);
      console.log(data);
    } catch (error) {
      dispatch(setLoading(false));
      //@ts-ignore
      notification("error", error?.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getPreauthForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* @ts-ignore */}
      <iframe
        //@ts-ignore
        srcDoc={ReactHtmlParser(data)}
        style={{
          width: "100%",
          minHeight: "100vh",
          color: "#f2f2f8",
        }}
        title="htmlRender"
      ></iframe>
      {/* {ReactHtmlParser(data)} */}
    </div>
  );
};

export default PreauthForm;
