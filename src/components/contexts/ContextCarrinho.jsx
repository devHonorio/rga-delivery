import { createContext, useContext, useEffect, useState } from 'react'

const Carrinho = createContext()

export default function ProviderCarrinho({ children }) {
	const [carrinho, setCarrinho] = useState({
		bolos: [],
		docesTradicionais: [],
		docesGourmet: [],
		docesFinos: [],
		salgados: [],
		bebidas: [],
	})

	const getStorage = () => {
		const carToJson = JSON.stringify(carrinho)
		localStorage.setItem('carrinho', carToJson)
	}
	useEffect(getStorage, [carrinho])
	return (
		<Carrinho.Provider value={{ carrinho, setCarrinho }}>
			{children}
		</Carrinho.Provider>
	)
}

export const useCarrinho = () => useContext(Carrinho)
