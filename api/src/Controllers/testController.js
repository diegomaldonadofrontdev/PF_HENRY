

const testThrowError = (boolean) => {
    try {
        cachito()
    } catch (error) {
        throw new Error(`Test throw new Error`)
    }
}

module.exports = {testThrowError}