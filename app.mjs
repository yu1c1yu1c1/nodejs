import express from "express";
const app = express();

const port = 2222;

app.get("/", (req, res) => {
  res.send("Welcome to nodejs");
});

app.post("/", (req, res) => {
  res.status(405);
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};

start();
