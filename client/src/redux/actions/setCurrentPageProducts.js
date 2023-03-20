const setCurrentPageProducts = (page) => {
    return {
        type: "CURRENT_PAGE_PRODUCTS",
        payload: page
    }
}

export default setCurrentPageProducts;