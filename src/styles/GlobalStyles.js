import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  

`

export const Flex = styled.div`
	display: flex;
	min-height: 100vh;
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
