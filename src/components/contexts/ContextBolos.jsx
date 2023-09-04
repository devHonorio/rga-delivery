import { createContext, useContext } from 'react'

const Bolos = createContext()

export default function ProviderBolos({ children }) {
	return <Bolos.Provider value={[]}>{children}</Bolos.Provider>
}

export const useContextBolos = () => useContext(Bolos)
