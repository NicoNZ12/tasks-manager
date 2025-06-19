import Card from "../components/card";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const TaskItem = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Task Detail</h2>
        
        <div className="bg-purple-200 rounded-xl p-6 shadow-lg flex justify-center items-center">
          <Card />
        </div>

        <div className="mt-8 text-center">
          <Link to="/tasks" className="inline-flex items-center gap-2 text-purple-700 border-2 border-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-purple-600 hover:text-white transition duration-200">
            <ArrowLeftCircleIcon className="w-5 h-5" />Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;