const app = require("express")()
const PAGE_LENGTH = 10
app.get("/api/getjobs", (req, res) => {
    let page = parseInt(req.query.page || 0)
    let data = require("./data/jobs.json").data
    let jobs = data.slice(page * PAGE_LENGTH, (page + 1) * PAGE_LENGTH)
    let random = Math.random() * 1500
    setTimeout(() => {
        res.json({
            code: 0,
            message: "success",
            data: jobs
        })
    }, random);

})

app.get("/api/getcity", (req, res) => {
    let data = require("./data/city.json").data
    res.json({
        code: 0,
        message: "success",
        data: data
    })
})

app.listen(3333, () => {
    console.log("start")
})