const db = require("../models");
const films = db.films;



exports.create = (req, res) => {

    //-- GET TITLE LOGIC
    films.find(
        { title: req.body.title }
    )
        .then((titles) => {
            if (titles[0]) {
                res.status(401).json({
                    message: 'Data already exits'
                });
            } else {
                //-- CREATE DATA
                films.create(req.body)
                    .then((results) => {
                        res.status(200).json({
                            status: 200,
                            data: results
                        });
                    }).catch((err) => {
                        res.status(401).json({
                            status: 401,
                            data: err.message
                        });
                    });
            }
        }).catch((err) => {
            res.send({
                message: 'faild create data'
            });
        })

}

exports.findAll = (req, res) => {
    films.find()
        .then((result) => {
            res.status(200).json({
                status: 200,
                results: result
            });
        }).catch((err) => {
            res.status(401).json({
                status: 401,
                results: err
            })
        })
}

exports.show = (req, res) => {
    films.find(
        { _id: req.params.id }
    )
        .then((result) => {
            res.status(200).json({
                status: 200,
                results: result
            });
        }).catch((err) => {
            res.status(401).json({
                status: 401,
                message: "Failed Get Data"
            });
        });
}

exports.showGenre = (req, res) => {
    films.find(
        { genre: req.params.genre }
    )
        .then((result) => {
            res.status(200).json({
                status: 200,
                results: result
            });
        }).catch((err) => {
            res.status(401).json({
                status: 401,
                message: "Failed Get Data"
            });
        });
}
exports.update = (req, res) => {
    const id = req.params.id;

    const data = {
        froms: req.body.forms,
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        genre: req.body.genre,
        poster_path: req.body.poster_path,
        Rating: req.body.Rating,
        trailer: req.body.trailer,
        urlMovie: req.body.urlMovie
    }

    films.findByIdAndUpdate(id, data, {useFindAndModify: false})
    .then((result) => {
        if(!req.body) {
            res.status(401).json({
                status: 401,
                message: 'Failed update Data'
            });
        } else {
            res.status(200).json({
                status: 200,
                message: 'Success Update Data'
            })
        }
        
    }).catch((err) => {
        res.status(500).json({
            status: 500,
            results: "Faild To Update Data"
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id
    films.findByIdAndRemove(id)
    .then((result) => {
        if(!result) {
            res.status(401).json({
                status: 401,
                message: 'Failed Delete Data'
            });
        } else {
            res.status(200).json({
                status: 200,
                message: 'Success Delete Data'
            })
        }
        
    }).catch((err) => {
        res.status(500).json({
            status: 500,
            results: "Faild To Delete Data"
        });
    });
}