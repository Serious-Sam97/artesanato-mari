import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

const PIX_KEY = 'marianesamorim@outlook.com'
const BENEFICIARY = 'Mari Amorim'
const BANK = 'Nubank'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const fmt = (n) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const handleCopy = () => {
    navigator.clipboard.writeText(PIX_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleConfirm = () => {
    setConfirmed(true)
    clearCart()
  }

  if (items.length === 0 && !confirmed) {
    return (
      <div className="checkout checkout--empty">
        <div className="container checkout__empty-inner">
          <span>🛒</span>
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione artesanatos ao carrinho antes de finalizar o pedido.</p>
          <Link to="/shop" className="btn-primary">Ver Coleção</Link>
        </div>
      </div>
    )
  }

  if (confirmed) {
    return (
      <div className="checkout checkout--confirmed">
        <div className="container checkout__confirmed-inner">
          <div className="checkout__confetti">🎀✨🌸✨🎀</div>
          <h1>Pedido confirmado!</h1>
          <p>
            Obrigada pelo seu pedido! Assim que o pagamento PIX for identificado,
            a Mari entrará em contato para confirmar os detalhes do seu artesanato.
          </p>
          <div className="checkout__confirmed-info">
            <span>📩 marianesamorim@outlook.com</span>
            <span>📱 (11) 98458-5859</span>
            <span>⏱ Prazo de resposta: até 48 horas</span>
          </div>
          <Link to="/" className="btn-primary">Voltar para o início</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="page-header checkout-header">
        <div className="container">
          <span className="checkout__eyebrow">✦ Quase lá ✦</span>
          <h1 className="page-header__title">Finalizar Pedido</h1>
          <p className="page-header__sub">
            Revise seu pedido e realize o pagamento via PIX para confirmar.
          </p>
        </div>
      </div>

      <div className="container checkout__content">
        <div className="checkout__layout">

          {/* Order summary */}
          <div className="checkout__summary">
            <h2>Resumo do Pedido</h2>

            <ul className="checkout__items">
              {items.map((item) => (
                <li key={item.cartKey} className="checkout__item">
                  <div
                    className="checkout__item-thumb"
                    style={{ background: item.selectedColor.hex }}
                  >
                    <span>{item.emoji}</span>
                  </div>
                  <div className="checkout__item-info">
                    <p className="checkout__item-name">{item.name}</p>
                    <p className="checkout__item-meta">
                      <span
                        className="checkout__color-dot"
                        style={{ background: item.selectedColor.hex }}
                      />
                      {item.selectedColor.name} · {item.selectedModel}
                    </p>
                    <p className="checkout__item-qty">Qtd: {item.qty}</p>
                  </div>
                  <p className="checkout__item-subtotal">
                    {fmt(item.priceNum * item.qty)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="checkout__totals">
              <div className="checkout__totals-row">
                <span>Subtotal</span>
                <span>{fmt(total)}</span>
              </div>
              <div className="checkout__totals-row">
                <span>Frete</span>
                <span className="checkout__free">A combinar</span>
              </div>
              <div className="checkout__totals-row checkout__totals-row--total">
                <span>Total</span>
                <strong>{fmt(total)}</strong>
              </div>
            </div>
          </div>

          {/* PIX Payment */}
          <div className="checkout__pix">
            <div className="checkout__pix-header">
              <span className="checkout__pix-logo">PIX</span>
              <h2>Pague com PIX</h2>
            </div>

            <p className="checkout__pix-sub">
              Pagamento instantâneo, seguro e sem taxas. Após o envio, seu pedido é confirmado em minutos.
            </p>

            {/* QR Code visual */}
            <div className="checkout__qr-wrap">
              <div className="checkout__qr">
                <QRCodeDecor />
              </div>
              <p className="checkout__qr-hint">Escaneie com o app do seu banco</p>
            </div>

            <div className="checkout__divider">
              <span>ou copie a chave PIX</span>
            </div>

            {/* PIX key copy */}
            <div className="checkout__key-box">
              <div className="checkout__key-info">
                <span className="checkout__key-type">E-mail</span>
                <span className="checkout__key-value">{PIX_KEY}</span>
              </div>
              <button
                className={`checkout__copy-btn ${copied ? 'checkout__copy-btn--copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? '✓ Copiado!' : 'Copiar'}
              </button>
            </div>

            {/* Beneficiary info */}
            <div className="checkout__beneficiary">
              <div className="checkout__ben-row">
                <span>Beneficiária</span>
                <strong>{BENEFICIARY}</strong>
              </div>
              <div className="checkout__ben-row">
                <span>Banco</span>
                <strong>{BANK}</strong>
              </div>
              <div className="checkout__ben-row checkout__ben-row--amount">
                <span>Valor</span>
                <strong>{fmt(total)}</strong>
              </div>
            </div>

            {/* Steps */}
            <ol className="checkout__steps">
              <li><strong>1.</strong> Abra o app do seu banco</li>
              <li><strong>2.</strong> Acesse a área PIX e escolha <em>Pagar</em></li>
              <li><strong>3.</strong> Escaneie o QR Code ou cole a chave</li>
              <li><strong>4.</strong> Confirme o valor de <strong>{fmt(total)}</strong></li>
              <li><strong>5.</strong> Clique no botão abaixo após pagar</li>
            </ol>

            <button className="btn-primary checkout__confirm-btn" onClick={handleConfirm}>
              Já realizei o pagamento ✓
            </button>

            <p className="checkout__disclaimer">
              Após confirmar, a Mari receberá uma notificação e entrará em contato em até 48h para combinar a entrega.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

function QRCodeDecor() {
  return (
    <svg className="checkout__qr-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Corner squares */}
      <rect x="10" y="10" width="56" height="56" rx="6" fill="none" stroke="#4a3240" strokeWidth="6"/>
      <rect x="22" y="22" width="32" height="32" rx="3" fill="#4a3240"/>

      <rect x="134" y="10" width="56" height="56" rx="6" fill="none" stroke="#4a3240" strokeWidth="6"/>
      <rect x="146" y="22" width="32" height="32" rx="3" fill="#4a3240"/>

      <rect x="10" y="134" width="56" height="56" rx="6" fill="none" stroke="#4a3240" strokeWidth="6"/>
      <rect x="22" y="146" width="32" height="32" rx="3" fill="#4a3240"/>

      {/* Data modules */}
      <rect x="80" y="10" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="96" y="10" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="112" y="10" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="80" y="26" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="112" y="26" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="96" y="42" width="10" height="10" rx="2" fill="#4a3240"/>

      <rect x="10" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="26" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="10" y="96" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="42" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="26" y="96" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="10" y="112" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="42" y="96" width="10" height="10" rx="2" fill="#4a3240"/>

      <rect x="80" y="80" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="96" y="80" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="112" y="80" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="80" y="96" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="112" y="96" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="80" y="112" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="96" y="112" width="10" height="10" rx="2" fill="#e07ca0"/>
      <rect x="112" y="112" width="10" height="10" rx="2" fill="#e07ca0"/>

      <rect x="134" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="150" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="166" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="180" y="80" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="134" y="96" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="166" y="96" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="150" y="112" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="180" y="112" width="10" height="10" rx="2" fill="#4a3240"/>

      <rect x="80" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="96" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="80" y="150" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="112" y="150" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="96" y="166" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="80" y="180" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="112" y="180" width="10" height="10" rx="2" fill="#4a3240"/>

      <rect x="134" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="150" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="166" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="180" y="134" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="134" y="150" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="166" y="150" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="150" y="166" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="134" y="180" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="166" y="180" width="10" height="10" rx="2" fill="#4a3240"/>
      <rect x="180" y="166" width="10" height="10" rx="2" fill="#4a3240"/>
    </svg>
  )
}
