import tw from 'tailwind-styled-components'

export const SContainer = tw.div`
fixed bottom-0 left-0 right-0
flex flex-col items-end
bg-orange-50
`

export const SSubtotal = tw.p`text-lg font-semibold text-gray-900`

export const SEntregaContainer = tw.div`flex items-center gap-2`

export const SEntrega = tw.div`text-md font-medium text-gray-500`

export const STotal = tw.p`mt-5 text-2xl font-bold`

export const SValor = tw.span`text-orange-400`
