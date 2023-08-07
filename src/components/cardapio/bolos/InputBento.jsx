export default function InputBento({ bento, setBento, setPesoBolo }) {
	return (
		<div className={`flex items-center `}>
			<label
				htmlFor='bento'
				className={`text-3xl font-semibold mr-4  cursor-pointer ${
					bento ? 'text-black' : 'text-red-600'
				}`}>
				Bento cake
			</label>
			<input
				type='checkbox'
				name=''
				id='bento'
				checked={bento}
				className={`appearance-none`}
				onChange={() => {
					setBento(!bento)
					setPesoBolo(0.6)
				}}
			/>
			<span
				type='checkbox'
				name=''
				id='bento'
				checked={bento}
				className={`h-8 w-8 rounded-xl border border-orange-400 appearance-none  cursor-pointer flex justify-center items-center text-white text-xl ${
					bento ? 'bg-orange-500' : 'bg-white'
				}`}>
				&#10003;
			</span>
		</div>
	)
}
