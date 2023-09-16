import tw from 'tailwind-styled-components'

export const SContainer = tw.div`
flex items-center
`

export const SCircle = tw.div`
h-10 w-10 rounded-full flex justify-center items-center shadow-md bg-white
data-[isactive=true]:bg-orange-400
`

export const SContent = tw.div`
text-lg font-semibold text-gray-800
`

export const SDivider = tw.div`
w-4 h-[2.9px] 
bg-gray-200 data-[divider=orange]:bg-orange-400
`
