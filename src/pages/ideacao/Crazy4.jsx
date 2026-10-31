import { ArrowRight, Maximize2 } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { convergencia, folhas, metodo, rotulos } from '../../data/crazy4'
import pagina from '../Pagina.module.css'
import estilos from './Crazy4.module.css'

// Uma folha: a foto ao lado da transcricao em 2 x 2, na mesma posicao dos
// quadrantes no papel, para o leitor comparar um com o outro.
function Folha({ folha }) {
  const idTitulo = `folha-${folha.id}`

  return (
    <article className={estilos.folha} aria-labelledby={idTitulo}>
      <h3 id={idTitulo} className={estilos.autor}>
        {folha.autor}
      </h3>

      <div className={estilos.folhaCorpo}>
        <figure className={estilos.figura}>
          <a
            className={estilos.linkFoto}
            href={folha.foto}
            target="_blank"
            rel="noreferrer"
            aria-label={`${rotulos.ampliar}: folha de ${folha.autor}`}
          >
            <img
              className={estilos.foto}
              src={folha.foto}
              alt={folha.alt}
              width={folha.largura}
              height={folha.altura}
              loading="lazy"
              decoding="async"
            />
            <span className={estilos.ampliar} aria-hidden="true">
              <Maximize2 size={14} />
            </span>
          </a>
        </figure>

        <ul className={estilos.quadrantes}>
          {folha.quadrantes.map((quadrante) => (
            <li key={quadrante.tipo} className={estilos.quadrante}>
              <span className={estilos.tipo}>{quadrante.tipo}</span>
              <p className={estilos.ideia}>{quadrante.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Direcao({ direcao }) {
  return (
    <li className={estilos.direcao}>
      <div className={estilos.origem}>
        <h3 className={estilos.direcaoTitulo}>{direcao.titulo}</h3>
        <ul className={estilos.ideias}>
          {direcao.ideias.map((ideia) => (
            <li key={ideia.texto} className={estilos.ideiaItem}>
              {ideia.texto} <span className={estilos.ideiaAutor}>{ideia.autor}</span>
            </li>
          ))}
        </ul>
      </div>

      <ArrowRight className={estilos.seta} size={22} aria-hidden="true" />

      <dl className={estilos.destino}>
        <div>
          <dt className={estilos.destinoRotulo}>{rotulos.noPrototipo}</dt>
          <dd className={estilos.destinoTexto}>{direcao.noPrototipo}</dd>
        </div>
        <div>
          <dt className={estilos.porqueRotulo}>{rotulos.porque}</dt>
          <dd className={estilos.porqueTexto}>{direcao.porque}</dd>
        </div>
      </dl>
    </li>
  )
}

export default function Crazy4() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Ideação' }, { rotulo: 'Crazy 4' }]} />

      <header className={pagina.cabecalho}>
        <h1>Crazy 4</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{metodo.intro}</p>
      </header>

      <section aria-labelledby="metodo-crazy4">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-crazy4">O método</h2>
        </div>
        {metodo.paragrafos.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="as-folhas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="as-folhas">{rotulos.folhas}</h2>
        </div>

        <div className={estilos.folhas}>
          {folhas.map((folha) => (
            <Folha key={folha.id} folha={folha} />
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="convergencia">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="convergencia">{rotulos.convergencia}</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{convergencia.intro}</p>

        <ol className={estilos.direcoes}>
          {convergencia.direcoes.map((direcao) => (
            <Direcao key={direcao.titulo} direcao={direcao} />
          ))}
        </ol>
      </section>

      <PageNav atualId="crazy4" />
    </div>
  )
}
