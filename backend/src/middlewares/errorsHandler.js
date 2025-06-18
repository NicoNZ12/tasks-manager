export const notFound = (req, res, next) => {
    res.status(404).json({message: "Página no encontrada"});
}

export const errorsHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const response = {
        message: err.message || "Error del servidor",
    };
    res.status(statusCode).json(response)
}