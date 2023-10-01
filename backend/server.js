require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

// credentials for database
const db = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: true,
});

// Connecting to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// GET "/"
app.get("/", (req, res) => {
  res.status(200).json("Hello");
});

// This endpoint is used to get all the sessions using SQL queries

app.get("/sessions", (req, res) => {
  db.query(
    `SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type,
       volunteers.name AS volunteer_name
    FROM sessions
    LEFT OUTER JOIN volunteers ON (sessions.volunteer_id = volunteers.id)
    ORDER BY date;`
  )
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the sessions using SQL queries

app.get("/volunteers", (req, res) => {
  db.query(`SELECT * FROM volunteers;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to update status of a session (bagged, open or taken from volunteers POV and open or taken from managers POV) with a given volunteer ID

app.put("/sessions/:id", (req, res) => {
  const volunteerId = Number(req.params.id);
  const body = req.body;
  const requestedDate = body.date;
  const requestedSlotType = body.slot_type;

  // get date and slot type from client request
  console.log("volunteer id --->", volunteerId);
  console.log("body--->", body);

  db.query(
    "UPDATE sessions SET volunteer_id = $1 WHERE date = $2 AND slot_type = $3",
    [volunteerId, requestedDate, requestedSlotType]
  )
    .then((result) => res.send(result.rows[0]))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

app.get("/volunteers", (req, res) => {
  db.query(`SELECT * FROM volunteers;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
