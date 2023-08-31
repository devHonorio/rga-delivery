export default function InputBento({ bento, setBento, setPesoBolo }) {
	return (
		<div className='flex items-center gap-3 cursor-pointer'>
			<label
				htmlFor='bento'
				className={` text-2xl font-semibold ${
					bento ? 'text-black' : 'text-red-600'
				}`}>
				Bento cake 600g {bento}
			</label>
			<span
				className={`h-8 w-8 rounded-xl border border-orange-400 appearance-none  cursor-pointer flex justify-center items-center text-white text-xl ${
					bento ? 'bg-orange-500' : 'bg-white'
				}`}>
				&#10003;
			</span>
			<input
				type='checkbox'
				name=''
				id='bento'
				className={`appearance-none`}
				onChange={(e) => {
					setBento(e.target.checked)
					setPesoBolo(0.6)
				}}
			/>
		</div>
	)
}
