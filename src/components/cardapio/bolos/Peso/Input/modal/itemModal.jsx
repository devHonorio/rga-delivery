import { useContextState } from '@/components/contexts/ContextStatesBolo'
import { SText } from './styles'

export default function ItemModal({ peso, setActive, children }) {
	const { state, setState } = useContextState()
	const handlePeso = () => {
		setState({ ...state, peso, bento: peso == 0.6 ? true : false })
		setActive(false)
	}
	return <SText onClick={handlePeso}>{children}</SText>
}
