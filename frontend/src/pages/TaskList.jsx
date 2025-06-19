import Card from "../components/card";
import { Link } from "react-router-dom";
import { PlusCircleIcon} from '@heroicons/react/24/outline';

const TaskList = () => {
    return (
        <div className="min-h-screen max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto text-white px-4 py-6">
            <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl text-center font-bold text-purple-700">My Tasks</h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full font-semibold">All</button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded-full font-semibold">Pending</button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded-full font-semibold">Completed</button>
                <div className="justify-end ml-auto">
                    <Link to="/tasks/new" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"> 
                        <PlusCircleIcon className="w-5 h-5" /> New Task 
                    </Link>
                </div>
            </div>

            <div className="bg-purple-200 rounded-xl p-6 shadow-lg max-h-[80vh] overflow-y-auto hide-scrollbar">
                <div className="flex flex-wrap gap-4 justify-evenly">
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
  )
}

export default TaskList;