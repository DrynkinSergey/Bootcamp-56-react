import React from 'react'
import styles from './TodoItem.module.scss'
import clsx from 'clsx'
export const TodoItem = ({ todo, completed, id, index }) => {
	return (
		// <li className={`${styles.card} ${styles.italic}`}>
		<li
			className={clsx(styles.card, styles.italic, {
				[styles.completed]: completed,
				[styles.uncompleted]: !completed,
			})}
		>
			<span>
				{index + 1}. {todo}
			</span>
			<button className={styles.deleteBtn}>Delete</button>
		</li>
	)
}
