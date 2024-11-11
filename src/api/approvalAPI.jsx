import axios from "./axios";

export const fetchApprovalData = async () => {
  try {
    const response = await axios.get("/approval");

    console.log(response.data);
    return response.data?.map((v) => ({ ...v, id: v._id }));
  } catch (error) {
    console.log(error);
  }
};
