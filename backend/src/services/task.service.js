import {tasks, validateInput, validateUpdateInput} from "../model/task.model.js"
import { randomUUID } from "node:crypto";

export const getTasks = () => {
    const tasksList = [...tasks];

    if(tasks.length === 0){
        return false
    }

    return tasksList
}

export const createTask = (title, description, completed = false) => {

    const newTask = {
        id: randomUUID(),
        title,
        description,
        completed,
        createdAt: new Date(),
    }

    const validateResult = validateInput(newTask)

    if(!validateResult.success){
        return { error: true, issues: validateResult.issues };
    }

    tasks.push(validateResult.output)
    return validateResult.output
}

export const updateTask = (id, task) => {

    const taskIndex = tasks.findIndex(t => t.id === id);

    if(taskIndex === -1){
        return { error: true, message: "Task not found" };
    }

    const currentTask = tasks[taskIndex];

    const updatedTask = {
        id,
        ...currentTask, 
        ...task
    }

    const validateResult = validateUpdateInput(updatedTask)

    if(!validateResult.success){
        return { error: true, issues: validateResult.issues };
    }

    tasks[taskIndex] = validateResult.output;

    return validateResult.output
}

export const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);

    if(taskIndex === -1){
        return false
    }

    tasks.splice(taskIndex, 1);
    return true
}