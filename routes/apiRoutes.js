// const router = require("express").Router();
const Workout = require("../models/workout.js");

// post
module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then((dbWorkout) => res.json(dbWorkout))
            .catch((err) => {
                res.json(err);
            });
    });

    // get
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
    });
    
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // put
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        })
    })
} 







