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
              Artesanatos que carregam um <em>pedacinho do coração</em>
            </h1>
            <p className="hero__desc">
              Cada artesanato é feito com cuidado e paciência — costurado com atenção, vestido com carinho
              e presenteado com alma. Uma peça única criada para você ou para quem você ama.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn-primary">Ver Coleção</Link>
              <Link to="/about" className="btn-outline">Nossa História</Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__doll-showcase">
              <img src="/logo.jpeg" alt="Ateliê Mari Amorim – Fios de Afeto" className="hero__doll-main" />
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
            { icon: '💝', title: 'Feito com Amor', desc: 'Cada artesanato carrega o carinho e a intenção de quem fez.' },
            { icon: '🌸', title: 'Peças Únicas', desc: 'Nenhum artesanato é igual ao outro — o seu é exclusivo.' },
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
          <h2 className="section-title">Artesanatos em Destaque</h2>
          <div className="featured__grid">
            {featuredDolls.map((doll) => (
              <DollCard key={doll.id} doll={doll} />
            ))}
          </div>
          <div className="featured__cta">
            <Link to="/shop" className="btn-outline">Ver Todos os Artesanatos</Link>
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
              Crio artesanatos desde pequenininha, observando minha avó bordar com as mãos
              mais delicadas do mundo. O que começou como uma tradição de família virou minha maior
              paixão. Cada artesanato que faço é uma carta de amor a essa memória.
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
          <h2>Pronta para encontrar seu artesanato perfeito?</h2>
          <p>Pedidos personalizados são sempre bem-vindos — me conta sua ideia e eu dou vida a ela.</p>
          <Link to="/contact" className="btn-primary">Fazer um Pedido Personalizado</Link>
        </div>
      </section>
    </>
  )
}
