const {testThrowError} = require("../Controllers/testController")

const testerHandler = (req, res) => {
    const {boolean} = req.params
    try {
        testThrowError(boolean)
        res.status(200).json(`Ok`)
    } catch (error) {
        res.status(404).json({Error: error.message})
    }
}

module.exports = {testerHandler}