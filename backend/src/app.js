import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './routes/task.route.js'
import { notFound, errorsHandler } from './middlewares/errorsHandler.js'

//config
const app = express()

dotenv.config()

const PORT = process.env.PORT ?? 3000

//middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    method: ["GET", "POST", "PUT", "DELETE", "OPTION"]
}))
app.use(errorsHandler)

//Home route
app.get("/", (req,res) => {
    res.json({message: "Server running!! :)"})
})

//routes
app.use('/api/tasks', taskRoutes)


app.use(notFound)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})