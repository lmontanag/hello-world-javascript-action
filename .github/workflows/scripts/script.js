module.exports = ({github, context}) => {
    if (typeof context.payload.value !== 'undefined') {
        return context.payload.value
    } else {
        return "undefined"
    }
}
