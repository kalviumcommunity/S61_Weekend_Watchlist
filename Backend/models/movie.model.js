const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema =new Schema( {
"movieTitle": { type: String, required: true },
"genre": { type: [String], required: true },
"releaseYear": { type: Number, required: true },
"director": { type: String, required: true },
"mainCast": { type: [String], required: true },
"imdbRating": { type: Number, required: true },
"description": { type: String, required: true }
}, { timestamps: true }
);

const MovieModel = mongoose.model("flix", MovieSchema); 

module.exports = {
    MovieModel
};
