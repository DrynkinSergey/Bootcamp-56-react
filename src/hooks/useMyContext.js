import { useContext } from 'react'
import { MyContext } from '../store/context/ContextProvider'

export const useMyContext = () => useContext(MyContext)
