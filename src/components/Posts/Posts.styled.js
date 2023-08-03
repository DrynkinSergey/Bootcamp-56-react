import { styled } from 'styled-components'

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	padding: 0;
`
export const StyledPost = styled.li`
	list-style: none;
	border: 1px solid black;
	border-radius: ${({ theme }) => theme.radius.default};
	box-shadow: ${({ theme }) => theme.shadows.default};
	padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
`
export const StyledTitle = styled.h3`
	font-style: italic;
`
export const StyledTags = styled.div`
	display: flex;
	gap: 20px;
	padding: 20px 0;
`
export const Tag = styled.span`
	border: 1px solid black;
	border-radius: ${({ theme }) => theme.radius.default};
	box-shadow: ${({ theme }) => theme.shadows.default};
	padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
`
export const Flex = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: flex-end;
`
