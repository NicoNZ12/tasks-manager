
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Card = ({ task, description, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full transition hover:shadow-lg">
      <Link to={`/tasks/${task.id}`}>
        <h2 className="text-2xl font-semibold text-purple-700 mb-2 break-words">{task.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{new Date(task.createdAt).toLocaleDateString("es-AR")}</p>
        {description ? <p className="text-gray-700 mb-6 break-words">{task.description}</p> : ""}
      </Link>
      <span 
          className={`px-3 py-1 rounded-full text-sm font-semibold 
          ${task.completed ? "bg-green-100 text-green-700 " : "bg-yellow-100 text-yellow-700"}`}>
            {task.completed ? "completed" : "pending"}
      </span>
      <div className="flex justify-end space-x-4">
        <Link to={`/tasks/${task.id}/edit`}>
          <button className="flex items-center gap-1 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
            <PencilIcon className="w-4 h-4" />
              Edit
        </button>
        </Link>
        <button 
          className="flex items-center gap-1 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition" 
          onClick={() => onDelete(task.id)}>
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;