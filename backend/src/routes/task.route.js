import Router from 'express'
import TaskController from '../controllers/taks.controller'

const router = Router()

router.get("/", TaskController.getAllTasks)

router.post("/", TaskController.addTask)
router.put("/:id", TaskController.updateTask)
router.delete("/:id", TaskController.deleteTask)

export default router