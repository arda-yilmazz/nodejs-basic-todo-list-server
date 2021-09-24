import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo: String,
    done: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo