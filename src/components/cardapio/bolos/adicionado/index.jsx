import Image from 'next/image'

import { SButton } from '@/components/@ui/Buton'
import { Cart } from '@/components/comum/Icons'

export default function Adicionado({ nav, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className='flex items-center flex-wrap'>
        <h1 className={`${styles.h1}`}>Pedido adicionado ao carrinho</h1>
        <Cart className='h-10 w-10 ' />
      </div>

      <Image
        alt='Sucesso'
        width={300}
        height={300}
        src={'/sucesso.jpg'}
        className='h-52 w-52 self-center border-2 border-orange-400 animate-jump animate-duration-[1s]'
      />
      <SButton
        type='button'
        onClick={() => {
          nav('novo-bolo')
        }}>
        Pedir mais um bolo
      </SButton>
    </div>
  )
}

const styles = {
  h1: 'text-3xl font-medium md:text-5xl',
  container: 'py-20 flex flex-col gap-5 items-center justify-center',
}
