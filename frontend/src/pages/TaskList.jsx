import Card from "../components/card";
import { Link } from "react-router-dom";
import { PlusCircleIcon} from '@heroicons/react/24/outline';
import { getAllTasks } from "../api/ApiTask";
import { useEffect, useState } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getAllTasks()
                setTasks(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchTasks();
    },[])

    const filteredTasks = tasks.filter(task => {
        if (filter === "pending") return !task.completed;
        if (filter === "completed") return task.completed;
        return true; // all
    });

    const filterButtonClasses = (type) =>
        `px-4 py-1 rounded-full font-semibold ${
            filter === type
                ? "bg-pink-500 text-white"
                : "bg-gray-600 hover:bg-gray-700 text-white"
        }`;

    return (
        <div className="min-h-screen max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto text-white px-4 py-6">
            <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl text-center font-bold text-purple-700">My Tasks</h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <button onClick={() => setFilter("all")} className={filterButtonClasses("all")}>All</button>
                <button onClick={() => setFilter("pending")} className={filterButtonClasses("pending")}>Pending</button>
                <button onClick={() => setFilter("completed")} className={filterButtonClasses("completed")}>Completed</button>
                <div className="justify-end ml-auto">
                    <Link to="/tasks/new" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"> 
                        <PlusCircleIcon className="w-5 h-5" /> New Task 
                    </Link>
                </div>
            </div>

            {loading ? (
                <p className="text-center text-purple-700 font-medium">Loading tasks...</p>
            ) : error ? (
                <p className="text-center text-red-600 font-medium">Error: {error}</p>
            ) : (
                <div className="bg-purple-200 rounded-xl p-6 shadow-lg max-h-[80vh] overflow-y-auto hide-scrollbar">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                        {filteredTasks.length > 0 ? (
                            filteredTasks.map(task => (
                                <Card key={task.id} task={task} />
                            ))
                        ) : (
                            <p className="text-purple-700 font-medium text-center w-full">No tasks found</p>
                        )}
                        
                    </div>
                </div>
            )}
            
        </div>
  )
}

export default TaskList;