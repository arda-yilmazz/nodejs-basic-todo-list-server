import Todo from "../models/todoModel.js"

export const getTodos = async (req, res) => {
    const todos = await Todo.find()
    try {
        res.status(200).json(todos)
    } catch ({ message }) {
        res.status(404).json({
            message: message
        })
    }
}

export const createTodo = async (req, res) => {
    const newTodo = Todo(req.body)
    try {
        await newTodo.save()
    } catch ({ message }) {
        res.status(409).json({
            message: message
        })
    }
}

export const updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, { done: true })
    } catch ({ message }) {
        res.status(409).json({
            message: message
        })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
    } catch ({ message }) {
        res.status(409).json({
            message: message
        })
    }
}