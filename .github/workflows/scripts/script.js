const github = require("@actions/github");
module.exports = ({github, context}) => {
    // return context.payload.client_payload.value
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    return payload
}
