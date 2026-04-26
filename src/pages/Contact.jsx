import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'general', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact">
      {/* Header */}
      <div className="page-header contact-header">
        <div className="container">
          <span className="contact__eyebrow">✦ Vamos conversar ✦</span>
          <h1 className="page-header__title">Entre em Contato</h1>
          <p className="page-header__sub">
            Pedidos personalizados, dúvidas ou só um oi — estou aqui e adoraria te ouvir.
          </p>
        </div>
      </div>

      <div className="container contact__content">
        {/* Info cards */}
        <div className="contact__info-grid">
          {[
            { icon: '📩', title: 'E-mail', value: 'marianesamorim@outlook.com' },
            { icon: '📱', title: 'Telefone / WhatsApp', value: '(11) 98458-5859' },
            { icon: '📸', title: 'Instagram', value: '@fiosdeafeto.by.mari' },
          ].map(({ icon, title, value }) => (
            <div key={title} className="contact__info-card">
              <span className="contact__info-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <span>🌸</span>
              <h2>Mensagem enviada!</h2>
              <p>Muito obrigada por entrar em contato. Responderei em até 48 horas com muito carinho.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Enviar outra mensagem</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h2>Envie uma mensagem</h2>
              <p className="contact__form-sub">Preencha o formulário e responderei pessoalmente.</p>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Seu nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ana Silva"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Seu e-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ana@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="type">Sobre o que é?</label>
                <select id="type" name="type" value={form.type} onChange={handleChange}>
                  <option value="general">Dúvida geral</option>
                  <option value="custom">Pedido personalizado</option>
                  <option value="wholesale">Atacado / parceria</option>
                  <option value="other">Outro assunto</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Me conta sua ideia, o que está procurando, ou só dá um oi…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact__submit">
                Enviar Mensagem 🌸
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
