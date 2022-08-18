const express = require("express");
const mongoose = require("mongoose");

const controller = require("./controllers/tasks-controller");

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;
try {
  let db = mongoose.connection;
  db.on(
    "errr",
    console.error.bind(console, "erro de conexao ao banco de dados")
  );
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  return res.json({ titulo: "Lista de tarefas" });
});

router.post("/tarefas", controller.cadastrarTarefa);
router.get("/tarefas", controller.listarTarefas);
router.get("/tarefas/:id", controller.listarTarefa);
router.delete("/tarefas/:id", controller.deletarTarefa);
router.put("/tarefas/:id", controller.editarTarefa);

let porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("Servidor em execucao na porta " + porta);
});
