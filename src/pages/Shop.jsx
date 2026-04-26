import { useState } from 'react'
import DollCard from '../components/DollCard'
import { allDolls } from '../data/dolls'
import './Shop.css'

const categories = [
  { key: 'all', label: 'Todas' },
  { key: 'classic', label: 'Clássicas' },
  { key: 'elegant', label: 'Elegantes' },
  { key: 'fantasy', label: 'Fantasia' },
  { key: 'custom', label: 'Personalizadas' },
]

export default function Shop() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? allDolls : allDolls.filter((d) => d.category === active)


  return (
    <div className="shop">
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <span className="hero__eyebrow">✦ Coleção artesanal ✦</span>
          <h1 className="page-header__title">Nossa Loja de Bonecas</h1>
          <p className="page-header__sub">
            Explore a coleção completa — cada peça é única, feita com cuidado e muito carinho.
          </p>
        </div>
      </div>

      <div className="container shop__content">
        {/* Filters */}
        <div className="shop__filters">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`shop__filter-btn ${active === key ? 'shop__filter-btn--active' : ''}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="shop__grid">
          {filtered.map((doll) => (
            <DollCard key={doll.id} doll={doll} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="shop__empty">Nenhuma boneca nessa categoria ainda — volte em breve!</p>
        )}
      </div>
    </div>
  )
}
