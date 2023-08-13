import tw from 'tailwind-styled-components'

export const MiniButton = tw.button`flex text-xs items-center  py-2 px-3 rounded-2xl gap-2 shadow-md font-medium hover:bg-orange-400 md:text-base`

export const Social = tw.a`h-10 w-10 bg-white flex justify-center items-center rounded-xl shadow-md hover:bg-orange-400`

export const ButtonIcon = tw.div`flex items-center  bg-white md:py-2 md:px-3 rounded-2xl gap-3 shadow-md font-medium`

export const DivIcon = tw.div`md:bg-orange-400 bg-white p-2 rounded-xl`

export const Content = tw.div`hidden md:block md:text-sm`

export const Button = tw.button`py-3 px-5 rounded-2xl font-semibold text-sm animate-fade-right animate-once animate-duration-[900ms] animate-ease-in-out`
