import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { entregasVizinhas } from '../data/entregas'
import estilos from './PageNav.module.css'

/**
 * Navegacao "Anterior / Proxima" entre as entregas de uma mesma fase.
 * A ordem vem de data/entregas.js. Reordenar aquele array reordena a navegacao,
 * sem tocar em nenhuma pagina.
 */
export default function PageNav({ atualId }) {
  const vizinhas = entregasVizinhas(atualId)
  if (!vizinhas) return null

  const { fase, anterior, proxima } = vizinhas
  if (!anterior && !proxima) return null

  return (
    <nav className={estilos.nav} aria-label={`Navegação entre entregas da ${fase.nome}`}>
      {anterior && (
        <Link className={estilos.link} to={anterior.rota}>
          <ArrowLeft className={estilos.icone} size={18} aria-hidden="true" />
          <span>
            <span className={estilos.rotulo}>Anterior</span>
            <span className={estilos.titulo}>{anterior.nomeCompleto}</span>
          </span>
        </Link>
      )}

      {proxima && (
        <Link className={`${estilos.link} ${estilos.proxima}`} to={proxima.rota}>
          <span>
            <span className={estilos.rotulo}>Próxima</span>
            <span className={estilos.titulo}>{proxima.nomeCompleto}</span>
          </span>
          <ArrowRight className={estilos.icone} size={18} aria-hidden="true" />
        </Link>
      )}
    </nav>
  )
}
