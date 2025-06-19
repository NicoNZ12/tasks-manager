
const Form = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-2xl">
            <form className="flex flex-col space-y-6 ">
                <div>
                    <label htmlFor="title" className="text-lg block font-medium mb-1 text-start">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Task title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="text-lg block font-medium mb-1 text-start">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Task description"
                        className="w-full px-4 py-2 border rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                    </textarea>
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="completed"
                        name="completed"
                        className="h-4 w-4 text-purple-600 accent-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="completed" className="text-m">Complete task</label>
                </div>

                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-2 px-4 rounded-md">Add Task</button>
            </form>
        </div>
    )

}

export default Form;