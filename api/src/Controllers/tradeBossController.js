const TradeBoss = require('../models/TradeBoss');


// GET CONTROLLERS 
const searchTradeBossExist = async (email) => {
    try {
        const findTradeBoss = await TradeBoss.find({email: email});
        if(findTradeBoss.length) return true
        return false
    } catch (error) {
        return error.message
    }
}

const validatePasswordTradeBoss = async (email, password) => {
    return true
}

const searchTradeBoss = async (email) => {
    try {
        const tradeBossBDD = await TradeBoss.find({email: email}, {password:0});
        return tradeBossBDD[0]
    } catch (error) {
        return error.message;
    }
}


// POST CONTROLLERS 
const registerTradeBoss = async (tradeBoss) => { // FUNCIONANDO
    try {
        const tradeBossBDD = await TradeBoss.find({ email: tradeBoss.email }, { password: 0 })

        if (!tradeBossBDD.length) {
            const newTradeBoss = new TradeBoss(tradeBoss);
            await newTradeBoss.save();
            const tradeBossBDD = await TradeBoss.find({ email: tradeBoss.email }, { password: 0 })
            const dataTradeBoss = tradeBossBDD[0];
            return dataTradeBoss;
        }
        const dataTradeBoss = tradeBossBDD[0];
        return dataTradeBoss;
    } catch (error) {
        return error.message
    }
}

module.exports = {
    searchTradeBossExist,
    validatePasswordTradeBoss,
    searchTradeBoss,
    registerTradeBoss
};
