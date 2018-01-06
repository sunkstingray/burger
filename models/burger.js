//Models

var orm = require("../config/orm.js");

orm.selectAndOrder("animal_name", "pets", "price");
