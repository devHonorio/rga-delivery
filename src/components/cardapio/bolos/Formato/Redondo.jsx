export default function Redondo({ formato, setFormato }) {
	return (
		<div>
			<input type='radio' name='formato' id='redondo' className={`hidden`} />
			<label htmlFor='redondo'>
				<div
					onClick={() => {
						setFormato('redondo')
					}}
					className={`${styles.container} ${
						formato === 'redondo'
							? 'bg-orange-500 border-white'
							: 'border-orange-500 bg-white'
					}`}>
					<div
						className={`${styles.content} ${
							formato === 'redondo'
								? 'border-white text-white'
								: 'border-orange-500'
						}`}>
						Redondo
					</div>
				</div>
			</label>
		</div>
	)
}

const styles = {
	container: `h-24 w-24 border  rounded-xl flex items-center justify-center`,
	content: `h-16 w-16 font-bold border border-orange-500 rounded-full flex justify-center items-center`,
}
