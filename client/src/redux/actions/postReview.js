import axios from "axios";

export function postReview(payload, clientId) {
  return async function () {
    const reviewPost = await axios.post(
      `/clients/feedback?clientId=${clientId}`,
      payload
    );
    return reviewPost;
  };
}