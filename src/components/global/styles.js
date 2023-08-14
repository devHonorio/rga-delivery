import tw from 'tailwind-styled-components'

export const Nav = tw.nav`
flex items-center w-full flex-col justify-center gap-5 z-20
absolute top-0 left-0 right-0 bottom-0 
bg-white
lg:flex lg:justify-around lg:static lg:bg-inherit lg:flex-row
animate-fade-up animate-once animate-duration-500 animate-ease-in-out
`

export const Button = tw.button`lg:hidden absolute top-7 right-7`

export const LayoutContainer = tw.div`xl:w-7/12 w-10/12 m-auto`

export const Header = tw.header`lg:py-10 py-5 flex justify-between`

export const ContainerMenu = tw.div`flex items-center gap-4`

export const Footer = tw.footer`py-16 bg-orange-100`

export const ContainerLogo = tw.div`flex flex-col justify-center items-center gap-4 mb-10`

export const Title = tw.span`lg:text-2xl text-lg font-medium`

export const InformacoesContainer = tw.div`flex lg:flex-row flex-col justify-around items-baseline lg:items-center  w-3/4 mx-auto gap-6`

export const ContainerSocial = tw.div`flex items-center justify-center gap-4 mt-20`

export const FloatCarrinho = tw.div`
h-16 w-16 bg-orange-400 rounded-3xl
flex justify-center items-center
`
export const cont = tw.div`
      p-2 rounded-full
      bg-white
      text-black text-xs font-semibold
      absolute right-0 -top-3
`
