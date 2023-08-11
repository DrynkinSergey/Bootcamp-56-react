import React, { createContext, useState } from 'react'
export const AuthContext = createContext()
export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const login = name => setUser(name)
	const logout = () => setUser('')
	const contextValue = {
		login,
		user,
		logout,
	}

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
