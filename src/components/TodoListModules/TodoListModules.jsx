import React from 'react'
import styles from './TodoList.module.css'
import { TodoItem } from './TodoItem'
export const TodoListModules = ({ list }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Todo List Modules</h1>
			<ul className={styles.list}>
				{list.map((todo, index) => (
					// <TodoItem todo={todo.todo} id={todo.id} completed={todo.completed} />
					<TodoItem {...todo} index={index} />
				))}
			</ul>
		</div>
	)
}
