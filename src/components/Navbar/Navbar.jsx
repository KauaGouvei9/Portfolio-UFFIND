import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { fasesComEntregas } from '../../data/entregas'
import { projeto } from '../../data/projeto'
import estilos from './Navbar.module.css'

const LINKS_PRINCIPAIS = [
  { rotulo: 'Início', rota: '/' },
  { rotulo: 'Roadmap', rota: '/roadmap' },
  { rotulo: 'Equipe', rota: '/equipe' },
]

// atraso antes de fechar o dropdown no mouse-out: sem ele o menu pisca
// quando o ponteiro atravessa a borda entre o botao e a lista
const ATRASO_FECHAR = 140

const marcaDoSite = `${import.meta.env.BASE_URL}favicon-512x512.png`

export default function Navbar() {
  const [temSombra, setTemSombra] = useState(false)
  // id da fase cujo menu esta aberto, ou null. So um abre por vez.
  const [faseAberta, setFaseAberta] = useState(null)
  const [drawerAberto, setDrawerAberto] = useState(false)

  const localizacao = useLocation()
  const gruposDropdownRef = useRef({})
  const botaoMenuRef = useRef(null)
  const drawerRef = useRef(null)
  const botaoFecharRef = useRef(null)
  const timerFechar = useRef(null)

  // sombra suave depois de 60px
  useEffect(() => {
    const aoRolar = () => setTemSombra(window.scrollY > 60)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // fecha tudo ao trocar de rota
  useEffect(() => {
    setFaseAberta(null)
    setDrawerAberto(false)
  }, [localizacao.pathname])

  // limpa o timer do dropdown ao desmontar
  useEffect(() => () => clearTimeout(timerFechar.current), [])

  const abrirDropdown = (faseId) => {
    clearTimeout(timerFechar.current)
    setFaseAberta(faseId)
  }

  const fecharDropdownComAtraso = () => {
    clearTimeout(timerFechar.current)
    timerFechar.current = setTimeout(() => setFaseAberta(null), ATRASO_FECHAR)
  }

  // Escape fecha dropdown e drawer; clique fora fecha o que estiver aberto
  useEffect(() => {
    const aoTeclar = (evento) => {
      if (evento.key !== 'Escape') return
      if (drawerAberto) {
        setDrawerAberto(false)
        botaoMenuRef.current?.focus()
      }
      if (faseAberta) setFaseAberta(null)
    }

    const aoClicarFora = (evento) => {
      if (faseAberta && !gruposDropdownRef.current[faseAberta]?.contains(evento.target)) {
        setFaseAberta(null)
      }
      if (
        drawerAberto &&
        !drawerRef.current?.contains(evento.target) &&
        !botaoMenuRef.current?.contains(evento.target)
      ) {
        setDrawerAberto(false)
      }
    }

    document.addEventListener('keydown', aoTeclar)
    document.addEventListener('mousedown', aoClicarFora)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.removeEventListener('mousedown', aoClicarFora)
    }
  }, [faseAberta, drawerAberto])

  // drawer aberto: foco vai para dentro, o fundo para de rolar e o Tab
  // circula apenas entre os elementos do drawer (focus trap)
  useEffect(() => {
    if (!drawerAberto) return

    botaoFecharRef.current?.focus()

    const larguraBarra = window.innerWidth - document.documentElement.clientWidth
    const overflowAnterior = document.body.style.overflow
    const paddingAnterior = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (larguraBarra > 0) document.body.style.paddingRight = `${larguraBarra}px`

    const aoTabular = (evento) => {
      if (evento.key !== 'Tab' || !drawerRef.current) return

      const focaveis = drawerRef.current.querySelectorAll('a[href], button:not([disabled])')
      if (focaveis.length === 0) return

      const primeiro = focaveis[0]
      const ultimo = focaveis[focaveis.length - 1]

      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault()
        ultimo.focus()
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault()
        primeiro.focus()
      }
    }

    document.addEventListener('keydown', aoTabular)
    return () => {
      document.removeEventListener('keydown', aoTabular)
      document.body.style.overflow = overflowAnterior
      document.body.style.paddingRight = paddingAnterior
    }
  }, [drawerAberto])

  const fecharDrawer = () => {
    setDrawerAberto(false)
    botaoMenuRef.current?.focus()
  }

  // O drawer vai para o body via portal: o <header> tem backdrop-filter, que
  // cria um containing block para position:fixed. Dentro dele o drawer ficava
  // preso à faixa da navbar e cobria o proprio botao hamburguer.
  const drawer = (
    <>
      <div className={estilos.fundo} aria-hidden="true" onClick={fecharDrawer} />
      <div
        className={estilos.drawer}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className={estilos.drawerTopo}>
          <span className={estilos.drawerTitulo}>Navegação</span>
          <button
            type="button"
            ref={botaoFecharRef}
            className={estilos.botaoMenu}
            aria-label="Fechar menu de navegação"
            onClick={fecharDrawer}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className={estilos.drawerCorpo} aria-label="Navegação principal (mobile)">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${estilos.drawerLink} ${isActive ? estilos.drawerLinkAtivo : ''}`
            }
          >
            Início
          </NavLink>

          {fasesComEntregas.map((fase) => (
            <div key={fase.faseId}>
              <p className={estilos.drawerSecao}>{fase.nome}</p>
              {fase.entregas.map((entrega) => (
                <NavLink
                  key={entrega.id}
                  to={entrega.rota}
                  className={({ isActive }) =>
                    `${estilos.drawerLink} ${estilos.drawerSub} ${
                      isActive ? estilos.drawerLinkAtivo : ''
                    }`
                  }
                >
                  {entrega.nomeCompleto}
                </NavLink>
              ))}
            </div>
          ))}

          {LINKS_PRINCIPAIS.filter((item) => item.rota !== '/').map((item) => (
            <NavLink
              key={item.rota}
              to={item.rota}
              className={({ isActive }) =>
                `${estilos.drawerLink} ${isActive ? estilos.drawerLinkAtivo : ''}`
              }
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )

  return (
    <header className={`${estilos.navbar} ${temSombra ? estilos.comSombra : ''}`}>
      <div className={`container ${estilos.interno}`}>
        <Link className={estilos.logo} to="/">
          <img className={estilos.logoMascote} src={marcaDoSite} alt="" width="56" height="56" />
          <span>
            {projeto.nomePartes.map((parte) => (
              <span key={parte.texto} className={estilos[parte.cor]}>
                {parte.texto}
              </span>
            ))}
          </span>
        </Link>

        {/* --- desktop --- */}
        <nav className={estilos.desktop} aria-label="Navegação principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${estilos.link} ${isActive ? estilos.ativo : ''}`}
          >
            Início
          </NavLink>

          {fasesComEntregas.map((fase) => {
            const aberto = faseAberta === fase.faseId
            const naFase = localizacao.pathname.startsWith(`/${fase.faseId}/`)

            return (
              <div
                key={fase.faseId}
                className={estilos.grupoDropdown}
                ref={(elemento) => {
                  gruposDropdownRef.current[fase.faseId] = elemento
                }}
                onMouseEnter={() => abrirDropdown(fase.faseId)}
                onMouseLeave={fecharDropdownComAtraso}
              >
                <button
                  type="button"
                  className={`${estilos.link} ${naFase ? estilos.ativo : ''}`}
                  aria-expanded={aberto}
                  aria-haspopup="true"
                  onClick={() => setFaseAberta(aberto ? null : fase.faseId)}
                >
                  {fase.nome}
                  <ChevronDown
                    className={`${estilos.chevron} ${aberto ? estilos.chevronAberto : ''}`}
                    size={15}
                    aria-hidden="true"
                  />
                </button>

                {aberto && (
                  <div className={estilos.dropdown} role="menu" aria-label={`Entregas da ${fase.nome}`}>
                    {fase.entregas.map((entrega) => (
                      <NavLink
                        key={entrega.id}
                        to={entrega.rota}
                        role="menuitem"
                        className={({ isActive }) =>
                          `${estilos.itemDropdown} ${isActive ? estilos.itemAtivo : ''}`
                        }
                      >
                        {entrega.nomeCompleto}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {LINKS_PRINCIPAIS.filter((item) => item.rota !== '/').map((item) => (
            <NavLink
              key={item.rota}
              to={item.rota}
              className={({ isActive }) => `${estilos.link} ${isActive ? estilos.ativo : ''}`}
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>

        {/* --- mobile --- */}
        <button
          type="button"
          ref={botaoMenuRef}
          className={estilos.botaoMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={drawerAberto}
          onClick={() => setDrawerAberto(true)}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      {drawerAberto && createPortal(drawer, document.body)}
    </header>
  )
}
