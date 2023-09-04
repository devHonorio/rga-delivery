import { createContext, useContext, useState } from 'react'
// const state = () => {
// 	const [state, setState] = useState({
// 		peso: 0,
// 		bento: false,
// 		recheioCheckd: false,
// 		formato: null,
// 	})

// 	return { setState, state }
// }

export const States = createContext()

export default function ContextStateBolos({ children }) {
	const [state, setState] = useState({
		peso: 0,
		bento: false,
		recheioCheckd: false,
		formato: null,
	})
	return (
		<States.Provider value={{ state, setState }}>{children}</States.Provider>
	)
}

export const useContextState = () => useContext(States)
