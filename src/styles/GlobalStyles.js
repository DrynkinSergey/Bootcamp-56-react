import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  

`

export const Flex = styled.div`
	display: flex;
	min-height: ${props => props.$height || '100vh'};
	gap: ${props => props.$gap || '10px'};
	flex-direction: ${props => props.$direction || 'row'};
	align-items: ${props => props.$items || 'stretch'};
	justify-content: ${props => props.$justify || 'stretch'};
`
export const Box = styled.div`
	height: 100px;
	width: 100px;
	background-color: ${props => props.$bg || 'black'};
`
export const Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	color: ${props => props.$color || 'inherit'};
	background-color: ${props => props.$bg || 'inherit'};
	box-shadow: ${({ theme }) => theme.shadows.default};
	&:hover {
		cursor: pointer;
		background-color: lightgoldenrodyellow;
	}
`
