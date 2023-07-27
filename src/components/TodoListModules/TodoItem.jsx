import React from 'react'
import s from './TodoItem.module.scss'
import clsx from 'clsx'
export const TodoItem = ({ todo, completed, id, index }) => {
	return (
		// <li className={`${styles.card} ${styles.italic}`}>
		<li
			className={clsx(s.card, s.italic, {
				[s.completed]: index % 2 === 0,
				// [styles.uncompleted]: !completed,
			})}
		>
			<span>
				{index + 1}. {todo}
			</span>
			<button className={s.deleteBtn}>Delete</button>
		</li>
	)
}
