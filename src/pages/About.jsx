import { Link } from 'react-router-dom'
import './About.css'

const timeline = [
  { year: '1995', text: 'Nasceu em uma família de costureiras no sul do Brasil.' },
  { year: '2003', text: 'Criou seu primeiro artesanato aos 8 anos, guiada pelas mãos carinhosas da avó.' },
  { year: '2015', text: 'Começou a vender artesanatos em feiras locais.' },
  { year: '2020', text: 'Lançou o Ateliê Mari Amorim – Fios de Afeto online, levando seu trabalho para lares ao redor do mundo.' },
  { year: 'Hoje', text: 'Cria entre 30 e 40 artesanatos únicos por mês, cada um um pequeno tesouro.' },
]

export default function About() {
  return (
    <div className="about">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <span className="about__eyebrow">✦ A criadora por trás da magia ✦</span>
          <h1 className="page-header__title">Sobre a Mari</h1>
          <p className="page-header__sub">
            Uma história de amor, linha e mãos pequenas que criam sentimentos imensos.
          </p>
        </div>
      </div>

      {/* Main story */}
      <section className="about__story">
        <div className="container about__story-inner">
          <div className="about__portrait-wrap">
            <div className="about__portrait">
              <span>👩‍🎨</span>
            </div>
            <div className="about__quote">
              <p>"Todo artesanato merece uma alma, e eu coloco a minha em cada um deles."</p>
              <span>— Mari</span>
            </div>
          </div>
          <div className="about__text">
            <h2>Minha paixão, meu ofício</h2>
            <p>
              Me chamo Mariana, mas todo mundo me chama de Mari. Cresci em uma casinha cheia de
              retalhos de tecido, carretéis de linha e o som tranquilo de uma máquina de costura.
              Minha avó sentava perto da janela todas as tardes, criando algo lindo do quase nada,
              e eu ficava ali de olhos arregalados observando.
            </p>
            <p>
              Quando ela colocou a agulha na minha mão pela primeira vez, algo se acendeu dentro
              de mim. Percebi que fazer algo com as próprias mãos — algo que pode ser tocado,
              abraçado e amado — é uma das coisas mais bonitas que uma pessoa pode fazer.
            </p>
            <p>
              Hoje, carrego esse mesmo espírito em cada artesanato que crio. Trabalho devagar e com
              intenção. Escolho os tecidos pelo toque. Bordo rostos com expressões que parecem
              viver. Quero que cada pessoa que receba um dos meus artesanatos sinta esse calor.
            </p>
            <div className="about__values">
              {['Artesanato com calma e cuidado', 'Materiais sustentáveis', 'Sem produção em massa', 'Feita com atenção total'].map((v) => (
                <span key={v} className="about__badge">✓ {v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <p className="section-subtitle">✦ Minha trajetória ✦</p>
          <h2 className="section-title">Uma vida em pontos</h2>
          <div className="timeline__items">
            {timeline.map(({ year, text }) => (
              <div key={year} className="timeline__item">
                <div className="timeline__year">{year}</div>
                <div className="timeline__dot" />
                <div className="timeline__text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <p className="section-subtitle">✦ Como funciona ✦</p>
          <h2 className="section-title">Da linha ao tesouro</h2>
          <div className="process__steps">
            {[
              { n: '01', title: 'Escolha dos materiais', desc: 'Seleciono tecidos macios e seguros e linhas naturais — só o que parece certo nas mãos.' },
              { n: '02', title: 'Corte e modelagem', desc: 'Cada molde é cortado à mão. Nenhum padrão é usado duas vezes da mesma forma.' },
              { n: '03', title: 'Costura com cuidado', desc: 'Costurado devagar, camada por camada, verificando cada costura e curvinha.' },
              { n: '04', title: 'Dando vida', desc: 'O rosto é bordado por último — é o momento em que o artesanato vira um personagem.' },
              { n: '05', title: 'Toques finais', desc: 'Vestida, acessoriada e embalada com carinho antes de ir para o novo lar.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="process__step">
                <span className="process__number">{n}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <div className="container about__cta-inner">
          <h2>Quer um artesanato feito só para você?</h2>
          <p>Pedidos personalizados estão sempre abertos. Vamos criar algo inesquecível juntas.</p>
          <Link to="/contact" className="btn-primary">Entre em Contato</Link>
        </div>
      </section>
    </div>
  )
}
