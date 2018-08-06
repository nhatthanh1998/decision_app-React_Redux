const mongoose = require("./db/mongoose");
const { Option } = require("./models/options");
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.listen(3001, () => {
  console.log("server is start on port 3001");
});
const { ObjectID } = require("mongodb");




app.get("/", (req, res) => {
  Option.find()
    .then(list => {
      res.status(200).send(list);
    })
    .catch(e => {
      res.status(404).send();
    });
});
app.post("/", (req, res) => {
  const body = _.pick(req.body, ["option"]);
  var option = new Option(body);
  option
    .save()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(e => {
      res.status(404).send();
    });
});

app.delete("/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Option.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.status(200).send(todo);
    })
    .catch(e => {
      res.status(200).send();
    });
});
