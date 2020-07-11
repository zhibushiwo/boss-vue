const app = require("express")()
const PAGE_LENGTH = 10
app.get("/api/getjobs", (req, res) => {
    let page = parseInt(req.query.page || 0)
    let data = require("./data/jobs.json").data
    let jobs = data.slice(page * PAGE_LENGTH, (page + 1) * PAGE_LENGTH)
    console.log(page * PAGE_LENGTH, (page + 1) * PAGE_LENGTH)
    res.json({
        code: 0,
        message: "success",
        data: jobs
    })
})

app.listen(3333, () => {
    console.log("start")
})