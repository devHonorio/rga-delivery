import { createContext, useContext, useEffect, useState } from 'react'

const Carrinho = createContext()

export default function ProviderCarrinho({ children }) {
	const [carrinho, setCarrinho] = useState({})

	const getStorage = () => {
		const storage = localStorage.getItem('carrinho')

		if (storage) {
			setCarrinho(...storage)
		}
	}
	useEffect(getStorage, [])
	return (
		<Carrinho.Provider value={{ carrinho, setCarrinho }}>
			{children}
		</Carrinho.Provider>
	)
}

export const useCarrinho = () => useContext(Carrinho)
