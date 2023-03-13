module.exports = app => {
    const films = require("../controllers/films.controller");

    app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    

    app.get("/films/", films.findAll);
    app.get("/films/genre=:genre", films.showGenre);
    app.get('/films/id=:id', films.show)
    app.post('/films/', films.create);
    app.put('/films/:id', films.update);
    app.delete('/films/:id', films.delete);

    // app.use("films", r);
}