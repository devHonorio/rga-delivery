import tw from 'tailwind-styled-components'

export const SContainer = tw.div`flex items-center gap-3 cursor-pointer ${({
	className,
}) => className}`

export const SLabel = tw.label`text-2xl font-semibold ${({ className }) =>
	className}`
      export const SCheckCustom = tw.span`h-8 w-8 rounded-xl border border-orange-400 appearance-none  cursor-pointer flex justify-center items-center text-white text-xl ${({
            className,
      }) => className}`
      