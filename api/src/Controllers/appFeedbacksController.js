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

const getFeedbacksById = async (id) => {
  try {
    const feedback = await Feedback.findById(id);
    if(feedback){
      return feedback
    } else return `No se encontro el feedback ${id}`
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

// DELETE
const deleteFeedback = async (feedbackId) => { // OK
  try { 
    const fbDeleted = await Feedback.deleteOne({_id: feedbackId})
    if (fbDeleted.deletedCount !== 0) {
      return `Feedback delete!`
    } return `No se encontro el feedback`
  } catch (error) {
    throw new Error (error.message)
  }
}

module.exports = {
    getFeedbacks,
    getFeedbacksById,
    createFeedback,
    deleteFeedback
}