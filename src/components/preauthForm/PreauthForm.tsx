import React, { useEffect, useState } from "react";
// import ReactHtmlParser from "react-html-parser";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axiosConfig from "../../config/axiosConfig";
import notification from "../theme/utility/notification";
import { setLoading } from "../../redux/slices/utilitySlice";

const PreauthForm = () => {
  const [data, setData] = useState<any>("");
  const { user } = useAppSelector((state) => state?.user);
  // const { newCaseNum } = useAppSelector((state) => state?.case);
  const dispatch = useAppDispatch();

  const getPreauthForm = async () => {
    // const URL = `/preauthform?email=${user}&casenumber=${newCaseNum}`;
    dispatch(setLoading(true));
    const URL = `/preauthform?email=${user}&casenumber=case6`;
    try {
      const { data } = await axiosConfig.get(URL);
      dispatch(setLoading(false));
      setData(data);
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
    <div id="dangerouslySetInnerHTML">
      <div
        id="print_able"
        dangerouslySetInnerHTML={{
          __html: data ? data : "<h2>Loading</h2>",
        }}
        className="m-8 bg-fontColor w-full h-full overflow-scroll"
      ></div>
    </div>
  );
};

export default PreauthForm;
