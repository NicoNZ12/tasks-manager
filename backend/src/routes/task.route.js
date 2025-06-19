import Router from 'express'
import TaskController from '../controllers/task.controller.js'

const router = Router()

router.get("/", TaskController.getAllTasks)

router.post("/add", TaskController.addTask)
router.put("/update/:id", TaskController.updateTask)
router.delete("/delete/:id", TaskController.deleteTask)

export default router