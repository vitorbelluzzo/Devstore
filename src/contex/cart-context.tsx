'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContexType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContex = createContext({} as CartContexType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [CartItems, setCartItem] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItem((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContex.Provider value={{ items: CartItems, addToCart }}>
      {children}
    </CartContex.Provider>
  )
}

export const useCart = () => useContext(CartContex)
