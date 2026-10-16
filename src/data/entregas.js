// Entregas do portfolio, agrupadas por fase.
// Alimenta o grid da Home, os menus da Navbar, o rodape e a navegacao
// "Anterior / Proxima". A ordem dos arrays e a ordem da navegacao.
//
// O faseId e o mesmo de `fases` em data/roadmap.js. Uma fase sem entregas
// continua usando a pagina de etapa futura (ComingSoon).
//
// Sem campo de status: este e um portfolio publico, nao um quadro de
// acompanhamento. Material que ainda nao existe aparece como estado vazio
// dentro da propria pagina.

export const entregasPorFase = [
  {
    faseId: 'imersao',
    nome: 'Imersão',
    intro:
      'A etapa de entender o problema, o contexto e as pessoas envolvidas. Cada técnica aplicada tem uma página própria.',
    entregas: [
      {
        id: 'hmw',
        nome: 'HMW',
        nomeCompleto: 'How Might We',
        rota: '/imersao/hmw',
        resumo: 'A pergunta que define o problema: quem, o que e as metas de design.',
      },
      {
        id: 'matriz-csd',
        nome: 'Matriz CSD',
        nomeCompleto: 'Matriz CSD',
        rota: '/imersao/matriz-csd',
        resumo: 'Desk research: certezas, suposições e dúvidas sobre o problema.',
      },
      {
        id: 'analise-competitiva',
        nome: 'Análise Competitiva',
        nomeCompleto: 'Análise Competitiva',
        rota: '/imersao/analise-competitiva',
        resumo: 'Sistemas concorrentes e inspiradores comparados lado a lado.',
      },
      {
        id: 'mapa-empatia',
        nome: 'Mapa de Empatia',
        nomeCompleto: 'Mapa de Empatia',
        rota: '/imersao/mapa-empatia',
        resumo: 'O que o usuário diz, pensa, faz e sente, e os requisitos que saem daí.',
      },
      {
        id: 'entrevistas',
        nome: 'Entrevistas',
        nomeCompleto: 'Entrevistas',
        rota: '/imersao/entrevistas',
        resumo: 'Técnica qualitativa: roteiro, TCLE e método de análise.',
      },
      {
        id: 'questionario',
        nome: 'Questionário',
        nomeCompleto: 'Questionário',
        rota: '/imersao/questionario',
        resumo: 'Técnica quantitativa, aberta para resposta no Google Forms.',
      },
    ],
  },
  {
    faseId: 'ideacao',
    nome: 'Ideação',
    intro:
      'A etapa de transformar o que a pesquisa encontrou em quem vamos atender, em quais situações e com quais tarefas.',
    entregas: [
      {
        id: 'personas',
        nome: 'Personas',
        nomeCompleto: 'Personas',
        rota: '/ideacao/personas',
        resumo: 'Três personas, uma por grupo do público, e o dado que sustenta cada uma.',
      },
    ],
  },
]

// so as fases que ja tem pagina publicada
export const fasesComEntregas = entregasPorFase.filter((fase) => fase.entregas.length > 0)

export function faseDaEntrega(entregaId) {
  return entregasPorFase.find((fase) =>
    fase.entregas.some((entrega) => entrega.id === entregaId),
  )
}

// vizinhas dentro da mesma fase. A navegacao nunca atravessa de uma fase
// para outra, porque cada fase tem o seu proprio percurso.
export function entregasVizinhas(entregaId) {
  const fase = faseDaEntrega(entregaId)
  if (!fase) return null

  const indice = fase.entregas.findIndex((entrega) => entrega.id === entregaId)
  return {
    fase,
    anterior: fase.entregas[indice - 1],
    proxima: fase.entregas[indice + 1],
  }
}

export function faseTemEntregas(faseId) {
  return fasesComEntregas.some((fase) => fase.faseId === faseId)
}
