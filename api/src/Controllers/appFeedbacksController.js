const Feedback = require('../models/AppFeedback')


// GETS
const getFeedbacks = async () => {
    try {
        const feedbacks = await Feedback.find()
        if (feedbacks) {
            return feedbacks
        } else return `No se pudieron recuperar feedbacks de la base de datos`
    } catch (error) {
        return error.message
    }
}

// POSTS
const createFeedback = async (clientId, body) => {  // FUNCIONANDO 12/03
  try {
    const newFeedback = new Feedback(body)
    newFeedback.clientId = clientId
    await newFeedback.save()
    return true
  } catch (error) {
    return false
  }
};

module.exports = {
    getFeedbacks,
    createFeedback
}