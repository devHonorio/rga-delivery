import { createContext, useContext, useState } from 'react'

export const Contador = createContext()
export default function ContextCotado({ children }) {
	const [cont, setCont] = useState(-1)
	return (
		<Contador.Provider value={{ cont, setCont }}>{children}</Contador.Provider>
	)
}

export const useContextCont = () => useContext(Contador)
