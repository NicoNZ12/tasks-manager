import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-5xl font-bold text-purple-700 m-4">Task Manager</h1>
        <h3 className="text-xl text-purple-500 m-2">Simple Task Organizer</h3>
        <p className="text-gray-600 mb-6">Organize and keep track of your tasks easily</p>
        <Link to="/tasks">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">Go to tasks</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;