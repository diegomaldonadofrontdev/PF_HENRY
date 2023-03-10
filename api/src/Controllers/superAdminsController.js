const Trade = require('../models/Trades');


const postCreateTrades = async (data) => {
    try {
        for (let i = 0; i < data.length; i++) {            
          const newTrade = new Trade(data[i]);
          await newTrade.save();
        }   
        console.log("Comercios cargados!");
        return `Los comercios se cargaron correctamente`;
      } catch (error) {
        return `Los comercios NO se cargaron correctamente`;
      }
    }

    module.exports = {
        postCreateTrades,
    }