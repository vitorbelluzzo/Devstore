/* eslint-disable prettier/prettier */
import { Header } from '@/components/header'
import { CartProvider } from '@/contex/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
    <div className="max-w-screen-xl mx-auto grid min-h-screen w-full grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
    </CartProvider>
  )
}
