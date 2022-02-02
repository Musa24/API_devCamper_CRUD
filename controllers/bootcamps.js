const Bootcamp = require('../models/Bootcamp');

//GET => Get all bootcamps => /api/v1/bootcamps
//Any one can access this route
const getAllBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find({});
    res.status(200).json({
      success: true,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//POST => Create a new  bootcamp => /api/v1/bootcamps/
//Any one can access this route
const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//GET => Get a bootcamp => /api/v1/bootcamps/:id
//Any one can access this route
const getBootcamp = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findById(id);
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//PATCH => Update a bootcamp => /api/v1/bootcamps/:id
//Private
const updateBootcamp = async (req, res) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//DELETE => Delete a bootcamp => /api/v1/bootcamps/
//Any one can access this route
const deleteBootcamp = async (req, res) => {
  try {
    const { id } = req.params;
    await Bootcamp.findByIdAndDelete(id);
    res.status(301).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
