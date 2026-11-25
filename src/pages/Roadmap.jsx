import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { roadmap } from '../data/roadmap'
import { entregasPorFase } from '../data/entregas'
import pagina from './Pagina.module.css'
import estilos from './Roadmap.module.css'

// classe de cor de cada fase (tokens --fase-* em global.css)
const COR_FASE = {
  imersao: estilos.imersao,
  ideacao: estilos.ideacao,
  prototipacao: estilos.prototipacao,
  avaliacao: estilos.avaliacao,
}

// A onda: altura de cada ponto de virada, uma fase a cada 250 unidades.
// Sobe na Imersao (abre o problema), desce na Ideacao (decide), sobe de
// novo na Prototipacao e fecha na Avaliacao.
const LARGURA = 1000
const BASE = 250
const PONTOS = [
  [0, 250],
  [230, 30],
  [500, 190],
  [750, 110],
  [1000, 250],
]

// interpolacao por cosseno entre os pontos: curva suave, sem quinas
function alturaEm(x) {
  for (let i = 0; i < PONTOS.length - 1; i += 1) {
    const [x0, y0] = PONTOS[i]
    const [x1, y1] = PONTOS[i + 1]
    if (x <= x1) {
      const t = (x - x0) / (x1 - x0)
      const suave = (1 - Math.cos(Math.PI * t)) / 2
      return y0 + (y1 - y0) * suave
    }
  }
  return BASE
}

const amostras = Array.from({ length: 101 }, (_, i) => (i / 100) * LARGURA)
const caminhoOnda = `M0,${BASE} ${amostras
  .map((x) => `L${x.toFixed(1)},${alturaEm(x).toFixed(1)}`)
  .join(' ')} L${LARGURA},${BASE} Z`

// setas dentro da onda, duas por fase, seguindo a inclinacao da curva
const SETAS = [100, 180, 320, 430, 570, 690, 800, 890].map((x) => {
  const inclinacao = alturaEm(x + 1) - alturaEm(x - 1)
  const angulo = (Math.atan2(inclinacao, 2) * 180) / Math.PI
  return { x, y: alturaEm(x) + 34, angulo }
})

function Onda() {
  const larguraFase = LARGURA / entregasPorFase.length

  return (
    <svg
      className={estilos.onda}
      viewBox={`0 0 ${LARGURA} ${BASE}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="roadmap-onda">
          <path d={caminhoOnda} />
        </clipPath>
      </defs>
      <g clipPath="url(#roadmap-onda)">
        {entregasPorFase.map((fase, indice) => (
          <rect
            key={fase.faseId}
            className={`${estilos.faixa} ${COR_FASE[fase.faseId]}`}
            x={indice * larguraFase + (indice ? 2 : 0)}
            y="0"
            width={larguraFase - (indice ? 2 : 0)}
            height={BASE}
          />
        ))}
      </g>
      {SETAS.map((seta) => (
        <path
          key={seta.x}
          className={estilos.seta}
          d="M-18,0 L8,0 M-3,-9 L8,0 L-3,9"
          transform={`translate(${seta.x} ${seta.y}) rotate(${seta.angulo})`}
        />
      ))}
    </svg>
  )
}

export default function Roadmap() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Roadmap' }]} />

      <header className={pagina.cabecalho}>
        <h1>Roadmap</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{roadmap.intro}</p>
      </header>

      <figure className={estilos.mapa} aria-labelledby="roadmap-titulo">
        <h2 id="roadmap-titulo" className="apenasLeitor">
          {roadmap.diagramaTitulo}
        </h2>

        <div className={estilos.colunas}>
          {entregasPorFase.map((fase) => (
            <section
              key={fase.faseId}
              className={`${estilos.coluna} ${COR_FASE[fase.faseId]}`}
              aria-labelledby={`fase-${fase.faseId}`}
            >
              <h3 id={`fase-${fase.faseId}`} className={estilos.tituloFase}>
                {fase.nome}
              </h3>
              <ul className={estilos.atividades}>
                {fase.entregas.map((entrega) => (
                  <li key={entrega.id}>
                    <Link to={entrega.rota} className={estilos.atividade}>
                      {entrega.nomeCompleto}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Onda />

        <ul className={estilos.rotulosOnda} aria-hidden="true">
          {entregasPorFase.map((fase) => (
            <li key={fase.faseId} className={COR_FASE[fase.faseId]}>
              {fase.nome}
            </li>
          ))}
        </ul>

        <figcaption className={estilos.legenda}>{roadmap.diagramaLegenda}</figcaption>
      </figure>

      <section className={pagina.secao} aria-labelledby="percurso">
        <h2 id="percurso">{roadmap.percursoTitulo}</h2>
        <div className={estilos.percurso}>
          {entregasPorFase.map((fase) => (
            <div key={fase.faseId} className={`${estilos.passo} ${COR_FASE[fase.faseId]}`}>
              <h3 className={estilos.passoTitulo}>{fase.nome}</h3>
              <p className="textoCorrido">{roadmap.percurso[fase.faseId]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
