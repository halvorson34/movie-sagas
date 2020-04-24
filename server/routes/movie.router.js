const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log(req.body);

  const queryString = `INSERT INTO "movies_genres"
    ( "movie_id", "genre_id" )
    VALUES ($1, $2);`;

  pool
    .query(queryString, [req.body.home, req.body.edit, req.body.details])
    .then((response) => {
      res.sentStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

modules.export = router;
