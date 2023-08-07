import { useState } from 'react'

export default function InputBolos({ bento, pesoBolo, setPesoBolo }) {
	return (
		<div className={`flex flex-col w-full items-center gap-9`}>
			<label
				htmlFor='peso'
				className='mt-10 text-center text-3xl font-semibold animate-fade-left animate-duration-[400ms] animate-ease-in animate-fill-forwards'>
				Quantos quilos(kg) gostaria ?
			</label>
			<label
				htmlFor='peso'
				className={`flex h-14 w-full items-center rounded-2xl px-7 font-semibold shadow-sm ${
					bento ? 'bg-gray-50' : 'bg-white'
				}`}>
				<input
					type='number'
					inputMode='numeric'
					step={0.5}
					min={1.5}
					max={6}
					id='peso'
					placeholder={`1,5`}
					className={`text-2xl  flex-1 outline-none bg-transparent disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
					required
					disabled={bento}
					value={pesoBolo}
					onChange={(e) => {
						setPesoBolo(e.target.value)
					}}
				/>
				<span className='peer-disabled:bg-gray-100 '>kg</span>
			</label>
		</div>
	)
}
