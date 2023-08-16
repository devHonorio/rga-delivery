export default function InputBolos({ bento, pesoBolo, setPesoBolo }) {
	return (
		<div className={`flex flex-col  items-center gap-9`}>
			<label htmlFor='peso' className={styles.quantosQuilos}>
				Quantos quilos(kg) gostaria ?
			</label>
			<label
				htmlFor='peso'
				className={`${styles.containerInput} ${
					bento ? 'bg-gray-50' : 'bg-white'
				}`}>
				<input
					type='number'
					inputMode='numeric'
					step={0.1}
					min={1.5}
					max={6}
					id='peso'
					placeholder={`1,5`}
					className={`${styles.input}`}
					required
					disabled={bento}
					value={pesoBolo}
					onChange={(e) => {
						setPesoBolo(e.target.value)
					}}
				/>
				<span className='ml-auto bg-white peer-disabled:bg-gray-100 '>kg</span>
			</label>
		</div>
	)
}

const styles = {
	containerInput: `flex h-16 items-center rounded-2xl shadow-sm px-5 font-semibold text-xl w-full`,
	input: `w-1/3 outline-none bg-transparent disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
	quantosQuilos: `mt-10 text-center text-3xl font-medium animate-fade-left animate-duration-[400ms] animate-ease-in animate-fill-forwards`,
}
