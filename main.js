const express = require("express")
const cors = require("cors")
const app = express()
const fs = require("fs")

app.use(cors())
app.use(express.static("./dist"))


app.get("/preset/:id", (req, res) => {
    if(!fs.existsSync("./private/configurations/" + req.params["id"] + ".json")){
        res.status(404)
        res.end()
        return
    }
    let config = JSON.parse(fs.readFileSync("./private/configurations/" + req.params["id"] + ".json", "utf-8"))
    if(!config) {
        res.status(404)
        res.end()
        return
    }
    res.send(config)
})
// app.get("/*", (req, res) => {
// })

app.listen(8081)