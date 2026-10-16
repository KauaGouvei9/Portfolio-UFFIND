import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { cenarios, metodo, rotulos } from '../../data/cenarios'
import { personas } from '../../data/personas'
import pagina from '../Pagina.module.css'
import estilos from './Cenarios.module.css'

// "Estudante do IC" vira "estudante do IC": so a primeira letra, para nao
// estragar siglas como IC no meio da frase
function minusculaInicial(texto) {
  return texto.charAt(0).toLowerCase() + texto.slice(1)
}

const personaPorId = Object.fromEntries(personas.map((persona) => [persona.id, persona]))

function Cenario({ cenario }) {
  const persona = personaPorId[cenario.persona]
  const idTitulo = `cenario-${cenario.id}`

  return (
    <article className={estilos.cenario} aria-labelledby={idTitulo}>
      <header className={estilos.cabecalho}>
        {persona.foto && (
          <img
            className={estilos.rosto}
            src={persona.foto.arquivo}
            alt=""
            width="640"
            height="795"
            loading="lazy"
            decoding="async"
          />
        )}
        <div>
          <p className={estilos.ator}>
            {rotulos.ator}:{' '}
            <Link className={estilos.linkPersona} to="/ideacao/personas">
              {persona.nome}
            </Link>
            , {minusculaInicial(persona.papel)}
          </p>
          <h3 id={idTitulo} className={estilos.titulo}>
            {cenario.titulo}
          </h3>
        </div>
      </header>

      <div className={estilos.corpo}>
        <div className={estilos.narrativa}>
          {cenario.narrativa.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>

        <dl className={estilos.analise}>
          <div className={estilos.item}>
            <dt>{rotulos.problema}</dt>
            <dd>{cenario.problema}</dd>
          </div>
          <div className={estilos.item}>
            <dt>{rotulos.impacto}</dt>
            <dd>{cenario.impacto}</dd>
          </div>
          <div className={estilos.item}>
            <dt>{rotulos.garantir}</dt>
            <dd>
              <ul className={estilos.lista}>
                {cenario.garantir.map((linha) => (
                  <li key={linha}>{linha}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <section className={estilos.perguntas} aria-label={`${rotulos.perguntas}: ${cenario.titulo}`}>
        <h4 className={estilos.perguntasTitulo}>{rotulos.perguntas}</h4>
        <ul className={estilos.listaPerguntas}>
          {cenario.perguntas.map((pergunta) => (
            <li key={pergunta} className={estilos.pergunta}>
              {pergunta}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default function Cenarios() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Ideação' }, { rotulo: 'Cenários-problema' }]} />

      <header className={pagina.cabecalho}>
        <h1>Cenários-problema</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{metodo.intro}</p>
      </header>

      <section aria-labelledby="metodo-cenarios">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-cenarios">O método</h2>
        </div>
        {metodo.paragrafos.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="os-cenarios">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="os-cenarios">Os três cenários</h2>
        </div>

        <div className={estilos.lista3}>
          {cenarios.map((cenario) => (
            <Cenario key={cenario.id} cenario={cenario} />
          ))}
        </div>
      </section>

      <PageNav atualId="cenarios" />
    </div>
  )
}
