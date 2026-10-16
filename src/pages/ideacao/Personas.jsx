import { ArrowDown } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { escolha, metodo, personas, rotulos, trajetos } from '../../data/personas'
import pagina from '../Pagina.module.css'
import estilos from './Personas.module.css'

const personaPorId = Object.fromEntries(personas.map((persona) => [persona.id, persona]))

function iniciais(nome) {
  return nome
    .split(' ')
    .map((parte) => parte.charAt(0))
    .join('')
}

// com HashRouter o hash e a rota, entao o atalho rola via JS em vez de href
function rolarAteFicha(id) {
  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alvo = document.getElementById(`ficha-${id}`)
  alvo?.scrollIntoView({ behavior: reduzido ? 'auto' : 'smooth', block: 'start' })
  alvo?.focus({ preventScroll: true })
}

// foto da persona, com as iniciais como reserva se o arquivo faltar.
// decorativa quando o nome ja esta escrito ao lado.
function Retrato({ persona, className, decorativa = false }) {
  if (!persona.foto) {
    return (
      <span className={`${estilos.iniciais} ${className}`} aria-hidden="true">
        {iniciais(persona.nome)}
      </span>
    )
  }

  return (
    <img
      className={className}
      src={persona.foto.arquivo}
      alt={decorativa ? '' : persona.foto.alt}
      width="640"
      height="795"
      loading="lazy"
      decoding="async"
    />
  )
}

function Lista({ itens }) {
  return (
    <ul className={estilos.lista}>
      {itens.map((item) => {
        const texto = typeof item === 'string' ? item : item.texto
        return (
          <li key={texto} className={estilos.itemLista}>
            {texto}
          </li>
        )
      })}
    </ul>
  )
}

function Bloco({ titulo, children }) {
  return (
    <section className={estilos.bloco}>
      <h4 className={estilos.tituloBloco}>{titulo}</h4>
      {children}
    </section>
  )
}

// ---------- 02: quem sao e por que ----------

function CartaoResumo({ persona }) {
  return (
    <li className={estilos.cartao}>
      <Retrato persona={persona} className={estilos.cartaoFoto} decorativa />
      <div className={estilos.cartaoTexto}>
        <h3 className={estilos.cartaoNome}>{persona.nome}</h3>
        <p className={estilos.cartaoGrupo}>{persona.grupo}</p>
        <p className={estilos.cartaoResumo}>{persona.resumo}</p>
        <p className={estilos.cartaoPorque}>{persona.porque}</p>
        <button
          type="button"
          className={estilos.cartaoLink}
          onClick={() => rolarAteFicha(persona.id)}
        >
          {rotulos.verFicha} {persona.nome.split(' ')[0]}
          <ArrowDown size={15} aria-hidden="true" />
        </button>
      </div>
    </li>
  )
}

// ---------- 03: trajetos da informacao ----------

function Rota({ rota }) {
  const idTitulo = `rota-${rota.id}`

  return (
    <section className={`malha ${estilos.rota}`} aria-labelledby={idTitulo}>
      <h3 id={idTitulo} className={estilos.rotaTitulo}>
        {rota.titulo}
      </h3>

      <ol className={estilos.paradas}>
        {rota.paradas.map((parada) => {
          const persona = parada.persona ? personaPorId[parada.persona] : null
          return (
            <li
              key={parada.nome}
              className={`${estilos.parada} ${persona ? estilos.paradaPersona : ''}`}
            >
              <span className={estilos.marco} aria-hidden="true">
                {persona && <Retrato persona={persona} className={estilos.marcoFoto} decorativa />}
              </span>
              <span className={estilos.paradaNome}>{parada.nome}</span>
              <span className={estilos.paradaDetalhe}>{parada.detalhe}</span>
            </li>
          )
        })}
      </ol>

      <p className={estilos.trava}>
        <span className={estilos.travaRotulo}>{rotulos.trava}</span> {rota.trava}
      </p>
    </section>
  )
}

// ---------- 04: ficha completa ----------

function FichaPersona({ persona }) {
  const idTitulo = `persona-${persona.id}`

  return (
    <article
      className={estilos.ficha}
      id={`ficha-${persona.id}`}
      tabIndex={-1}
      aria-labelledby={idTitulo}
    >
      <div className={`malha ${estilos.identidade}`}>
        <div className={estilos.identidadeFixa}>
          <Retrato persona={persona} className={estilos.foto} />
          <div>
            <h3 id={idTitulo} className={estilos.nome}>
              {persona.nome}
            </h3>
            <p className={estilos.papel}>{persona.papel}</p>
          </div>
          <dl className={estilos.dadosBasicos}>
            <div>
              <dt>{rotulos.grupo}</dt>
              <dd>{persona.grupo}</dd>
            </div>
            <div>
              <dt>{rotulos.perfil}</dt>
              <dd>{persona.perfil}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className={estilos.corpo}>
        <blockquote className={estilos.citacao}>
          <p>"{persona.citacao.texto}"</p>
        </blockquote>

        <Bloco titulo={rotulos.sobre}>
          {persona.sobre.map((paragrafo) => (
            <p key={paragrafo} className={estilos.paragrafo}>
              {paragrafo}
            </p>
          ))}
        </Bloco>

        <div className={estilos.colunas}>
          <Bloco titulo={rotulos.objetivos}>
            <Lista itens={persona.objetivos} />
          </Bloco>
          <Bloco titulo={rotulos.frustracoes}>
            <Lista itens={persona.frustracoes} />
          </Bloco>
        </div>

        <Bloco titulo={rotulos.comportamento}>
          <dl className={estilos.comportamento}>
            {persona.comportamento.map((linha) => (
              <div key={linha.rotulo} className={estilos.linhaComportamento}>
                <dt>{linha.rotulo}</dt>
                <dd>{linha.texto}</dd>
              </div>
            ))}
          </dl>
        </Bloco>

        <div className={estilos.colunas}>
          <Bloco titulo={rotulos.tarefas}>
            <Lista itens={persona.tarefas} />
          </Bloco>
          <Bloco titulo={rotulos.expectativas}>
            <Lista itens={persona.expectativas} />
          </Bloco>
        </div>
      </div>

      <section className={estilos.garantir} aria-label={`${rotulos.garantir}: ${persona.nome}`}>
        <h4 className={estilos.garantirTitulo}>{rotulos.garantir}</h4>
        <ul className={estilos.garantirLista}>
          {persona.requisitos.map((requisito) => (
            <li key={requisito} className={estilos.garantirItem}>
              {requisito}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default function Personas() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Ideação' }, { rotulo: 'Personas' }]} />

      <header className={pagina.cabecalho}>
        <h1>Personas</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{metodo.intro}</p>
      </header>

      <section aria-labelledby="metodo-personas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-personas">O método</h2>
        </div>
        {metodo.paragrafos.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="por-que-essas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="por-que-essas">Quantas personas e por que essas</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{escolha.intro}</p>

        <ul className={estilos.cartoes}>
          {personas.map((persona) => (
            <CartaoResumo key={persona.id} persona={persona} />
          ))}
        </ul>
      </section>

      <section className={pagina.secao} aria-labelledby="trajetos">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="trajetos">Como a sala chega a cada uma</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{trajetos.intro}</p>

        <div className={estilos.rotas}>
          {trajetos.rotas.map((rota) => (
            <Rota key={rota.id} rota={rota} />
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="as-personas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="as-personas">As fichas</h2>
        </div>

        <div className={estilos.fichas}>
          {personas.map((persona) => (
            <FichaPersona key={persona.id} persona={persona} />
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="por-que-nao-outras">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">05</span>
          <h2 id="por-que-nao-outras">{escolha.foraTitulo}</h2>
        </div>
        <dl className={estilos.fora}>
          {escolha.decisoes.map((decisao) => (
            <div key={decisao.pergunta} className={estilos.foraLinha}>
              <dt className={estilos.foraPergunta}>{decisao.pergunta}</dt>
              <dd className={estilos.foraResposta}>{decisao.resposta}</dd>
            </div>
          ))}
        </dl>
      </section>

      <PageNav atualId="personas" />
    </div>
  )
}
