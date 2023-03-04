const feedbacks = [];

const postFeedbackController = (name, opinion, rating, image) => {  
  const newFeedback = {
    name: name,
    opinion: opinion,
    rating: rating,
    image: image,
  }
  console.log(feedbacks);
  feedbacks.push(newFeedback);
  console.log(feedbacks);
  
  if (feedbacks.length) {
    return true;
  } else return false;
};

const getFeedbacksController = () => {
    return feedbacks
}

module.exports = {
    postFeedbackController,
    getFeedbacksController
}