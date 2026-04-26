import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, removeItem, setQty, clearCart, total, isOpen, setIsOpen } = useCart()

  const fmt = (n) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'cart-overlay--visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <h2>🛒 Meu Carrinho</h2>
          <button
            className="cart-drawer__close"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <span>🎀</span>
            <p>Seu carrinho está vazio.</p>
            <button className="btn-primary" onClick={() => setIsOpen(false)}>
              Ver Coleção
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.cartKey} className="cart-item">
                  <div
                    className="cart-item__thumb"
                    style={{ background: item.selectedColor.hex }}
                  >
                    <span>{item.emoji}</span>
                  </div>

                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__meta">
                      <span
                        className="cart-item__color-dot"
                        style={{ background: item.selectedColor.hex }}
                        title={item.selectedColor.name}
                      />
                      {item.selectedColor.name} · {item.selectedModel}
                    </p>
                    <p className="cart-item__unit">{fmt(item.priceNum)} / un.</p>
                  </div>

                  <div className="cart-item__controls">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => setQty(item.cartKey, item.qty - 1)}
                      aria-label="Diminuir quantidade"
                    >
                      −
                    </button>
                    <span className="cart-item__qty">{item.qty}</span>
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => setQty(item.cartKey, item.qty + 1)}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item__right">
                    <p className="cart-item__subtotal">{fmt(item.priceNum * item.qty)}</p>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.cartKey)}
                      aria-label="Remover item"
                    >
                      🗑
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total</span>
                <strong>{fmt(total)}</strong>
              </div>

              <Link
                to="/contact"
                className="btn-primary cart-drawer__checkout"
                onClick={() => setIsOpen(false)}
              >
                Finalizar Pedido
              </Link>

              <button className="cart-drawer__clear" onClick={clearCart}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
