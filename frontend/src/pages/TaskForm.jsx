import Form from "../components/Form";
import { Link } from "react-router";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const TaskForm = () => {
    return (
        <div className="min-h-screen flex items-center  justify-center px-4 text-center">
            <div className="w-full">
                <h2 className="text-3xl font-bold text-purple-700 mb-8">Create New Task</h2> 
                <Form />
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