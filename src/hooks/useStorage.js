export const useCarrinho = () => {
	const setStorage = (state) => {
		const stateJson = JSON.stringify(state)
		localStorage.setItem('carrinho', stateJson)
	}

	const getStorage = () => {
		const storage = localStorage.getItem('carrinho')
		const storageJS = JSON.parse(storage)
		return storageJS
	}

	return { setStorage, getStorage }
}
