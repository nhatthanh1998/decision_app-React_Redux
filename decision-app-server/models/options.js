const mongoose = require("mongoose");

const Option = mongoose.model("Option", {
  option: {
    require: true,
    type: String
  }
});
module.exports = {
  Option
};
