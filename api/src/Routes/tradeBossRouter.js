const { Router } = require("express");

const { getTradeBossHandler,
    loginTradeBossHandler,    
    postTradeBossHandler,
    registerWhitGoogleTradeBosshandler
} = require("../Handlers/tradeBossHandler");

const tradeBossRouter = Router();

// GET 
// Busca un comerciante por id
tradeBossRouter.get("/search/:id", getTradeBossHandler);

// POST
// Authentication
tradeBossRouter.post("/login", loginTradeBossHandler);
tradeBossRouter.post("/register", postTradeBossHandler);
tradeBossRouter.post("/siginWhitGoogle", registerWhitGoogleTradeBosshandler)

module.exports = tradeBossRouter;