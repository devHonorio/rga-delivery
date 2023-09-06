import { createContext, useContext, useState } from 'react'

const Bolo = createContext()

export default function ProviderBolo({ children }) {
	const [bolo, setBolo] = useState({})
	return <Bolo.Provider value={{ bolo, setBolo }}>{children}</Bolo.Provider>
}

export const useContextBolo = () => useContext(Bolo)
