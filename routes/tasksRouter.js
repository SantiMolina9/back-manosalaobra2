const express = require("express");
const router = express.Router();
const task = require('../controller/task.js')

router.get('/all', task.getTasks)

router.get('/:id', task.getTaskById)

router.post('/', task.createTask)

//Metodo PUT siempre hay que modificar todos los campos del objeto 
router.put('/:id', task.editTaskById)

router.delete('/:id', task.deleteTask)

module.exports = router;