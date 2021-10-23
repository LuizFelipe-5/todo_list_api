var Tasks = require("../models/tasks-model");

exports.cadastrarTarefa = (req, res) => {
  let tarefa = new Tasks({
    description: req.body.description,
    deadline: req.body.deadline,
    isCompleted: req.body.isCompleted,
  });
  tarefa.save((err) => {
    if (err) {
      return next(err);
    }
  });
  res.send("Tarefa cadastrada com sucesso");
};

exports.listarTarefas = (req, res) => {
  Tasks.find({}, (err, tasks) => {
    if (err) return next(err);
    return res.json(tasks);
  });
};

exports.listarTarefa = (req, res) => {
  Tasks.findById(req.params.id, (err, task) => {
    if (err) return next(err);
    return res.json(task);
  });
};

exports.deletarTarefa = (req, res) => {
  Tasks.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send("Tarefa excluída com sucesso");
  });
};

exports.editarTarefa = (req, res) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) return next(err);
    res.send("Tarefa editada com sucesso");
  });
};
