
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full transition hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-purple-700 mb-2">Programar frontend</h2>
      <p className="text-sm text-gray-500 mb-4">19/06/2025</p>
      <p className="text-gray-700 mb-6">Programar la interfaz gráfica de la app</p>
      <div className="flex justify-end space-x-4">
        <button className="flex items-center gap-1 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
          <PencilIcon className="w-4 h-4" />
          Edit
        </button>
        <button className="flex items-center gap-1 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;