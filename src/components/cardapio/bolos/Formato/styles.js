import tw from 'tailwind-styled-components'

export const SContainer = tw.div`flex flex-col gap-10  xl:w-7/12 w-10/12 m-auto ${({
	className,
}) => className}`

export const SUl = tw.div`flex flex-col gap-2 ${({ className }) => className}`

export const SLi = tw.div`text-gray-800 ${({ className }) => className}`
