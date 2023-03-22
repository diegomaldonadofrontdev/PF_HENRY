const Feedback = require ("../models/TradeFeedback")
const Client = require ("../models/Clients")

// GETS
const getFeedbacks = async (tradeId) => { // OK
    try {
        const feedbacks = await Feedback.find({tradeId: tradeId})
        if (feedbacks) {
            return feedbacks
        } else return `No se pudieron recuperar feedbacks de la base de datos`
    } catch (error) {
        return error.message
    }
}

// POSTS
const createFeedback = async ( clientId, tradeId, opinion, rating ) => {   // OK
    try {
        const client = await Client.findById(clientId)
        console.log(client);
        const feedback = {
        clientId,
        tradeId,
        name: client.firstname,
        lastName: client.lastName,
        clientImg: client.image,
        opinion,
        rating
    }
    const newFeedback = new Feedback(feedback)
    await newFeedback.save()
    return `Hemos registrado su opinión del comercio, muchas gracias ${client.firstname}!`
  } catch (error) {
    return error.message
  }
};

const deleteTradeFeedback = async (feedbackId) => { // OK
    try { 
        const fbDeleted = await Feedback.deleteOne({_id: feedbackId})
        if (fbDeleted.deletedCount !== 0) {
          return `Feedback eliminada correctamente`
        } return `No se encontro el feedback`
      } catch (error) {
        throw new Error (error.message)
      }
}

// PUTS
const updateTradeFeedback = async (feedbackId, body) => { // OK
    try {
        const update = await Feedback.findByIdAndUpdate(feedbackId, body, { new: true })
        if (update) return true
        return false
      } catch (error) {
        throw new Error (error.message)
      }
}


module.exports = {
    createFeedback,
    getFeedbacks,
    deleteTradeFeedback,
    updateTradeFeedback
}