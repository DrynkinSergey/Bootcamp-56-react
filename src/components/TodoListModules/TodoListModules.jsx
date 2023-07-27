import React from 'react'
import styles from './TodoList.module.scss'
import { TodoItem } from './TodoItem'
export const TodoListModules = ({ list }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Todo List Modules</h1>
			<ul className={styles.list}>
				{list.map((todo, index) => (
					// <TodoItem todo={todo.todo} id={todo.id} completed={todo.completed} />
					<TodoItem key={todo.id} {...todo} index={index} />
				))}
			</ul>
		</div>
	)
}
