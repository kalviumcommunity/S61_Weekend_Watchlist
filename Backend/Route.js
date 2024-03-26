const { MovieModel } = require('./models/movie.model.js');
const { Router } = require("express");
const Joi = require('joi');

const MovieRoute = Router();

// Define Joi schema for validation
const movieValidationSchema = Joi.object({
    movieTitle: Joi.string().required(),
    genre: Joi.array().items(Joi.string()).required(),
    releaseYear: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
    director: Joi.string().required(),
    mainCast: Joi.array().items(Joi.string()).required(),
    imdbRating: Joi.number().min(0).max(10).required(),
    description: Joi.string().required()
});

MovieRoute.post("/create", validateMovie, async (req, res) => {
    try {
        const prod = await MovieModel.create(req.body);
        res.status(200).send({ msg: "Data created successfully", prod });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid post request", error });
    }
});

MovieRoute.get("/read", async (req, res) => {
    try {
        const data = await MovieModel.find();
        res.status(200).send({ msg: "Data received", data });
    } catch (error) {
        res.status(500).json({ errMsg: "Invalid get request", error });
    }
});

MovieRoute.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const product = await MovieModel.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const updatedProduct = await MovieModel.findByIdAndUpdate(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

MovieRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const product = await MovieModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

function validateMovie(req, res, next) {
    const { error } = movieValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports = { MovieRoute };
