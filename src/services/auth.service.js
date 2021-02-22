import axios from "clients/axios";

export const getUserService = async () => {
  try {
    const res = await axios.get("/");
    const { data } = res.data;
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
