import axios from "axios";

export function postProduct(payload, tradeId) {
  return async function () {
    const product = await axios.post(`/trades/new-products`, payload);
    return product;
  };
}
