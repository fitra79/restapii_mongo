module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
           froms: String,
           title: String,
           description: String,
           year: String,
           genre: [{type: String}],
           poster_path: String,
           Rating: String,
           trailer: String,
           urlMovie: String
        }, {
            timestamps: false
        }
    );

    schema.method("toJSON", function(){
        const {__v, ...object} = this.toObject();
        return object;
    });

    return mongoose.model("films", schema);
}