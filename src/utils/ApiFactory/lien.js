import Axios from "utils/axios";

export const validateLienFn = async (payload) => {
  const res = await Axios.post(`place/validate_lien`, payload);
  return res;
};
