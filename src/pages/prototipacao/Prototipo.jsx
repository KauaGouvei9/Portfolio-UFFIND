import { ExternalLink } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import MiroEmbed from '../../components/MiroEmbed'
import PageNav from '../../components/PageNav'
import { embeds, links } from '../../data/embeds'
import { prototipo } from '../../data/prototipo'
import pagina from '../Pagina.module.css'
import estilos from './Prototipo.module.css'

export default function Prototipo() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Prototipação' }, { rotulo: 'Protótipo' }]} />

      <header className={pagina.cabecalho}>
        <h1>Protótipo</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{prototipo.intro}</p>
      </header>

      <section aria-labelledby="o-que-e">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="o-que-e">O que é</h2>
        </div>
        {prototipo.oQueE.map((paragrafo) => (
          <p key={paragrafo} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="prototipo-final">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="prototipo-final">Protótipo</h2>
        </div>

        <MiroEmbed src={embeds.prototipo} title={prototipo.tituloEmbed} height="760px" />

        <a className={estilos.abrir} href={links.prototipo} target="_blank" rel="noreferrer">
          {prototipo.abrir}
          <ExternalLink size={15} aria-hidden="true" />
          <span className="apenasLeitor">(abre em uma nova aba)</span>
        </a>
      </section>

      <PageNav atualId="prototipo" />
    </div>
  )
}
