import dayjs from "dayjs";
import axios from "./axios";

export const fetchLivestockData = async () => {
  try {
    const response = await axios.get("/livestock");
    console.log("response.data");
    console.log(response.data);

    const row = response.data || [];

    return row;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLivestockAnalytics = async () => {
  try {
    const response = await axios.get("/livestock/analytics");
    console.log("response.data");
    console.log(response.data);

    const row = response.data || [];

    return row;
  } catch (error) {
    console.log(error);
  }
};
