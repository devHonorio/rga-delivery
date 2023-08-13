import tw from 'tailwind-styled-components'

export const Label = tw.label`font-medium group`

export const ContainerCard = tw.div`bg-white p-2 rounded-3xl flex flex-col items-center gap-2 shadow-sm md:p-3 hover:bg-orange-400 transition-all animate-fade-up animate-once animate-duration-[1s] animate-ease-in-out animate-normal cursor-pointer group `

export const Title = tw.h2`text-xs text-orange-500 font-bold pl-2 lg:text-base group-checked:text-white group-hover:text-white`

export const ContainerP = tw.p`text-sm opacity-70`

export const Price = tw.div`lg:text-xl group-hover:hidden h-8`

export const Selecionado = tw.span`text-green-400 font-semibold flex items-center gap-1`

export const ButtonsCard = tw.div`items-center font-semibold hidden group-hover:flex`

export const ButtonAddMenus = tw.div`border-2 w-6 h-8 flex justify-center items-center border-gray-900
md:w-8 font-bold
 ${({ left }) => (left ? 'rounded-l-xl' : 'rounded-r-xl')}
 `

export const Quantity = tw.input`border-y-2 w-6 h-8 border-gray-900 text-center placeholder:text-gray-900 bg-transparent`

export const BtnCarriho = tw.button`
h-8 w-8 rounded-xl
items-center justify-center
bg-white shadow-3xl
hidden group-hover:flex
active:bg-transparent active:border-white active:border
`
