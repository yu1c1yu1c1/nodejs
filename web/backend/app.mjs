import express from "express";
const app = express();
app.use(express.static("../frontend"))

const HOST = "0.0.0.0";
const PORT = 2222;

const methodNotAllowed = (req, res, next) => res.status(405).send();

app.get("/", (req, res) => {
  res.send("Welcome to nodejs");
});

app.all("/", methodNotAllowed);

app.get("/", (req, res) => {
  res.send("Welcome to nodejs");
});

const start = () => {
  app.listen(PORT, HOST, () => {
    console.log(`Server started at ${HOST}:${PORT}`);
  });
};

start();