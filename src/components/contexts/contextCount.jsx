import { createContext, useContext, useState } from 'react'

const CountItemsCarrinho = createContext()

export function ProviderCountItemsCarrinho({ children }) {
	const [count, setCount] = useState(0)
	return (
		<CountItemsCarrinho.Provider value={{ count, setCount }}>
			{children}
		</CountItemsCarrinho.Provider>
	)
}

export const useContextCountItemsCarrinho = () => {
	const { count, setCount } = useContext(CountItemsCarrinho)
	return { count, setCount }
}
