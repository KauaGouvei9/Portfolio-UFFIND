import { useEffect, useRef, useState } from 'react'
import { Clock, WifiOff } from 'lucide-react'
import estilos from './MiroEmbed.module.css'

/**
 * Wrapper reutilizavel para iframes do Miro (ou qualquer embed).
 *
 * props:
 *   src:    URL de embed. Se null/vazio, exibe o card de "em preparacao".
 *   title:  titulo acessivel do quadro (vira aria-label do iframe).
 *   height: altura CSS do wrapper. Default "520px".
 *
 * A altura e aplicada como custom property via ref, para nao usar style inline.
 */
// ms ate avisar que o embed esta demorando. Nao derruba o iframe: painel do
// Power BI costuma passar de 12s para pintar, e trocar um iframe que ainda ia
// carregar por um card de erro era justamente o bug.
const TEMPO_LIMITE = 20000

// so aceita URL http(s) de verdade: assim o texto "COLE_AQUI_O_LINK..."
// que fica em data/embeds.js ate o grupo publicar o board cai no placeholder
// em vez de virar um iframe eternamente carregando.
const ehUrlValida = (valor) => typeof valor === 'string' && /^https?:\/\//i.test(valor.trim())

export default function MiroEmbed({ src, title, height = '520px' }) {
  const [carregado, setCarregado] = useState(false)
  const [falhou, setFalhou] = useState(false)
  const [demorando, setDemorando] = useState(false)
  const [visivel, setVisivel] = useState(false)
  const wrapperRef = useRef(null)
  const placeholderRef = useRef(null)
  const configurado = ehUrlValida(src)

  useEffect(() => {
    const alvo = wrapperRef.current ?? placeholderRef.current
    if (alvo) alvo.style.setProperty('--altura-embed', height)
  }, [height, src, falhou])

  // O iframe e lazy: quando a secao fica no fim de uma pagina longa, o
  // navegador so comeca a baixar depois que ela entra na tela. Por isso o
  // cronometro so pode comecar quando o embed fica visivel. Contar desde a
  // montagem fazia o aviso disparar antes de o embed ter tentado carregar.
  useEffect(() => {
    const alvo = wrapperRef.current
    if (!configurado || !alvo || visivel) return

    if (typeof IntersectionObserver !== 'function') {
      setVisivel(true)
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((entrada) => entrada.isIntersecting)) setVisivel(true)
      },
      { rootMargin: '200px' },
    )
    observador.observe(alvo)
    return () => observador.disconnect()
  }, [configurado, visivel])

  // iframes nem sempre disparam onError. Passado o tempo limite, oferecemos o
  // link direto sem tirar o iframe da tela: ele ainda pode terminar de carregar.
  useEffect(() => {
    if (!visivel || carregado || falhou) return
    const id = setTimeout(() => setDemorando(true), TEMPO_LIMITE)
    return () => clearTimeout(id)
  }, [visivel, carregado, falhou])

  // src ainda nao definido (null) ou ainda com o texto placeholder
  if (!configurado) {
    return (
      <div ref={placeholderRef} className={estilos.placeholder} role="status">
        <Clock className={estilos.icone} size={40} strokeWidth={1.5} aria-hidden="true" />
        <p className={estilos.placeholderTitulo}>{title}</p>
        <p className={estilos.placeholderTexto}>
          Conteúdo em preparação. Será publicado em breve.
        </p>
      </div>
    )
  }

  // o iframe existe mas nao carregou (board privado, offline, bloqueio)
  if (falhou) {
    return (
      <div ref={placeholderRef} className={estilos.placeholder} role="alert">
        <WifiOff className={estilos.icone} size={40} strokeWidth={1.5} aria-hidden="true" />
        <p className={estilos.placeholderTitulo}>Não foi possível carregar</p>
        <p className={estilos.placeholderTexto}>
          "{title}" não pôde ser exibido aqui. Isso costuma acontecer quando o navegador
          bloqueia conteúdo de terceiros ou quando o conteúdo não está público.
        </p>
        <a className={estilos.linkDireto} href={src} target="_blank" rel="noreferrer">
          Abrir em uma nova aba
        </a>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className={estilos.wrapper}>
      <iframe
        className={estilos.quadro}
        src={src}
        title={title}
        aria-label={title}
        loading="lazy"
        allow="fullscreen; clipboard-read; clipboard-write"
        allowFullScreen
        onLoad={() => setCarregado(true)}
        onError={() => setFalhou(true)}
      />
      <div
        className={`${estilos.overlay} ${carregado ? estilos.overlayOculto : ''}`}
        aria-hidden={carregado}
      >
        <span className={estilos.pulso} aria-hidden="true" />
        {demorando ? (
          <>
            <p>Está demorando mais que o normal.</p>
            <a className={estilos.linkDireto} href={src} target="_blank" rel="noreferrer">
              Abrir em uma nova aba
            </a>
          </>
        ) : (
          <p>Carregando…</p>
        )}
      </div>
    </div>
  )
}
