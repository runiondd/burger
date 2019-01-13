// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
      console.log("Get All Burgers");
    db.Burgers.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burgers.create({
      burgerName: req.body.burgerName,
      complete: req.body.complete
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  app.delete("/api/burgers/:id", function(req, res) {
    console.log("Delete Burger");
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/burgers", function(req, res) {
    console.log("Update Burger");
    db.Burgers.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
};
