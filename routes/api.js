const express = require("express");
const Todo = require("../models/todos");
const router = express.Router();

router.get("/todos", (req, res, next) => {
  Todo.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({ error: "The input field is empty" });
  }
});

router.post("/todos/:id", (req, res, next) => {
  if (req.body.completed) {
    Todo.findByIdAndUpdate({_id:req.params.id}, {completed: req.body.completed}, {returnOriginal: false})
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({ error: "The completed field is empty" });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
