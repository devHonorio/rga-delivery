import { useState } from 'react'

export default function InputBolos({ bento }) {
	const [peso, setPeso] = useState(1.5)
	return (
		<div className={`flex flex-col w-full items-center gap-9`}>
			<label
				htmlFor='peso'
				className='mt-10 text-center text-3xl font-semibold animate-fade-left animate-duration-[400ms] animate-ease-in animate-fill-forwards'>
				Quantos quilos(kg) gostaria ?
			</label>
			<label
				htmlFor='peso'
				className={`flex  rounded-3xl items-baseline shadow-md`}>
				<input
					type='number'
					inputMode='numeric'
					step={0.5}
					min={1.5}
					max={6}
					id='peso'
					placeholder={`1,5`}
					className={` font-semibold peer pl-7 text-3xl w-full py-4 outline-none rounded-l-3xl disabled:bg-gray-100 disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
					required
					disabled={bento}
					value={bento ? 0.6 : peso}
					onChange={(e) => setPeso(e.target.value)}
				/>
				<div className=' font-semibold  text-2xl pr-7 pt-6 pb-[1.3rem] bg-white text-gray-500 rounded-r-3xl peer-disabled:bg-gray-100 '>
					kg
				</div>
			</label>
		</div>
	)
}
