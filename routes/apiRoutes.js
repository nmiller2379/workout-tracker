const Workout = require("../models/workout.js"); 
const router = require("express").Router();

// router.use()

// post
    router.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then((dbWorkout) => res.json(dbWorkout))
            .catch((err) => {
                res.json(err);
            });
    });

    // get
    router.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
    });
    
    router.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // put
    router.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        })
    })
    
    module.exports = router;







