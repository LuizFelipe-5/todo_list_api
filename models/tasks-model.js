const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Task = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tarefas", Task);
