// Modelo de tarefas: terceira entrega da Ideacao.
//
// HTA (Hierarchical Task Analysis), uma arvore por persona, como no Presto.
// A tarefa e descrita ja com o UFFIND, no nivel de objetivo: sem botao nem
// tela, porque site ou aplicativo ainda esta em aberto (questionario).
//
// Cada no tem `numero` e `texto`; `subtarefas` e opcional. Os planos dizem
// a ordem e as condicoes, que e o que diferencia uma HTA de uma lista.

export const metodo = {
  intro:
    'Três árvores de tarefas, uma por persona, que descrevem o que cada uma precisa fazer com o UFFIND para resolver o seu cenário.',
  paragrafos: [
    'A Análise Hierárquica de Tarefas, ou HTA, decompõe um objetivo em subtarefas e cada subtarefa em passos menores. Os planos dizem em que ordem os passos acontecem e em que condição um passo é feito ou pulado.',
    'As árvores descrevem a tarefa no nível do objetivo, como "conferir a sala", e não no nível da tela, como "tocar no botão". A escolha entre site e aplicativo ainda está em aberto, e o detalhe de interface entra quando houver protótipo.',
  ],
}

export const rotulos = {
  planos: 'Planos',
  cenario: 'Responde ao cenário',
}

export const arvores = [
  {
    id: 'thiago',
    persona: 'thiago',
    cenario: 'A primeira semana sem sala',
    objetivo: 'Chegar à aula na sala certa',
    subtarefas: [
      { numero: '1', texto: 'Abrir o UFFIND pelo link do grupo ou pela busca' },
      {
        numero: '2',
        texto: 'Encontrar a disciplina',
        subtarefas: [
          { numero: '2.1', texto: 'Buscar pelo nome da disciplina ou do professor' },
          { numero: '2.2', texto: 'Escolher a turma' },
        ],
      },
      {
        numero: '3',
        texto: 'Conferir a sala',
        subtarefas: [
          { numero: '3.1', texto: 'Ler sala, bloco, andar e horário' },
          { numero: '3.2', texto: 'Ver a data da última atualização' },
          { numero: '3.3', texto: 'Ler o aviso de sala alterada' },
        ],
      },
      {
        numero: '4',
        texto: 'Avisar a turma',
        subtarefas: [
          { numero: '4.1', texto: 'Copiar o link da disciplina' },
          { numero: '4.2', texto: 'Colar no grupo' },
        ],
      },
      { numero: '5', texto: 'Ir até a sala' },
    ],
    planos: [
      'Plano 0: faça 1, 2 e 3. Faça 4 se a sala mudou ou se alguém perguntou no grupo. Depois, 5.',
      'Plano 3: faça 3.1 e 3.2. Faça 3.3 se houver aviso de mudança.',
    ],
  },
  {
    id: 'beatriz',
    persona: 'beatriz',
    cenario: 'A disciplina pelo código',
    objetivo: 'Achar a sala de uma disciplina do IC',
    subtarefas: [
      { numero: '1', texto: 'Abrir o UFFIND, sem login' },
      {
        numero: '2',
        texto: 'Buscar a disciplina',
        subtarefas: [
          { numero: '2.1', texto: 'Digitar o nome da disciplina' },
          { numero: '2.2', texto: 'Conferir o código, se tiver' },
        ],
      },
      {
        numero: '3',
        texto: 'Ver como chegar',
        subtarefas: [
          { numero: '3.1', texto: 'Abrir a localização do prédio' },
          { numero: '3.2', texto: 'Ver o andar e o lado do corredor' },
        ],
      },
      {
        numero: '4',
        texto: 'Pedir ajuda',
        subtarefas: [
          { numero: '4.1', texto: 'Ver o contato e o horário da secretaria' },
        ],
      },
    ],
    planos: [
      'Plano 0: faça 1, 2 e 3. Se 2 não trouxer resultado, faça 4.',
      'Plano 2: faça 2.1. Faça 2.2 se mais de uma turma aparecer.',
    ],
  },
  {
    id: 'silvia',
    persona: 'silvia',
    cenario: 'A sala que mudou',
    objetivo: 'Publicar uma mudança de sala',
    subtarefas: [
      { numero: '1', texto: 'Registrar a mudança na planilha da secretaria' },
      {
        numero: '2',
        texto: 'Publicar a mudança no UFFIND',
        subtarefas: [
          { numero: '2.1', texto: 'Abrir a disciplina' },
          { numero: '2.2', texto: 'Trocar a sala' },
          { numero: '2.3', texto: 'Confirmar. A data é registrada e a sala aparece como alterada' },
        ],
      },
      {
        numero: '3',
        texto: 'Avisar',
        subtarefas: [
          { numero: '3.1', texto: 'Copiar o link da disciplina' },
          { numero: '3.2', texto: 'Enviar ao professor' },
        ],
      },
      { numero: '4', texto: 'Atender no balcão mostrando a mesma página' },
    ],
    planos: [
      'Plano 0: faça 1 e, em seguida, 2. Faça 3 se a aula for na mesma semana. Faça 4 quando alguém perguntar.',
      'Plano 2: faça 2.1, 2.2 e 2.3, nessa ordem.',
    ],
  },
]
