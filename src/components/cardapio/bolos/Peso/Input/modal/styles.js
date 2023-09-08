import tw from 'tailwind-styled-components'

export const SContExtern = tw.div`fixed left-0 top-0 right-0 bottom-0 backdrop-blur-md bg-gray-400 bg-opacity-40 z-40 flex justify-center items-center ${({
	className,
}) =>
	className} data-[active=false]:hidden animate-fade animate-once animate-duration-700 animate-ease-in-out`

export const SContainer = tw.div` h-72 w-72 rounded-2xl bg-white divide-y  overflow-y-scroll scrollbar-none md:w-96 md:h-96 lg:w-3/5 ${({
	className,
}) =>
	className} animate-jump-in animate-once animate-duration-500 animate-ease-in-out`

export const SText = tw.p`px-4 text-center w-full py-3 hover:bg-orange-400 hover:text-white ${({
	className,
}) => className}`