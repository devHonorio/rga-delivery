import tw from 'tailwind-styled-components'

export const SContainer = tw.div`bg-orange-50 flex gap-5 py-5 px-2 ${({
	className,
}) => className}`

export const SContainerPriceTitle = tw.p`font-semibold text-sm ${({
	className,
}) => className}`

export const SPrice = tw.p`text-lg font-bold text-orange-400 ${({
	className,
}) => className}`

export const SContainerButtons = tw.div`flex flex-col md:gap-4 md:flex-row-reverse md:items-center items-end justify-around ${({
	className,
}) => className}`

export const BtnRemove = tw.button`
      h-6 w-6 bg-red-500 rounded-lg 
      flex justify-center items-center
      font-black text-white
`
