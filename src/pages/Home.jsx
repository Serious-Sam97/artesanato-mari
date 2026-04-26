import { Link } from 'react-router-dom'
import DollCard from '../components/DollCard'
import FeedbackSection from '../components/FeedbackSection'
import { featuredDolls } from '../data/dolls'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__shapes" aria-hidden="true">
          <span className="shape shape--1" />
          <span className="shape shape--2" />
          <span className="shape shape--3" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <span className="hero__eyebrow">Feito à mão com amor ✨</span>
            <h1 className="hero__title">
              Bonecas que carregam um <em>pedacinho do coração</em>
            </h1>
            <p className="hero__desc">
              Cada boneca é feita com cuidado e paciência — costurada com atenção, vestida com carinho
              e presenteada com alma. Uma peça única criada para você ou para quem você ama.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn-primary">Ver Coleção</Link>
              <Link to="/about" className="btn-outline">Nossa História</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__doll-showcase">
              <span className="hero__doll-main">🧸</span>
              <span className="hero__doll-float hero__doll-float--1">🎀</span>
              <span className="hero__doll-float hero__doll-float--2">🌸</span>
              <span className="hero__doll-float hero__doll-float--3">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="values">
        <div className="container values__grid">
          {[
            { icon: '🤲', title: '100% Artesanal', desc: 'Cada peça é feita à mão, sem produção em massa.' },
            { icon: '💝', title: 'Feita com Amor', desc: 'Cada boneca carrega o carinho e a intenção de quem fez.' },
            { icon: '🌸', title: 'Peças Únicas', desc: 'Nenhuma boneca é igual à outra — a sua é exclusiva.' },
            { icon: '📦', title: 'Pronta para Presentear', desc: 'Embalada com cuidado e pronta para ser entregue.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="value-item">
              <span className="value-item__icon">{icon}</span>
              <h3 className="value-item__title">{title}</h3>
              <p className="value-item__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured dolls */}
      <section className="featured">
        <div className="container">
          <p className="section-subtitle">✦ Selecionadas para você ✦</p>
          <h2 className="section-title">Bonecas em Destaque</h2>
          <div className="featured__grid">
            {featuredDolls.map((doll) => (
              <DollCard key={doll.id} doll={doll} />
            ))}
          </div>
          <div className="featured__cta">
            <Link to="/shop" className="btn-outline">Ver Todas as Bonecas</Link>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="story-teaser">
        <div className="container story-teaser__inner">
          <div className="story-teaser__visual">
            <div className="story-teaser__portrait">
              <span>👩‍🎨</span>
            </div>
          </div>
          <div className="story-teaser__text">
            <span className="hero__eyebrow">Conheça a criadora</span>
            <h2 className="section-title">Oi, eu sou a Mari</h2>
            <p>
              Crio bonecas artesanais desde pequenininha, observando minha avó bordar com as mãos
              mais delicadas do mundo. O que começou como uma tradição de família virou minha maior
              paixão. Cada boneca que faço é uma carta de amor a essa memória.
            </p>
            <Link to="/about" className="btn-primary" style={{ marginTop: '24px' }}>
              Ler Minha História
            </Link>
          </div>
        </div>
      </section>

      <FeedbackSection />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>Pronta para encontrar sua boneca perfeita?</h2>
          <p>Pedidos personalizados são sempre bem-vindos — me conta sua ideia e eu dou vida a ela.</p>
          <Link to="/contact" className="btn-primary">Fazer um Pedido Personalizado</Link>
        </div>
      </section>
    </>
  )
}
