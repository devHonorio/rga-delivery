import tw from 'tailwind-styled-components'

export const SLabel = tw.label`font-medium group ${({ className }) =>
	className}`

export const SContainer = tw.div`bg-white p-2 rounded-3xl flex flex-col items-center gap-2 shadow-sm md:p-3 hover:bg-orange-400 data-[checked=true]:bg-amber-950 transition-all animate-fade-up animate-once animate-duration-[1s] animate-ease-in-out animate-normal cursor-pointer ${({
	className,
}) => className}`

export const STitle = tw.h2`text-xs text-orange-500 font-bold pl-2 lg:text-base group-checked:text-white group-hover:text-white ${({
	className,
}) => className}`

export const SCheck = tw.span`text-green-400 font-semibold flex items-center gap-1 ${({
	className,
}) => className}`
