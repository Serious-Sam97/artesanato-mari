import { useState, useEffect } from 'react'
import './FeedbackSection.css'

const STORAGE_KEY = 'maridolls_reviews'

const initialReviews = [
  { id: 1, name: 'Laura M.', rating: 5, text: 'O artesanato que recebi é simplesmente de tirar o fôlego. Dá para sentir o amor em cada ponto. Minha filha não larga mais!', date: '2025-03-12' },
  { id: 2, name: 'Ana R.', rating: 5, text: 'A Mari nos presenteou com algo verdadeiramente único. Um artesanato personalizado da nossa filha — ela chorou de alegria quando abriu.', date: '2025-04-01' },
  { id: 3, name: 'Sofia T.', rating: 5, text: 'A qualidade é incrível. Pedi como presente de casamento e todo mundo perguntou onde encontrei. Com certeza vou pedir de novo!', date: '2025-04-18' },
]

function StarSelector({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="star-selector" role="group" aria-label="Sua avaliação">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`star-selector__star ${n <= (hovered || value) ? 'star-selector__star--lit' : ''}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          aria-label={`${n} estrela${n > 1 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const date = new Date(review.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })
  return (
    <div className="review-card">
      <div className="review-card__stars">
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      <p className="review-card__text">"{review.text}"</p>
      <div className="review-card__footer">
        <span className="review-card__name">— {review.name}</span>
        <span className="review-card__date">{date}</span>
      </div>
    </div>
  )
}

export default function FeedbackSection() {
  const [reviews, setReviews] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : initialReviews
    } catch {
      return initialReviews
    }
  })

  const [form, setForm] = useState({ name: '', rating: 0, text: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  }, [reviews])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setError('Por favor, informe seu nome.')
    if (form.rating === 0) return setError('Selecione uma avaliação de 1 a 5 estrelas.')
    if (!form.text.trim()) return setError('Escreva um comentário antes de enviar.')

    const newReview = {
      id: Date.now(),
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString().split('T')[0],
    }
    setReviews((prev) => [newReview, ...prev])
    setForm({ name: '', rating: 0, text: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : '—'

  return (
    <section className="feedback" id="avaliacoes">
      <div className="container">
        <p className="section-subtitle">✦ O que dizem nossas clientes ✦</p>
        <h2 className="section-title">Avaliações</h2>

        {/* Summary bar */}
        <div className="feedback__summary">
          <div className="feedback__avg">
            <span className="feedback__avg-number">{avg}</span>
            <span className="feedback__avg-stars">{'★'.repeat(Math.round(Number(avg)))}{'☆'.repeat(5 - Math.round(Number(avg)))}</span>
            <span className="feedback__avg-count">{reviews.length} avaliação{reviews.length !== 1 ? 'ões' : ''}</span>
          </div>
        </div>

        <div className="feedback__layout">
          {/* Reviews list */}
          <div className="feedback__reviews">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>

          {/* Form */}
          <div className="feedback__form-wrap">
            <h3>Deixe sua avaliação</h3>
            <p className="feedback__form-sub">Já recebeu um artesanato? Conta pra gente! 🌸</p>

            {submitted ? (
              <div className="feedback__success">
                <span>🎀</span>
                <p>Obrigada pelo carinho! Sua avaliação foi publicada.</p>
              </div>
            ) : (
              <form className="feedback__form" onSubmit={handleSubmit} noValidate>
                <div className="feedback__field">
                  <label>Seu nome</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Ana Silva"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="feedback__field">
                  <label>Avaliação</label>
                  <StarSelector value={form.rating} onChange={(v) => { setForm({ ...form, rating: v }); setError('') }} />
                </div>

                <div className="feedback__field">
                  <label>Seu comentário</label>
                  <textarea
                    name="text"
                    rows={4}
                    placeholder="O que você achou do seu artesanato?"
                    value={form.text}
                    onChange={handleChange}
                  />
                </div>

                {error && <p className="feedback__error">{error}</p>}

                <button type="submit" className="btn-primary feedback__submit">
                  Enviar Avaliação ★
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
