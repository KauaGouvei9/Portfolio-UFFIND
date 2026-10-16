import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { personas } from '../../data/personas'
import { arvores, metodo, rotulos } from '../../data/tarefas'
import pagina from '../Pagina.module.css'
import estilos from './Tarefas.module.css'

const personaPorId = Object.fromEntries(personas.map((persona) => [persona.id, persona]))

function Rotulo({ numero, texto }) {
  return (
    <>
      <span className={estilos.numero}>{numero}</span>
      <span>{texto}</span>
    </>
  )
}

// "Plano 0: faca 1..." vira rotulo em negrito + instrucao
function Plano({ texto }) {
  const corte = texto.indexOf(':')
  return (
    <li className={estilos.plano}>
      <strong>{texto.slice(0, corte + 1)}</strong>
      {texto.slice(corte + 1)}
    </li>
  )
}

// A arvore e uma lista aninhada: le em ordem para leitor de tela e vira
// diagrama so pelo CSS (horizontal no desktop, recuada no celular).
function Arvore({ arvore }) {
  const persona = personaPorId[arvore.persona]
  const idTitulo = `hta-${arvore.id}`

  return (
    <article className={estilos.hta} aria-labelledby={idTitulo}>
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
          <h3 id={idTitulo} className={estilos.nome}>
            {persona.nome}
          </h3>
          <p className={estilos.cenario}>
            {rotulos.cenario}{' '}
            <Link className={estilos.linkCenario} to="/ideacao/cenarios">
              {arvore.cenario}
            </Link>
          </p>
        </div>
      </header>

      <div className={`malha ${estilos.area}`}>
        <div className={estilos.arvore}>
          <p className={estilos.raiz}>
            <Rotulo numero="0" texto={arvore.objetivo} />
          </p>

          <ol className={estilos.filhos}>
            {arvore.subtarefas.map((tarefa) => (
              <li key={tarefa.numero} className={estilos.filho}>
                <p className={estilos.caixa}>
                  <Rotulo numero={tarefa.numero} texto={tarefa.texto} />
                </p>

                {tarefa.subtarefas && (
                  <ol className={estilos.netos}>
                    {tarefa.subtarefas.map((passo) => (
                      <li key={passo.numero} className={estilos.neto}>
                        <Rotulo numero={passo.numero} texto={passo.texto} />
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className={estilos.planos} aria-label={`${rotulos.planos}: ${persona.nome}`}>
        <h4 className={estilos.planosTitulo}>{rotulos.planos}</h4>
        <ul className={estilos.listaPlanos}>
          {arvore.planos.map((plano) => (
            <Plano key={plano} texto={plano} />
          ))}
        </ul>
      </section>
    </article>
  )
}

export default function Tarefas() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Ideação' }, { rotulo: 'Modelo de Tarefas' }]} />

      <header className={pagina.cabecalho}>
        <h1>Modelo de Tarefas</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{metodo.intro}</p>
      </header>

      <section aria-labelledby="metodo-tarefas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-tarefas">O método</h2>
        </div>
        {metodo.paragrafos.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="as-arvores">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="as-arvores">As três árvores</h2>
        </div>

        <div className={estilos.lista}>
          {arvores.map((arvore) => (
            <Arvore key={arvore.id} arvore={arvore} />
          ))}
        </div>
      </section>

      <PageNav atualId="tarefas" />
    </div>
  )
}
