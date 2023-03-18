import axios from "axios";

export function postReview(payload, clientId) {
  return async function () {
    const reviewPost = await axios.post(
      `/clients/feedback?clientId=640a617331d21eefd2f185e0`,
      payload
    );
    return reviewPost;
  };
}