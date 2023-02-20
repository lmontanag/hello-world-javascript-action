module.exports = async ({github, context}) => {

    const commit = await github.rest.repos.getCommit({
        owner: context.repo.owner,
        repo: context.repo.repo,
        ref: context.sha
    })

    for(const file of commit.data.files) {
        console.log("------")
        console.log(file.filename,"--",file.status)
    }
}
