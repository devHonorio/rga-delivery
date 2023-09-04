import tw from 'tailwind-styled-components'

export const SButton = tw.button`py-3 px-5 rounded-2xl font-semibold text-sm animate-fade-right animate-once animate-duration-[900ms] animate-ease-in-out bg-orange-400 ${({
	className,
}) => className}`
