exports.assemble = (app) => {
    app.use((error ,req ,res ,next) => {
        if(error) {
            const message = error.message;
            const status = error.status || 500;
            res.status(status).send({
                message
            })
        }
    });
}