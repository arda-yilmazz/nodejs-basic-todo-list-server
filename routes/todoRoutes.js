import { Router } from "express";
import { getTodos, createTodo, deleteTodo, updateTodo } from '../controllers/todoController.js'

const router = Router()

router.get('/', getTodos)
router.post('/', createTodo)
router.delete('/:id', deleteTodo)
router.patch('/:id', updateTodo)

export default router