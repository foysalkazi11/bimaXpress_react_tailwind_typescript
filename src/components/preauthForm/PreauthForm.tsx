import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useAppSelector } from "../../redux/hooks";
import axiosConfig from "../../config/axiosConfig";

const PreauthForm = () => {
  const [data, setData] = useState<any>("");
  const { user } = useAppSelector((state) => state?.user);
  const { newCaseNum } = useAppSelector((state) => state?.case);

  const getPreauthForm = async () => {
    const URL = `/preauthform?email=${user}&casenumber=${newCaseNum}`;
    try {
      const { data: res } = await axiosConfig.get(URL);

      setData(res?.data);
    } catch (error) {
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
      {ReactHtmlParser(data)}
    </div>
  );
};

export default PreauthForm;
