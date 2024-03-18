const {MovieModel} = require('./models/movie.model.js')
const { Router, application } = require("express");

const MovieRoute = Router();

MovieRoute.post("/create", async (req, res) => {
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
      return res.status(404).json({ message: "Park not found" });
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
      return res.status(404).json({ message: "Park not found" });
    }

    res.status(200).json({ message: "Park deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { MovieRoute };