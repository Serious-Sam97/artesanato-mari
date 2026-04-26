import { createContext, useContext, useReducer, useState } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find((i) => i.cartKey === action.item.cartKey)
      if (existing) {
        return state.map((i) =>
          i.cartKey === action.item.cartKey ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter((i) => i.cartKey !== action.cartKey)
    case 'SET_QTY':
      if (action.qty < 1) return state.filter((i) => i.cartKey !== action.cartKey)
      return state.map((i) =>
        i.cartKey === action.cartKey ? { ...i, qty: action.qty } : i
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (doll, selectedColor, selectedModel) => {
    const cartKey = `${doll.id}__${selectedColor.name}__${selectedModel}`
    dispatch({ type: 'ADD', item: { ...doll, cartKey, selectedColor, selectedModel } })
    setIsOpen(true)
  }

  const removeItem = (cartKey) => dispatch({ type: 'REMOVE', cartKey })
  const setQty = (cartKey, qty) => dispatch({ type: 'SET_QTY', cartKey, qty })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.priceNum * i.qty, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, setQty, clearCart, count, total, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
