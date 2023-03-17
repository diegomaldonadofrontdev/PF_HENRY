import axios from "axios";

export function commerceRegister(payload) {
  return async function () {
    const postCommerce = await axios.post(`/trades/newTrade`, payload);
    return postCommerce;
  };
}
