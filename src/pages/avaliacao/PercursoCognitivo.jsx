import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { percursoCognitivo as dados } from '../../data/percursoCognitivo'
import pagina from '../Pagina.module.css'
import estilos from './Avaliacao.module.css'

const { rotulos } = dados

export default function PercursoCognitivo() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Avaliação' }, { rotulo: 'Percurso Cognitivo' }]} />

      <header className={pagina.cabecalho}>
        <h1>Percurso Cognitivo</h1>
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
        <ol className={estilos.passos}>
          {dados.perguntas.map((pergunta) => (
            <li key={pergunta}>{pergunta}</li>
          ))}
        </ol>
      </section>

      <section className={pagina.secao} aria-labelledby="como-foi">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="como-foi">Como foi feito</h2>
        </div>
        <p className="textoCorrido">{dados.comoFoi}</p>
      </section>

      <section className={pagina.secao} aria-labelledby="tarefas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="tarefas">As tarefas</h2>
        </div>

        <div className={estilos.cartoes}>
          {dados.tarefas.map((tarefa, indice) => (
            <article key={tarefa.titulo} className={estilos.cartao}>
              <p className={estilos.etiqueta}>
                {rotulos.acesso}: {tarefa.acesso}
              </p>
              <h3 className={estilos.cartaoTitulo}>
                {rotulos.tarefa} {indice + 1}: {tarefa.titulo}
              </h3>

              <div className={estilos.colunas}>
                <div>
                  <p className={estilos.problemaTitulo}>{rotulos.problemas}</p>
                  <ul className={estilos.lista}>
                    {tarefa.problemas.map((problema) => (
                      <li key={problema}>{problema}</li>
                    ))}
                  </ul>
                </div>
                <div className={estilos.sugestao}>
                  <p className={estilos.sugestaoTitulo}>{rotulos.sugestoes}</p>
                  <ul className={estilos.lista}>
                    {tarefa.sugestoes.map((sugestao) => (
                      <li key={sugestao}>{sugestao}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="conhecimentos">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="conhecimentos">{rotulos.conhecimentos}</h2>
        </div>
        <p className="textoCorrido">{dados.conhecimentos}</p>
      </section>

      <section className={pagina.secao} aria-labelledby="conclusao">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">05</span>
          <h2 id="conclusao">Conclusão</h2>
        </div>
        {dados.conclusao.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <PageNav atualId="percurso-cognitivo" />
    </div>
  )
}
