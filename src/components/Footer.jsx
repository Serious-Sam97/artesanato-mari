import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🎀 Mari<em>Dolls</em></span>
          <p>Feitas à mão com amor, uma boneca de cada vez.</p>
        </div>

        <nav className="footer__nav">
          <h4>Navegar</h4>
          <Link to="/">Início</Link>
          <Link to="/shop">Loja</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>

        <div className="footer__social">
          <h4>Siga por aí</h4>
          <div className="footer__social-links">
            <a href="#" aria-label="Instagram">📸 Instagram</a>
            <a href="#" aria-label="Pinterest">📌 Pinterest</a>
            <a href="#" aria-label="Etsy">🛍️ Etsy</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 MariDolls · Feito com ♥ pela Mari</p>
      </div>
    </footer>
  )
}
