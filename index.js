const core = require('@actions/core');
const github = require('@actions/github');

const  Octokit  = require("@octokit/rest");

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);


    // const octokit = new Octokit({
    //     auth: "secret123",
    //     userAgent: 'myApp v1.2.3',
    //     previews: ['jean-grey', 'symmetra'],
    //     timeZone: 'Europe/Amsterdam',
    //     baseUrl: 'https://api.github.com',
    //     log: {
    //         debug: () => {},
    //         info: () => {},
    //         warn: console.warn,
    //         error: console.error
    //     },
    //     request: {
    //         agent: undefined,
    //         fetch: undefined,
    //         timeout: 0
    //     }
    // })
    //
    // const commit = await octokit.rest.repos.getCommit({
    //     owner: "owner",
    //     repo: "repo",
    //     ref: github.context.sha
    // });
    //
    //
    // const targets = []
    //
    // for (const file of commit.data.files){
    //
    //     targets.push({
    //         filename: file.filename,
    //         status: file.status
    //     })
    //
    // }
    // core.setOutput("targets", JSON.stringify(targets))

} catch (error) {
    core.setFailed(error.message);
}
