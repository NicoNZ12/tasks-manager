import Form from "../components/Form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createTask, getAllTasks, updateTask } from "../api/ApiTask";
import { toast } from "react-hot-toast";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
    const { id } = useParams()
    const [task, setTask] = useState(null)
    const navigate = useNavigate()
    const { refreshTasks } = useTasks()

    useEffect(() => {
        if (id) {
            const fetchTask = async () => {
                const tasks = await getAllTasks()
                const task = tasks.payload.find(t => t.id === id)
                setTask(task)
            };
            fetchTask();
        }
    }, [id]);

    const handleSubmit = async (data) => {
        if (id) {
            await updateTask(id, data)
            await refreshTasks()
            toast.success("Task updated successfully!", {duration: 2500})
            navigate("/tasks")
        }else{
            await createTask(data)
            await refreshTasks()
            toast.success("Task created successfully!", {duration: 2500})
            navigate("/tasks")
        }
    };

    return (
        <div className="min-h-screen flex items-center  justify-center px-4 text-center">
            <div className="w-full">
                <h2 className="text-3xl font-bold text-purple-700 mb-8">
                    {id ? "Edit Task" : "Create New Task"}
                </h2> 
                <Form task={task} onSubmit={handleSubmit} />
                <div className="mt-6">
                    <Link to="/tasks" className="inline-block text-purple-700 border-2 border-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-purple-600 hover:text-white transition duration-200">
                        <ArrowLeftCircleIcon className="inline-block w-5 h-5 mr-2" /> Back to Task List
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default TaskForm;