import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const toggle = () => setIsOpen(prev => !prev)
	return { isOpen, toggle, openModal, closeModal }
}
