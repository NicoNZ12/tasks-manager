import HomePage from "./pages/HomePage"
import TaskList from "./pages/TaskList"
import TaskItem from "./pages/TaskItem"
import TaskForm from "./pages/TaskForm"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskItem />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id/edit" element={<TaskForm />} /> 
          </Routes>
      </div>
    )    
}

export default App
