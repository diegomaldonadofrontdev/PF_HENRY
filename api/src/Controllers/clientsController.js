const feedbacks = [];
const Clients = require('../models/Clients');
const Order = require('../models/Order')

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

const postCreateClientController = async (body) => {
  const newClient = new Clients( body);
  await newClient.save();
  return true;
}

const postCreateOrder = async (body) => {
  
  try {
    const newOrder = new Order( body);
    await newOrder.save();
    return true;
  } catch (error) {
    return false;
  }
}



module.exports = {
    postFeedbackController,
    getFeedbacksController,
    postCreateClientController,
    postCreateOrder
}