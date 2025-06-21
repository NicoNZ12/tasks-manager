import { useEffect, useState } from "react";
import { createTask } from "../api/ApiTask";
import { toast } from "react-hot-toast";

const Form = ({task, onSubmit}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed || false)
        }
    }, [task]);

    const cleanForm = () => {
        setTitle("");
        setDescription("");
        setCompleted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title){
            toast.error("Title is required")
            return
        }

        if(title.length < 5 || title.length > 60){
            toast.error("Title must be between 5 and 60 characters")
            return
        }

        if(!description){
            toast.error("Description is required")
            return
        }

        if(description.length < 5 || description.length > 255){
            toast.error("Description must be between 5 and 255 characters")
            return
        }

        const newTask = {
            title,
            description,
            completed
        };

        if (onSubmit) {
            await onSubmit(newTask)
            cleanForm()
        } else {
            await createTask(newTask)
            cleanForm()
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-2xl">
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="text-lg block font-medium mb-1 text-start">Title <span className="font-bold text-red-500">*</span></label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Task title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="description" className="text-lg block font-medium mb-1 text-start">Description <span className="font-bold text-red-500">*</span></label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Task description"
                        className="w-full px-4 py-2 border rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="completed"
                        name="completed"
                        className="h-4 w-4 text-purple-600 accent-purple-600 focus:ring-purple-500"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    <label htmlFor="completed" className="text-m">Complete task</label>
                </div>

                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-2 px-4 rounded-md">
                    {task ? "Update Task" : "Create Task" }
                </button>
            </form>
        </div>
    )

}

export default Form;