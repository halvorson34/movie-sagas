const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//router.put("/", (req, res) => {});

router.get("/movie", (req, res) => {
  const queryText = "SELECT * FROM movies";
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in GET", err);
      res.sendStatus(500);
    });
});

modules.export = router;
