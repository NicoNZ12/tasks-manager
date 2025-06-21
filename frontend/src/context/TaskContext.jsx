import { createContext, useContext, useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../api/ApiTask";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        if (!data.message) {
          setTasks(data.payload);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const refreshTasks = async () => {
    setLoading(true);
    try {
      const data = await getAllTasks()
      if (!data.message) {
        setTasks(data.payload)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  const handleConfirmDelete = async (id) => {
    await deleteTask(id)
    toast.dismiss()
    toast.success("Task deleted successfully!", { duration: 2500 });
    navigate("/tasks")
    setTasks((prev) => prev.filter((task) => task.id !== id))
  };

  const handleDelete = async (id) => {
    try {
      toast((t) => (
                <div flex items-center justify-between>
                    <span className="flex-grow font-medium">
                        Are you sure you want to delete this task?
                    </span>
                    <div className="flex gap-2 ml-4">
                        <button onClick={() => handleConfirmDelete(id)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">
                            Confirm
                        </button>
                        <button onClick={() => toast.dismiss(t.id)} className="ml-2 bg-gray-500 text-white px-2 py-1 rounded">
                            Dismiss
                        </button>
                    </div>
                </div>
                
            ),{
                duration: 60000,
                position: "top-center",
                icon: "⚠️"
            });
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error, handleDelete, refreshTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);