import { useEffect, useRef, useState } from 'react'
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
// nunca ficarem diferentes entre a lista, o resumo e as barras.
const niveis = dados.escala.filter((nivel) => nivel.nivel >= 1 && nivel.nivel <= 3)
const nomeNivel = Object.fromEntries(dados.escala.map((nivel) => [nivel.nivel, nivel.nome]))
const porGravidade = niveis.map((nivel) => ({
  ...nivel,
  total: problemas.filter((p) => p.gravidade === nivel.nivel).length,
}))
// uma linha de grafico: os problemas daquela heuristica ou tela, do mais
// grave para o menos grave. As linhas vao da que tem mais problemas para a
// que tem menos; no empate, a que tem mais problemas grandes vem antes.
const ordenarProblemas = (lista) =>
  [...lista].sort((a, b) => b.gravidade - a.gravidade || a.numero - b.numero)
const linha = (rotulo, lista, codigo) => ({ rotulo, codigo, problemas: ordenarProblemas(lista) })
const grandes = (l) => l.problemas.filter((p) => p.gravidade === 3).length
const ordenarLinhas = (linhas) =>
  [...linhas].sort((a, b) => b.problemas.length - a.problemas.length || grandes(b) - grandes(a))
const porHeuristica = ordenarLinhas(
  heuristicas.map((h) =>
    linha(h.nome, problemas.filter((p) => p.heuristicas.includes(h.id)), h.id),
  ),
)
const porTela = ordenarLinhas(
  telas.map((tela) => linha(tela, problemas.filter((p) => p.telas.includes(tela)))),
)
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
      {niveis.map((nivel) => (
        <li key={nivel.nivel}>
          <span className={`${estilos.amostra} ${CLASSE_NIVEL[nivel.nivel]}`} aria-hidden="true" />
          {nivel.nome} ({nivel.nivel})
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

// "a, b e c"
function listar(itens) {
  if (itens.length < 2) return itens.join('')
  return `${itens.slice(0, -1).join(', ')} ${rotulos.e} ${itens.at(-1)}`
}

const descrever = (p) =>
  `${rotulos.problema} ${p.numero} (${nomeNivel[p.gravidade].toLowerCase()}): ${p.titulo}`

// Grafico de unidades: cada quadrado e um problema, com o numero da planilha.
// Ao passar o mouse (ou tocar) num quadrado, o mesmo problema acende nas
// outras linhas e a frase abaixo do grafico diz qual e.
function GraficoProblemas({ linhas, destaque, colunaRotulo }) {
  const [ativo, setAtivo] = useState(null)
  const problemaAtivo = problemas.find((p) => p.numero === ativo)

  return (
    <figure className={estilos.grafico} data-ativo={ativo ? '' : undefined}>
      <figcaption className={estilos.graficoTopo}>
        <p className={estilos.destaque}>{destaque}</p>
        <div className={estilos.comoLer}>
          <Legenda />
          <p>{rotulos.comoLer}</p>
        </div>
      </figcaption>

      <ul
        className={estilos.linhas}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setAtivo(null)}
      >
        {linhas.map((l) => (
          <li key={l.rotulo} className={estilos.linha}>
            <span className={estilos.linhaNome}>
              {l.codigo && <strong className={estilos.codigo}>{l.codigo}</strong>}
              {l.rotulo}
            </span>
            <span className={estilos.linhaTotal}>{l.problemas.length}</span>
            {l.problemas.length === 0 ? (
              <span className={estilos.vazio}>{rotulos.nenhum}</span>
            ) : (
              <ul className={estilos.blocos}>
                {l.problemas.map((p) => (
                  <li
                    key={p.numero}
                    className={`${estilos.bloco} ${CLASSE_NIVEL[p.gravidade]}`}
                    data-em-foco={ativo === p.numero ? '' : undefined}
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setAtivo(p.numero)}
                    onClick={() => setAtivo(p.numero)}
                  >
                    <span aria-hidden="true">{p.numero}</span>
                    <span className="apenasLeitor">{descrever(p)}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <p className={estilos.leitura} aria-live="polite">
        {problemaAtivo ? (
          <>
            <strong>{descrever(problemaAtivo)}.</strong> {rotulos.heuristicas}:{' '}
            {listar(problemaAtivo.heuristicas)}. {rotulos.telas}: {listar(problemaAtivo.telas)}.
          </>
        ) : (
          rotulos.dica
        )}
      </p>

      <details className={estilos.tabela}>
        <summary>{rotulos.verTabela}</summary>
        <div className={estilos.tabelaRolagem}>
          <table>
            <thead>
              <tr>
                <th scope="col">{colunaRotulo}</th>
                {niveis.map((nivel) => (
                  <th key={nivel.nivel} scope="col">
                    {nivel.nome}
                  </th>
                ))}
                <th scope="col">{rotulos.total}</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((l) => (
                <tr key={l.rotulo}>
                  <th scope="row">{l.codigo ? `${l.codigo} ${l.rotulo}` : l.rotulo}</th>
                  {niveis.map((nivel) => (
                    <td key={nivel.nivel}>
                      {l.problemas.filter((p) => p.gravidade === nivel.nivel).length}
                    </td>
                  ))}
                  <td>{l.problemas.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
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

      <Secao numero="04" id="por-heuristica" titulo="Problemas por heurística">
        <p className={`textoCorrido ${pagina.intro}`}>{dados.heuristicasIntro}</p>
        <GraficoProblemas
          linhas={porHeuristica}
          destaque={dados.heuristicasDestaque}
          colunaRotulo={rotulos.colunaHeuristica}
        />
      </Secao>

      <Secao numero="05" id="por-tela" titulo="Problemas por tela">
        <p className={`textoCorrido ${pagina.intro}`}>{dados.telasIntro}</p>
        <GraficoProblemas
          linhas={porTela}
          destaque={dados.telasDestaque}
          colunaRotulo={rotulos.colunaTela}
        />
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
