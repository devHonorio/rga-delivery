export default function InputBento({ bento, setBento }) {
	return (
		<div className={`flex items-center `}>
			<label
				htmlFor='bento'
				className={`text-3xl font-semibold mr-4  cursor-pointer text-red-600`}>
				Bento cake
			</label>
			<input
				type='checkbox'
				name=''
				id='bento'
				checked={bento}
				className={`h-8 w-8 rounded-xl border border-orange-400 appearance-none  cursor-pointer bg-white`}
			/>
		</div>
	)
}
