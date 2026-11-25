// Roadmap: o processo de design do projeto, sem datas e sem status.
// Substitui o antigo cronograma.js. Um portfolio publico mostra o percurso
// metodologico, nao o calendario interno do grupo.

export const roadmap = {
  intro:
    'O roadmap é o mapa do caminho que o grupo fez até chegar ao UFFIND. Seguimos o Design Centrado no Humano, proposto pela IDEO, em quatro fases. Cada item abaixo leva para a página da atividade.',

  // As colunas saem de data/entregas.js: entrou entrega nova, o roadmap
  // atualiza sozinho.
  diagramaTitulo: 'As quatro fases do projeto',
  diagramaLegenda:
    'A altura da onda mostra o quanto o problema estava aberto. Ela sobe quando o grupo explora e levanta possibilidades, e desce quando decide e afunila.',

  percursoTitulo: 'O percurso, fase por fase',
  percurso: {
    imersao:
      'Começamos tentando entender o problema antes de pensar em tela. O How Might We definiu a pergunta que guiou o projeto. Na Matriz CSD separamos o que já sabíamos do que era só suposição ou dúvida, e a análise competitiva mostrou como outros sistemas lidam com localização e informação acadêmica. Depois fomos ouvir as pessoas, com o Mapa de Empatia feito em sala com estudantes, as entrevistas e o questionário. Foi daí que saíram as necessidades que sustentam o resto do projeto.',
    ideacao:
      'Com a pesquisa em mãos, passamos a decidir para quem e para quê. As personas dão rosto aos públicos do UFFIND: estudantes, professores e servidores, e visitantes. Os cenários-problema mostram o problema acontecendo no dia a dia do Instituto, e o modelo de tarefas quebra em passos o que cada persona precisa fazer. No Crazy 4 colocamos ideias no papel, rápido, e escolhemos o que entraria no protótipo.',
    prototipacao:
      'Aqui as ideias viraram telas. Montamos um protótipo de alta fidelidade no Figma Make, navegável no formato de celular, que cobre as tarefas das personas: conferir a sala de uma aula, encontrar uma disciplina e o caminho até ela, e publicar uma mudança no painel da secretaria.',
    avaliacao:
      'Por fim, colocamos o protótipo à prova. Na Avaliação Heurística, estudantes de outros grupos encontraram 14 problemas com base nas heurísticas de Nielsen. No First Click vimos onde as pessoas clicam primeiro para cumprir uma tarefa, e no Percurso Cognitivo seguimos, passo a passo, o caminho de quem usa o sistema pela primeira vez. Tudo isso virou a lista do que muda na próxima versão.',
  },
}

// Fases usadas pelo rodape e pelas paginas de fase ainda nao publicadas.
export const fases = [
  {
    id: 'imersao',
    nome: 'Imersão',
    rota: '/imersao/hmw',
    descricao: 'Entender o problema, o contexto e as pessoas envolvidas.',
  },
  {
    id: 'ideacao',
    nome: 'Ideação',
    rota: '/ideacao',
    descricao: 'Gerar e priorizar alternativas de solução.',
  },
  {
    id: 'prototipacao',
    nome: 'Prototipação',
    rota: '/prototipacao',
    descricao: 'Materializar as ideias em protótipos navegáveis.',
  },
  {
    id: 'avaliacao',
    nome: 'Avaliação',
    rota: '/avaliacao',
    descricao: 'Testar com usuários e medir a qualidade da interação.',
  },
]
