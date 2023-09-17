import { SButton } from '@/components/@ui/Buton'
import Layout from '@/components/global/Layout'
import { useRef } from 'react'

export default function Teste() {
	const refText = useRef()
	return (
		<Layout>
			<input type='text' ref={refText} />
			<SButton
				type='button'
				onClick={() => {
					console.log(refText.current.value)
				}}>
				Teste
			</SButton>
		</Layout>
	)
}
