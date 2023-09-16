export const useCarrinho = () => {
	const getStorage = () => {
		if (typeof window !== 'undefined') {
			const storage = localStorage.getItem('carrinho')
			const storageJS = JSON.parse(storage)
			return storageJS
		}
	}
	const setStorage = (state) => {
		const stateJson = JSON.stringify(state)
		localStorage.setItem('carrinho', stateJson)
	}

	return { setStorage, getStorage }
}
