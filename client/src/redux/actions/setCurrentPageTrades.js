const setCurrentTrades = (page) => {
    return {
        type: "CURRENT_PAGE_TRADES",
        payload: page
    }
}

export default setCurrentTrades;