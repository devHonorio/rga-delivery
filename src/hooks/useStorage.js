import { useEffect } from 'react'

export const useCarrinho = () => {
	useEffect(() => {}, [])
	if (typeof window !== 'undefined') {
		const getStorage = () => {
			const storage = localStorage.getItem('carrinho')
			const storageJS = JSON.parse(storage)
			return storageJS
		}
		const setStorage = (state) => {
			const stateJson = JSON.stringify(state)
			localStorage.setItem('carrinho', stateJson)
		}

		return { setStorage, getStorage }
	}
}
