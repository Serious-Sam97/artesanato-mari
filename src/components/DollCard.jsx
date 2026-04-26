import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './DollCard.css'

export default function DollCard({ doll }) {
  const { name, price, tag, description, emoji, colors, models } = doll
  const { addItem } = useCart()

  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedModel, setSelectedModel] = useState(null)
  const [added, setAdded] = useState(false)

  const canAdd = selectedColor && selectedModel

  const handleAdd = () => {
    if (!canAdd) return
    addItem(doll, selectedColor, selectedModel)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="doll-card" style={{ '--card-accent': selectedColor?.hex ?? doll.color }}>
      <div className="doll-card__image">
        <span className="doll-card__emoji">{emoji}</span>
        {tag && <span className="doll-card__tag">{tag}</span>}
      </div>

      <div className="doll-card__body">
        <h3 className="doll-card__name">{name}</h3>
        <p className="doll-card__desc">{description}</p>

        {/* Color selection */}
        <div className="doll-card__option">
          <p className="doll-card__option-label">
            Cor
            {selectedColor && (
              <span className="doll-card__option-value"> — {selectedColor.name}</span>
            )}
          </p>
          <div className="doll-card__swatches">
            {colors.map((c) => (
              <button
                key={c.name}
                className={`swatch ${selectedColor?.name === c.name ? 'swatch--active' : ''}`}
                style={{ background: c.hex }}
                onClick={() => setSelectedColor(c)}
                aria-label={c.name}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Model selection */}
        <div className="doll-card__option">
          <p className="doll-card__option-label">Modelo</p>
          <div className="doll-card__models">
            {models.map((m) => (
              <button
                key={m}
                className={`model-btn ${selectedModel === m ? 'model-btn--active' : ''}`}
                onClick={() => setSelectedModel(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="doll-card__footer">
          <span className="doll-card__price">{price}</span>
          <button
            className={`doll-card__btn ${added ? 'doll-card__btn--added' : ''} ${!canAdd ? 'doll-card__btn--disabled' : ''}`}
            onClick={handleAdd}
            disabled={!canAdd}
            title={!canAdd ? 'Selecione cor e modelo' : ''}
          >
            {added ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
          </button>
        </div>
      </div>
    </div>
  )
}
