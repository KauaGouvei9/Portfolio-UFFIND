import { ExternalLink } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { firstClick as dados } from '../../data/firstClick'
import pagina from '../Pagina.module.css'
import estilos from './Avaliacao.module.css'

const { rotulos } = dados

function Lista({ itens }) {
  return (
    <ul className={estilos.lista}>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Tarefa({ tarefa, indice }) {
  return (
    <article className={estilos.cartao}>
      <h3 className={estilos.cartaoTitulo}>
        {rotulos.tarefa} {indice + 1}: {tarefa.titulo}
      </h3>
      <p className={estilos.cenario}>
        <span className={estilos.rotuloCurto}>{rotulos.cenario}:</span> {tarefa.cenario}
      </p>

      {tarefa.acerto && (
        <p className={estilos.acerto}>
          <strong>{tarefa.acerto}</strong> {rotulos.acerto}
        </p>
      )}

      <dl className={estilos.ficha}>
        {tarefa.esperada && (
          <div>
            <dt>{rotulos.esperada}</dt>
            <dd>{tarefa.esperada}</dd>
          </div>
        )}
        <div>
          <dt>{rotulos.cliques}</dt>
          <dd>
            <Lista itens={tarefa.cliques} />
          </dd>
        </div>
        <div>
          <dt>{rotulos.tempo}</dt>
          <dd>{tarefa.tempo}</dd>
        </div>
        <div>
          <dt>{rotulos.confianca}</dt>
          <dd>{tarefa.confianca}</dd>
        </div>
      </dl>

      <p className={estilos.cartaoTexto}>
        <span className={estilos.rotuloCurto}>{rotulos.leitura}:</span> {tarefa.leitura}
      </p>

      <div className={estilos.sugestao}>
        <p className={estilos.sugestaoTitulo}>{rotulos.sugestao}</p>
        <Lista itens={tarefa.sugestao} />
      </div>
    </article>
  )
}

export default function FirstClick() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Avaliação' }, { rotulo: 'First Click' }]} />

      <header className={pagina.cabecalho}>
        <h1>First Click</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{dados.intro}</p>
      </header>

      <section aria-labelledby="o-que-e">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="o-que-e">O que é</h2>
        </div>
        {dados.oQueE.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="como-foi">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="como-foi">Como foi feito</h2>
        </div>
        <p className="textoCorrido">{dados.comoFoi}</p>
      </section>

      {dados.estudos.map((estudo, indice) => (
        <section key={estudo.id} className={pagina.secao} aria-labelledby={`estudo-${estudo.id}`}>
          <div className={pagina.tituloSecao}>
            <span className="numeroLegenda">{String(indice + 3).padStart(2, '0')}</span>
            <h2 id={`estudo-${estudo.id}`}>
              {rotulos.estudo} {indice + 1}
            </h2>
          </div>
          <p className={`textoCorrido ${pagina.intro}`}>{estudo.escala}</p>
          <a className={estilos.linkExterno} href={estudo.link} target="_blank" rel="noreferrer">
            {rotulos.link}
            <ExternalLink size={15} aria-hidden="true" />
            <span className="apenasLeitor">(abre em uma nova aba)</span>
          </a>

          <div className={estilos.cartoes}>
            {estudo.tarefas.map((tarefa, i) => (
              <Tarefa key={tarefa.titulo} tarefa={tarefa} indice={i} />
            ))}
          </div>
        </section>
      ))}

      <section className={pagina.secao} aria-labelledby="conclusao">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">{String(dados.estudos.length + 3).padStart(2, '0')}</span>
          <h2 id="conclusao">Conclusão</h2>
        </div>
        {dados.conclusao.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <PageNav atualId="first-click" />
    </div>
  )
}
