import axios from "axios";

// const API = "ec2-3-110-207-150.ap-south-1.compute.amazonaws.com";
const instance = axios.create({
  // baseURL: API,
  // headers: {
  //   Cookie: "sessionid=fycgccmwxpex0svdsd97eppbhbsmax5y",
  // },
});

export default instance;
