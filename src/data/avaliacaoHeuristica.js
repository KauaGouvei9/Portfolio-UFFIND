// Avaliacao Heuristica: primeira entrega da Avaliacao.
//
// Fonte: as 3 avaliacoes independentes (A1, A2 e A3) feitas por alunos de
// outros grupos e a planilha consolidada, publicada em public/assets/docs/.
// Os nomes dos avaliadores nao aparecem no site, por decisao do grupo.
//
// A lista `problemas` e a fonte unica: o resumo e os graficos por heuristica
// e por tela sao calculados a partir dela na pagina. Mudou a planilha, mude aqui.
//
// O problema 1 junta o relato do A1 (lado impar sem referencia) e o do A2
// (planta sem marcar onde a pessoa esta). Por isso tem H1, H2 e H6.

export const avaliacaoHeuristica = {
  intro:
    'Alunos de outros grupos inspecionaram o protótipo com as 10 heurísticas de Nielsen. Aqui estão os problemas que eles encontraram e o que vamos mudar.',

  oQueE: [
    'Na avaliação heurística, quem avalia percorre a interface sem usuários e anota onde ela fere as 10 heurísticas de usabilidade de Nielsen, propostas por Jakob Nielsen e Rolf Molich em 1990. Cada problema vem com o local, as heurísticas violadas, uma nota de gravidade e uma sugestão de redesign.',
  ],

  comoFoi: [
    'Quatro alunos de outros grupos da turma, que não participaram do projeto, avaliaram o protótipo. Uma dupla e dois avaliadores sozinhos fizeram três avaliações independentes, que chamamos aqui de A1, A2 e A3.',
    'Todos partiram das personas, dos cenários e das tarefas do portfólio: o Thiago conferindo a sala e avisando a turma, a Beatriz procurando a disciplina e chegando à sala, e a Sílvia publicando uma mudança no painel.',
    'Na consolidação, juntamos os relatos que descreviam a mesma falha, anotamos quantas avaliações encontraram cada problema e usamos a média das notas como gravidade final. Os 18 relatos viraram 14 problemas.',
  ],

  // escala de Nielsen, mostrada como legenda
  escala: [
    { nivel: 4, nome: 'Catastrófico' },
    { nivel: 3, nome: 'Grande' },
    { nivel: 2, nome: 'Pequeno' },
    { nivel: 1, nome: 'Cosmético' },
    { nivel: 0, nome: 'Não é problema' },
  ],

  relatorio: {
    texto:
      'A lista completa, com a nota de cada avaliação e a solução proposta para cada problema, está na planilha.',
    arquivo: 'assets/docs/Avaliacao_Heuristica_Consolidada_UFFIND.xlsx',
    rotulo: 'Baixar a planilha (XLSX)',
  },

  heuristicas: [
    { id: 'H1', nome: 'Visibilidade do estado do sistema' },
    { id: 'H2', nome: 'Correspondência com o mundo real' },
    { id: 'H3', nome: 'Controle e liberdade do usuário' },
    { id: 'H4', nome: 'Consistência e padronização' },
    { id: 'H5', nome: 'Reconhecimento em vez de memorização' },
    { id: 'H6', nome: 'Flexibilidade e eficiência de uso' },
    { id: 'H7', nome: 'Projeto estético e minimalista' },
    { id: 'H8', nome: 'Prevenção de erros' },
    { id: 'H9', nome: 'Recuperação de erros' },
    { id: 'H10', nome: 'Ajuda e documentação' },
  ],

  telas: [
    'Tela inicial',
    'Como chegar',
    'Página da disciplina',
    'Serviços do IC',
    'Cabeçalho e menu',
    'Painel da secretaria',
    'Várias telas',
  ],

  totalAvaliacoes: 3,

  // os 14 problemas consolidados, na ordem da planilha.
  // avaliacoes = quantas das 3 avaliacoes apontaram o problema
  problemas: [
    {
      numero: 1,
      titulo: 'Orientação sem ponto de referência',
      texto:
        '"Lado ímpar · à esquerda" nos cards não diz em relação a quê, e a planta do Como chegar não marca onde a pessoa está.',
      gravidade: 3,
      heuristicas: ['H1', 'H2', 'H6'],
      telas: ['Tela inicial', 'Como chegar'],
      avaliacoes: 2,
    },
    {
      numero: 2,
      titulo: 'Rota só pelo elevador',
      texto: 'O Como chegar não oferece o caminho pela escada.',
      gravidade: 3,
      heuristicas: ['H8', 'H10'],
      telas: ['Como chegar'],
      avaliacoes: 1,
    },
    {
      numero: 3,
      titulo: 'Selo "Sala alterada" incompleto no card',
      texto: 'Na tela inicial, o selo não mostra a data da mudança nem a sala anterior.',
      gravidade: 3,
      heuristicas: ['H1'],
      telas: ['Tela inicial'],
      avaliacoes: 1,
    },
    {
      numero: 4,
      titulo: 'Painel da secretaria no menu público',
      texto: 'Qualquer pessoa chega ao painel pelo menu, sem login.',
      gravidade: 3,
      heuristicas: ['H7', 'H8'],
      telas: ['Cabeçalho e menu'],
      avaliacoes: 1,
    },
    {
      numero: 5,
      titulo: '"Marcar como resolvido" sem confirmação',
      texto:
        'O botão não explica o que acontece com o selo no site, não pede confirmação e não deixa desfazer.',
      gravidade: 3,
      heuristicas: ['H1', 'H3', 'H8'],
      telas: ['Painel da secretaria'],
      avaliacoes: 1,
    },
    {
      numero: 6,
      titulo: 'Ícones sem rótulo',
      gravidade: 2,
      heuristicas: ['H3', 'H4', 'H5', 'H6'],
      telas: ['Tela inicial', 'Página da disciplina'],
      avaliacoes: 3,
    },
    {
      numero: 7,
      titulo: 'Textos pequenos e com pouco contraste',
      gravidade: 2,
      heuristicas: ['H7'],
      telas: ['Várias telas'],
      avaliacoes: 1,
    },
    {
      numero: 8,
      titulo: 'Minhas disciplinas sem como editar',
      gravidade: 2,
      heuristicas: ['H1', 'H3'],
      telas: ['Tela inicial'],
      avaliacoes: 1,
    },
    {
      numero: 9,
      titulo: '"Copiar link" e "Salvar" parecem caixa de seleção',
      gravidade: 2,
      heuristicas: ['H1', 'H4'],
      telas: ['Página da disciplina'],
      avaliacoes: 1,
    },
    {
      numero: 10,
      titulo: 'Abas de Serviços escondem setores no celular',
      gravidade: 2,
      heuristicas: ['H4', 'H6'],
      telas: ['Serviços do IC'],
      avaliacoes: 1,
    },
    {
      numero: 11,
      titulo: 'Sem seta de voltar na rota',
      gravidade: 2,
      heuristicas: ['H3', 'H4'],
      telas: ['Como chegar'],
      avaliacoes: 1,
    },
    {
      numero: 12,
      titulo: 'Disciplinas salvas exigem rolar para o lado',
      gravidade: 2,
      heuristicas: ['H5', 'H6'],
      telas: ['Tela inicial'],
      avaliacoes: 1,
    },
    {
      numero: 13,
      titulo: '"UFFIND" e "UFFINDINHO" juntos no cabeçalho',
      gravidade: 1,
      heuristicas: ['H4', 'H5'],
      telas: ['Cabeçalho e menu'],
      avaliacoes: 1,
    },
    {
      numero: 14,
      titulo: '"(contato ilustrativo)" no meio dos dados',
      gravidade: 1,
      heuristicas: ['H7'],
      telas: ['Serviços do IC'],
      avaliacoes: 1,
    },
  ],

  rotulos: {
    resumo: 'problemas encontrados',
    apontadoPor: 'Apontado por',
    deAvaliacoes: 'das 3 avaliações',
    gravidade: 'Gravidade',
    heuristicas: 'Heurísticas',
    legenda: 'Legenda de gravidade',
    escala: 'Escala de gravidade de Nielsen',
    problema: 'Problema',
    telas: 'Telas',
    e: 'e',
    comoLer: 'Cada quadrado é um problema. O número dentro dele é o mesmo da planilha.',
    dica: 'Passe o mouse ou toque em um quadrado para ver qual é o problema e onde mais ele aparece.',
    nenhum: 'Nenhum problema',
    verTabela: 'Ver os números em tabela',
    colunaHeuristica: 'Heurística',
    colunaTela: 'Tela',
    total: 'Total',
  },

  principaisIntro:
    'Os 5 problemas de gravidade grande. Os outros 9 estão na planilha.',

  heuristicasIntro:
    'Cada linha é uma heurística, da mais ferida para a menos ferida. Como um problema pode ferir mais de uma heurística, o mesmo quadrado aparece em mais de uma linha.',

  heuristicasDestaque: 'H1 e H4 foram as heurísticas mais feridas, com 5 problemas cada.',

  telasIntro:
    'A mesma leitura, agora por tela. Um problema pode aparecer em mais de uma tela.',

  telasDestaque: 'A tela inicial concentra mais problemas: 5 dos 14.',

  resultados: [
    'São 14 problemas: 5 grandes, 7 pequenos e 2 cosméticos. Nenhum foi considerado catastrófico.',
    'H1 (visibilidade do estado do sistema) e H4 (consistência e padronização) foram as mais violadas, com 5 problemas cada. Logo atrás vêm H3 e H6, com 4. A H9, que trata de ajudar o usuário a se recuperar de erros, não aparece, mas o protótipo também tem poucas situações de erro para testar.',
    'A tela inicial é a que mais acumula problemas: são 5, quase todos na lista de Minhas disciplinas. Em seguida vem o Como chegar, com 3.',
  ],

  conclusao: [
    'O ponto mais urgente é a orientação até a sala. Foi o único problema grave apontado por duas avaliações, e ele atinge justamente a tarefa principal do UFFIND, que é chegar à porta certa. Quem mais sofre com isso é quem não conhece o prédio, como a Beatriz. No Percurso Cognitivo apareceu a mesma dificuldade, na instrução "na parede atrás de você".',
    'Os outros problemas graves ficam divididos. Do lado do estudante, o aviso de mudança aparece incompleto e não há rota pela escada. Do lado da secretaria, o painel fica aberto no menu público e o aviso pode ser marcado como resolvido sem confirmação. Esses dois últimos mexem com a confiança nos dados, que é a razão de o UFFIND existir.',
    'Os problemas pequenos são, em geral, de clareza: ícones sem rótulo, letra pequena e botões que parecem caixa de seleção. Nenhum impede a tarefa, mas todos pesam para quem está no celular, com pressa, a caminho da aula.',
  ],

  proximosPassos: [
    'Reescrever as instruções de rota com referências fixas do prédio, marcar na planta o ponto de partida e incluir o caminho pela escada.',
    'Mostrar a data e a sala anterior no selo "Sala alterada" dos cards.',
    'Separar o acesso da secretaria, com login, e pedir confirmação com opção de desfazer em "Marcar como resolvido".',
    'Trocar os ícones soltos por botões com texto e aumentar o tamanho e o contraste das letras.',
    'Ajustar a lista de Minhas disciplinas e as abas de Serviços do IC no celular.',
    'Corrigir os dois pontos cosméticos.',
  ],
}
