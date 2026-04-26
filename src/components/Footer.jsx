import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpeg" alt="Ateliê Mari Amorim – Fios de Afeto" className="footer__logo-img" />
          <p>Feito à mão com amor, um artesanato de cada vez.</p>
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
            <a
              href="https://www.instagram.com/fiosdeafeto.by.mari"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 @fiosdeafeto.by.mari
            </a>
            <a href="mailto:marianesamorim@outlook.com" aria-label="E-mail">
              📩 marianesamorim@outlook.com
            </a>
            <a href="tel:+5511984585859" aria-label="Telefone">
              📱 (11) 98458-5859
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Ateliê Mari Amorim · Fios de Afeto · Feito com ♥ pela Mari</p>
      </div>
    </footer>
  )
}
