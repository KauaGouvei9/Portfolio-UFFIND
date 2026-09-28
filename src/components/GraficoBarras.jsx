import { useEffect, useRef } from 'react'
import estilos from './GraficoBarras.module.css'

/**
 * Grafico de barras horizontais para dados de percentual.
 *
 * props:
 *   dados          lista de { rotulo, valor, base? }
 *   destaqueAcima  valores acima deste limiar ganham a cor de marcacao
 *
 * A barra e decorativa: o numero aparece como texto ao lado, entao quem usa
 * leitor de tela recebe a mesma informacao sem depender do desenho.
 *
 * base e opcional e traz a contagem por tras do percentual (ex.: "24/30").
 * Ela importa porque as bases variam entre as perguntas do questionario.
 */
export default function GraficoBarras({ dados, destaqueAcima }) {
  const containerRef = useRef(null)

  // a largura vem de data-valor, aplicada como custom property.
  // Evita style inline no JSX e mantem o calculo no CSS.
  useEffect(() => {
    const barras = containerRef.current?.querySelectorAll('[data-valor]')
    barras?.forEach((barra) => {
      barra.style.setProperty('--p', barra.dataset.valor)
    })
  }, [dados])

  const formatar = (valor) => `${valor.toFixed(1).replace('.', ',')}%`

  return (
    <div className={estilos.grafico} ref={containerRef}>
      {dados.map((item) => {
        const destacado = destaqueAcima != null && item.valor >= destaqueAcima

        return (
          <div key={item.rotulo} className={`${estilos.linha} ${destacado ? estilos.destaque : ''}`}>
            <p className={estilos.rotulo}>{item.rotulo}</p>
            <div className={estilos.trilho} aria-hidden="true">
              <span className={estilos.preenchimento} data-valor={item.valor} />
            </div>
            <p className={estilos.valor}>
              {formatar(item.valor)}
              {item.base && <span className={estilos.base}>{item.base}</span>}
            </p>
          </div>
        )
      })}
    </div>
  )
}
