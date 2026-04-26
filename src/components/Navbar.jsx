import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { count, setIsOpen } = useCart()

  const links = [
    { to: '/', label: 'Início' },
    { to: '/shop', label: 'Loja' },
    { to: '/about', label: 'Sobre' },
    { to: '/contact', label: 'Contato' },
  ]

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img src="/logo.jpeg" alt="Ateliê Mari Amorim – Fios de Afeto" className="navbar__logo" />
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link to="/shop" className="btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
            Ver Coleção
          </Link>
        </nav>

        <button
          className="navbar__cart"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir carrinho"
        >
          🛒
          {count > 0 && <span className="navbar__cart-badge">{count}</span>}
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
