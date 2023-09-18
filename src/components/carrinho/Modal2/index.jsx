import Footer from '../Layout/FooterCarrinho'
import { SButton } from '@/components/@ui/Buton'
import { SForm } from './styles'

import { useRef, useState } from 'react'
import { SInputCheckBox } from '@/components/@ui/InputCheckBox'
import { SInputData } from '@/components/@ui/InputData'
import { useCarrinho } from '@/hooks/useStorage'
import { InputCarrinho } from './InputCarrinho'
import { TextArea } from './TextArea'

export default function Modal2({ className, setIsActive }) {
	const [entrega, setEntrega] = useState(false)
	const refName = useRef()
	const refData = useRef()
	const reftime = useRef()
	const refTextArea = useRef()
	const refRua = useRef()
	const refNumero = useRef()
	const refBairro = useRef()
	const refCidade = useRef()

	const { getStorage, setStorage } = useCarrinho()
	const enviar = (e) => {
		const isEntrega = () => {
			if (entrega) {
				return {
					rua: refRua.current.value,
					number: refNumero.current.value,
					bairro: refBairro.current.value,
					cidade: refCidade.current.value,
				}
			} else {
				return false
			}
		}

		e.preventDefault()

		setStorage({
			...getStorage(),
			name: refName.current.value,
			date: refData.current.value,
			time: reftime.current.value,
			entrega: isEntrega(),
			observacoes: refTextArea.current.value,
		})

		setIsActive(3)
	}
	return (
		<SForm className={`${className}`} onSubmit={enviar}>
			<InputCarrinho label={'Nome completo:'} ref={refName} />

			<div className='flex flex-col gap-5 md:flex-row'>
				<InputCarrinho
					type='date'
					id='data-hora'
					ref={refData}
					required
					label='Data'
				/>
				<InputCarrinho
					type='time'
					min='07:00'
					max='19:00'
					ref={reftime}
					required
					label='Hora'
				/>
			</div>

			<TextArea
				ref={refTextArea}
				label='Observações'
				description='Aqui você pode colocar alguma observação'
			/>
			<div className='flex items-center gap-2 text-lg'>
				<SInputCheckBox
					id='entrega'
					type='checkbox'
					checked={entrega}
					onChange={(e) => setEntrega(e.target.checked)}
				/>
				<label htmlFor='entrega' className='border-b-2 border-orange-400'>
					Entrega
				</label>
			</div>
			{entrega && (
				<>
					<div className='flex flex-col gap-5 md:flex-row'>
						<InputCarrinho
							label={'Endereço/Rua:'}
							className={'md:w-full'}
							ref={refRua}
						/>
						<InputCarrinho
							label={'Número:'}
							type={'number'}
							typeOf={'numeric'}
							className={'md:w-1/3'}
							ref={refNumero}
						/>
					</div>
					<InputCarrinho label={'Bairro:'} ref={refBairro} />
					<InputCarrinho label={'Cidade:'} ref={refCidade} />
				</>
			)}

			<div className='mt-5 mb-7 flex gap-4 justify-end '>
				<SButton
					className='bg-white'
					onClick={() => setIsActive(1)}
					type={'button'}>
					Voltar
				</SButton>
				<SButton type={'submit'}>Avançar</SButton>
			</div>
		</SForm>
	)
}
