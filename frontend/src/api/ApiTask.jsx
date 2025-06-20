
export const getAllTasks = async () => {
    const datos = await fetch(import.meta.env.VITE_API_URL)
    const result = await datos.json()
    return result.payload
}

export const createTask = async (task) => {
    const datos = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    const result = await datos.json()
    return result
}

export const updateTask = async (id, task) => {
    const datos = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    const result = await datos.json()
    return result
}

export const deleteTask = async (id) => {
    const datos = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE"
    })
    const result = await datos.json()
    return result
}