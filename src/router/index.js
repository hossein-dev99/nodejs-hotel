const homeRouter = require("./homeRouter");
const path = require("path");

exports.assemble = (app) => {
    app.use('/api' ,homeRouter);
    app.get('*' ,(req ,res) => {
        res.sendFile(path.join(process.cwd(),"/public/index.html"));
    });
}