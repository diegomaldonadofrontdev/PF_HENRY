import axios from "axios";

export function commerceRegister(payload) {
  return async function () {
    const postCommerce = await axios.post(`/superadmins/newTrade`, payload);
    return postCommerce;
  };
}
