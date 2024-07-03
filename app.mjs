import express from "express";
const app = express();

const port = 2222;

app.get("/", (req, res) => {
  res.send("hello world");
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};

start();
