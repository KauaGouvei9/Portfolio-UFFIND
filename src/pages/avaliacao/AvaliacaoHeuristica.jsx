import { useEffect, useRef } from 'react'
import { Download } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { avaliacaoHeuristica as dados } from '../../data/avaliacaoHeuristica'
import pagina from '../Pagina.module.css'
import comum from './Avaliacao.module.css'
import estilos from './AvaliacaoHeuristica.module.css'

const { rotulos, problemas, heuristicas, telas } = dados
const caminhoPlanilha = `${import.meta.env.BASE_URL}${dados.relatorio.arquivo}`

// Tudo o que os graficos mostram sai da lista de problemas, para os numeros
// nunca ficarem diferentes entre a lista, a matriz e as barras.
const niveis = dados.escala.filter((nivel) => nivel.nivel >= 1 && nivel.nivel <= 3)
const nomeNivel = Object.fromEntries(dados.escala.map((nivel) => [nivel.nivel, nivel.nome]))
const porGravidade = niveis.map((nivel) => ({
  ...nivel,
  total: problemas.filter((p) => p.gravidade === nivel.nivel).length,
}))
const totalPorHeuristica = Object.fromEntries(
  heuristicas.map((h) => [h.id, problemas.filter((p) => p.heuristicas.includes(h.id)).length]),
)
const maiorHeuristica = Math.max(...Object.values(totalPorHeuristica))
const porTela = telas.map((tela) => {
  const daTela = problemas.filter((p) => p.telas.includes(tela))
  return {
    tela,
    total: daTela.length,
    partes: niveis.map((nivel) => ({
      nivel: nivel.nivel,
      total: daTela.filter((p) => p.gravidade === nivel.nivel).length,
    })),
  }
})
const maiorTela = Math.max(...porTela.map((linha) => linha.total))
const principais = problemas.filter((p) => p.gravidade === 3)

// cor de cada nivel de gravidade, sempre com texto junto (nunca so a cor)
const CLASSE_NIVEL = { 3: estilos.g3, 2: estilos.g2, 1: estilos.g1 }

// larguras e alturas vem do JS como custom property, via ref, sem style inline
function useMedidas() {
  const ref = useRef(null)
  useEffect(() => {
    ref.current?.querySelectorAll('[data-medida]').forEach((el) => {
      el.style.setProperty('--medida', el.dataset.medida)
    })
  }, [])
  return ref
}

function Paragrafos({ lista }) {
  return lista.map((paragrafo) => (
    <p key={paragrafo} className="textoCorrido">
      {paragrafo}
    </p>
  ))
}

function Secao({ numero, id, titulo, children }) {
  return (
    <section className={pagina.secao} aria-labelledby={id}>
      <div className={pagina.tituloSecao}>
        <span className="numeroLegenda">{numero}</span>
        <h2 id={id}>{titulo}</h2>
      </div>
      {children}
    </section>
  )
}

function Legenda() {
  return (
    <ul className={estilos.legenda} aria-label={rotulos.legenda}>
      {[...niveis].reverse().map((nivel) => (
        <li key={nivel.nivel}>
          <span className={`${estilos.amostra} ${CLASSE_NIVEL[nivel.nivel]}`} aria-hidden="true" />
          {nivel.nivel} {nivel.nome}
        </li>
      ))}
    </ul>
  )
}

// barra unica do topo: os 14 problemas divididos pela gravidade
function ResumoGravidade() {
  const ref = useMedidas()
  const total = problemas.length

  return (
    <div className={estilos.resumo} ref={ref}>
      <p className={estilos.resumoTotal}>
        <strong>{total}</strong> {rotulos.resumo}
      </p>
      <div className={estilos.faixa} aria-hidden="true">
        {porGravidade.map((parte) => (
          <span
            key={parte.nivel}
            className={`${estilos.segmento} ${CLASSE_NIVEL[parte.nivel]}`}
            data-medida={(parte.total / total) * 100}
          >
            {parte.total}
          </span>
        ))}
      </div>
      <ul className={estilos.resumoLegenda}>
        {porGravidade.map((parte) => (
          <li key={parte.nivel}>
            <span className={`${estilos.amostra} ${CLASSE_NIVEL[parte.nivel]}`} aria-hidden="true" />
            <strong>{parte.total}</strong> {parte.nome.toLowerCase()}
            {parte.total === 1 ? '' : 's'}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Avaliacoes({ quantidade }) {
  return (
    <span className={estilos.avaliacoes}>
      <span className={estilos.pontos} aria-hidden="true">
        {Array.from({ length: dados.totalAvaliacoes }, (_, i) => (
          <span key={i} className={i < quantidade ? estilos.pontoCheio : estilos.pontoVazio} />
        ))}
      </span>
      {rotulos.apontadoPor} {quantidade} {rotulos.deAvaliacoes}
    </span>
  )
}

function CartaoProblema({ problema }) {
  return (
    <li className={estilos.problema}>
      <div className={estilos.problemaTopo}>
        <span className={`${estilos.selo} ${CLASSE_NIVEL[problema.gravidade]}`}>
          {nomeNivel[problema.gravidade]} ({problema.gravidade})
        </span>
        <span className={estilos.numeroProblema}>{problema.numero}</span>
      </div>
      <h3 className={estilos.problemaTitulo}>{problema.titulo}</h3>
      <p className={estilos.problemaTexto}>{problema.texto}</p>
      <div className={estilos.problemaRodape}>
        <ul className={estilos.chips} aria-label={rotulos.heuristicas}>
          {problema.heuristicas.map((id) => (
            <li key={id} className={estilos.chip}>
              <abbr title={heuristicas.find((h) => h.id === id)?.nome}>{id}</abbr>
            </li>
          ))}
        </ul>
        <Avaliacoes quantidade={problema.avaliacoes} />
      </div>
    </li>
  )
}

// a peca principal: problema x heuristica, sobre a malha tecnica do site
function Matriz() {
  const ref = useMedidas()

  return (
    <div className={estilos.matrizMoldura} ref={ref}>
      <div className={`malha ${estilos.matrizRolagem}`} tabIndex="0" role="region" aria-labelledby="matriz">
        <table className={estilos.matriz}>
          <caption className="apenasLeitor">{rotulos.legendaMatriz}</caption>
          <thead>
            <tr>
              <th scope="col" className={estilos.colProblema}>
                {rotulos.problema}
              </th>
              {heuristicas.map((h) => (
                <th key={h.id} scope="col" className={estilos.colH}>
                  <abbr title={h.nome}>{h.id}</abbr>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {problemas.map((p) => (
              <tr key={p.numero}>
                <th scope="row" className={estilos.colProblema}>
                  <span className={estilos.linhaNumero}>{p.numero}</span>
                  <span className={estilos.linhaTitulo}>{p.titulo}</span>
                  <span className="apenasLeitor">
                    , {rotulos.gravidade.toLowerCase()} {nomeNivel[p.gravidade].toLowerCase()}
                  </span>
                </th>
                {heuristicas.map((h) => (
                  <td key={h.id} className={estilos.celula}>
                    {p.heuristicas.includes(h.id) && (
                      <>
                        <span className={`${estilos.marca} ${CLASSE_NIVEL[p.gravidade]}`} aria-hidden="true" />
                        <span className="apenasLeitor">{rotulos.viola}</span>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className={estilos.colProblema}>
                {rotulos.total}
              </th>
              {heuristicas.map((h) => {
                const total = totalPorHeuristica[h.id]
                return (
                  <td
                    key={h.id}
                    className={`${estilos.total} ${total === maiorHeuristica ? estilos.totalMaior : ''}`}
                  >
                    <span
                      className={estilos.totalBarra}
                      data-medida={(total / maiorHeuristica) * 100}
                      aria-hidden="true"
                    />
                    <span className={estilos.totalNumero}>{total}</span>
                  </td>
                )
              })}
            </tr>
          </tfoot>
        </table>
      </div>

      <div className={estilos.matrizPe}>
        <Legenda />
        <dl className={estilos.glossario}>
          {heuristicas.map((h) => (
            <div key={h.id}>
              <dt>{h.id}</dt>
              <dd>{h.nome}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

// barras empilhadas: quantos problemas por tela, divididos pela gravidade
function PorTela() {
  const ref = useMedidas()

  return (
    <div className={estilos.telas} ref={ref}>
      <ul className={estilos.telasLista}>
        {porTela.map((linha) => (
          <li key={linha.tela} className={estilos.telaLinha}>
            <span className={estilos.telaNome}>{linha.tela}</span>
            <span className={estilos.telaTrilho} aria-hidden="true">
              <span className={estilos.telaPilha} data-medida={(linha.total / maiorTela) * 100}>
                {linha.partes
                  .filter((parte) => parte.total > 0)
                  .map((parte) => (
                    <span
                      key={parte.nivel}
                      className={`${estilos.telaParte} ${CLASSE_NIVEL[parte.nivel]}`}
                      data-medida={(parte.total / linha.total) * 100}
                    />
                  ))}
              </span>
            </span>
            <span className={estilos.telaTotal}>
              {linha.total}
              <span className="apenasLeitor">
                {' '}
                {rotulos.problemasDoisPontos}{' '}
                {linha.partes
                  .filter((parte) => parte.total > 0)
                  .map((parte) => `${parte.total} ${nomeNivel[parte.nivel].toLowerCase()}`)
                  .join(', ')}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <Legenda />
    </div>
  )
}

export default function AvaliacaoHeuristica() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Avaliação' }, { rotulo: 'Avaliação Heurística' }]} />

      <header className={pagina.cabecalho}>
        <h1>Avaliação Heurística</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{dados.intro}</p>
        <ResumoGravidade />
      </header>

      <section aria-labelledby="o-que-e">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="o-que-e">O que é</h2>
        </div>
        <Paragrafos lista={dados.oQueE} />
        <ol className={estilos.escala} aria-label={rotulos.escala}>
          {dados.escala.map((nivel) => (
            <li key={nivel.nivel} className={estilos.escalaItem}>
              <span className={estilos.escalaNumero}>{nivel.nivel}</span>
              {nivel.nome}
            </li>
          ))}
        </ol>
      </section>

      <Secao numero="02" id="como-foi" titulo="Como foi feita">
        <Paragrafos lista={dados.comoFoi} />
        <div className={comum.relatorio}>
          <p className={comum.relatorioTexto}>{dados.relatorio.texto}</p>
          <a className={comum.botaoDownload} href={caminhoPlanilha} download>
            <Download size={16} aria-hidden="true" />
            {dados.relatorio.rotulo}
          </a>
        </div>
      </Secao>

      <Secao numero="03" id="principais" titulo="Principais problemas">
        <p className={`textoCorrido ${pagina.intro}`}>{dados.principaisIntro}</p>
        <ol className={estilos.problemas}>
          {principais.map((problema) => (
            <CartaoProblema key={problema.numero} problema={problema} />
          ))}
        </ol>
      </Secao>

      <Secao numero="04" id="matriz" titulo="Onde estão os problemas">
        <p className={`textoCorrido ${pagina.intro}`}>{dados.matrizIntro}</p>
        <Matriz />
      </Secao>

      <Secao numero="05" id="por-tela" titulo="Problemas por tela">
        <p className={`textoCorrido ${pagina.intro}`}>{dados.telasIntro}</p>
        <PorTela />
      </Secao>

      <Secao numero="06" id="resultados" titulo="Resultados">
        <Paragrafos lista={dados.resultados} />
      </Secao>

      <Secao numero="07" id="conclusao" titulo="Conclusão da avaliação">
        <Paragrafos lista={dados.conclusao} />
      </Secao>

      <Secao numero="08" id="proximos-passos" titulo="Próximos passos">
        <ol className={comum.passos}>
          {dados.proximosPassos.map((passo) => (
            <li key={passo}>{passo}</li>
          ))}
        </ol>
      </Secao>

      <PageNav atualId="heuristica" />
    </div>
  )
}
