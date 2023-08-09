import { styled } from 'styled-components'
import { useMyContext } from '../../hooks/useMyContext'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'
import { useModal } from '../../hooks/useModal'

export const Header = () => {
	const { logout, user } = useMyContext()
	const { isOpen, closeModal, openModal } = useModal()

	return (
		<StyledHeader>
			<h2>Logo</h2> <button onClick={openModal}>Open</button>
			<div>
				<h2>{user}</h2>
				<button onClick={logout}>Exit</button>
			</div>
			{isOpen && <Modal onClose={closeModal}>Hello from header</Modal>}
		</StyledHeader>
	)
}

export const StyledHeader = styled.header`
	padding: 30px;
	background-color: teal;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	& div {
		display: flex;
		gap: 20px;
		& button {
			padding: 2px 35px;
		}
	}
`
