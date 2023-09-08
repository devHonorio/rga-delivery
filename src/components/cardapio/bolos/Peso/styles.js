import tw from 'tailwind-styled-components'

export const SContainer = tw.div`flex flex-col items-center gap-6 ${({
	className,
}) => className}`

export const SOpemModalPeso = tw.button`flex px-20 shadow-sm  bg-white rounded-2xl py-5 active:bg-gray-100 ${({
	className,
}) => className}`
