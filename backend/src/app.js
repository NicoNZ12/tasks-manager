import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import taskRoutes from './routes/task.route.js'
import { notFound, errorsHandler } from './middlewares/errorsHandler.js'

//config
const app = express()

dotenv.config()

const PORT = process.env.PORT ?? 3000

//middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    method: ["GET", "POST", "PUT", "DELETE", "OPTION"]
}))


//Home route
app.get("/", (req,res) => {
    res.json({message: "Server running!! :)"})
})

//routes
app.use('/api/tasks', taskRoutes)


app.use(notFound)

app.use(errorsHandler)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})