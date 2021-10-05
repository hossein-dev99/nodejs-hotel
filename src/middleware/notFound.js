exports.assemble = (app) => {
    app.use((req,res) => {
        res.send("Not found!");
    })
}