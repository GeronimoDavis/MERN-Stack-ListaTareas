const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    titulo:{type: String, required: true},
    descripcion:{type: String, required: true},
    completada:{type: Boolean, required: true}
});

module.exports = mongoose.model("Task", TaskSchema);