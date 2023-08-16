import Bolinha from './Bolinha'

export default function HeaderCarrinho({ isActive }) {
	return (
		<div className={`flex py-10 justify-between`}>
			<div className={``}>
				<div className={`flex items-center`}>
					<Bolinha
						content={1}
						divider={'bg-orange-400'}
						className={`bg-orange-400`}
					/>
					<Bolinha
						content={2}
						divider={isActive > 1 ? 'bg-orange-400' : 'bg-gray-300'}
						className={isActive > 1 ? 'bg-orange-400' : 'bg-white'}
					/>
					<Bolinha
						content={3}
						className={isActive > 2 ? 'bg-orange-400' : 'bg-white'}
					/>
				</div>
				<p className='font-bold mt-6 text-xl'>Seu carrinho:</p>
			</div>

			<button
				onClick={() => history.back()}
				className='flex items-center justify-center rounded-2xl font-semibold text-gray-600 shadow-md bg-white w-24 h-12'>
				Fechar
			</button>
		</div>
	)
}
