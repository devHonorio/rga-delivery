import Peso from './Peso'
import InputRecheio from './InputRecheio'
import Formato from './Formato'

export default function FormBolos({ className }) {
	return (
		<form className={` mt-20 flex flex-col items-center gap-8  ${className}`}>
			<Peso className={``} />
			<InputRecheio className={`hidden`} />
			<Formato className={`hidden`} />
		</form>
	)
}
