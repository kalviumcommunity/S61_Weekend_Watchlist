const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        genres: { type: [String], required: true },
        year: { type: Number, required: true },
        directors: { type: [String], required: true },
        actors: { type: [String], required: true },
        rating: { type: Number, required: true },
        plot: { type: String, required: true },
    },
    { timestamps: true } 
);
const MovieModel = mongoose.model("Movie",MovieSchema);
module.exports = {
    MovieModel
}