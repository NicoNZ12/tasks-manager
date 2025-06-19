import { getTasks, createTask, updateTask, deleteTask } from "../services/task.service.js"

class TaskController{

    static getAllTasks = (req, res, next) => {
        try{
            const tasks = getTasks()

            if(!tasks){
                return res.status(200).json({message: "No tasks to display"})
            }

            res.status(200).json({payload: tasks})
        }catch(error){
            next(error)
        }
    }

    static addTask = (req, res, next) => {
        try{
            const {title, description} = req.body

            const result = createTask(title, description);

            if(result.error){
                return res.status(400).json({
                    message: "Validation error",
                    errors: result.issues.map(issue => ({
                        message: issue.message
                    }))
                });
            }

            res.status(201).json({message: "Task added successfully", payload: result})

        }catch(error){
            next(error)
        }

    }

    static updateTask = (req, res, next) => {
        try{
            const id = req.params.id
            const body = req.body

            const result = updateTask(id, body)

            if(result.error){
                return res.status(400).json({
                    message: "Validation error",
                    errors: result.message || result.issues.map(issue => ({
                        message: issue.message
                    }))
                });
            }

            res.status(200).json({message: "Task updated successfully", payload: result})

        }catch(error){
            next(error)
        }

    }

    static deleteTask = (req, res, next) => {
        try{
            const id = req.params.id

            if(!id){
                return res.status(400).json({message: "ID is mandatory"})
            }

            const isDeleted = deleteTask(id)

            if(!isDeleted){
                return res.status(400).json({message: "Error deleting the task"})
            }

            res.sendStatus(204)
        }catch(error){
            next(error)
        }
    }

}

export default TaskController