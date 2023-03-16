const Feedback = require ("../models/TradeFeedback")
const Client = require ("../models/Clients")

// GETS
const getFeedbacks = async (tradeId) => { // FUNCIONANDO
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
const createFeedback = async ( clientId, tradeId, opinion, rating ) => {   // FUNCIONANDO
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

module.exports = {
    createFeedback,
    getFeedbacks
}