export default function Quadrado({ formato, setFormato }) {
	return (
		<>
			<input
				type='radio'
				value='retangular'
				name='formato'
				id='retangular'
				className={`hidden`}
			/>
			<label htmlFor='retangular'>
				<div
					onClick={() => {
						setFormato('retangular')
					}}
					className={`h-24 w-24 border ${
						formato === 'retangular'
							? 'bg-orange-500 border-white'
							: 'border-orange-500 bg-white'
					}  rounded-xl flex items-center justify-center`}>
					<div
						className={`h-10 w-14 font-bold border ${
							formato === 'retangular'
								? 'border-white text-white'
								: 'border-orange-500'
						} rounded-lg flex justify-center items-center`}>
						Retangular
					</div>
				</div>
			</label>
		</>
	)
}
