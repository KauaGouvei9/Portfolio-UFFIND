// Modelo de tarefas: terceira entrega da Ideacao.
//
// HTA (Hierarchical Task Analysis), uma arvore por persona, como no Presto.
// Atende a Atividade 6 da aula 10: pelo menos 3 tarefas de nivel 1, cada uma
// com pelo menos 2 de nivel 2, e cada nivel 2 com pelo menos 1 de nivel 3.
//
// A tarefa e descrita ja com o UFFIND. Os niveis 1 e 2 ficam no objetivo; o
// nivel 3 desce ate a acao, sem amarrar a uma tela especifica, porque o
// prototipo ainda vai ser gerado.
//
// Cada no tem `numero` e `texto`; `subtarefas` e opcional e pode se repetir
// em qualquer nivel. Os planos dizem a ordem e as condicoes.

export const metodo = {
  intro:
    'Três árvores de tarefas, uma por persona, que descrevem o que cada uma precisa fazer com o UFFIND para resolver o seu cenário.',
  paragrafos: [
    'A Análise Hierárquica de Tarefas, ou HTA, decompõe um objetivo em tarefas, cada tarefa em subtarefas e cada subtarefa em ações. Os planos dizem em que ordem os passos acontecem e em que condição um passo é feito ou pulado.',
    'Cada árvore tem quatro tarefas de primeiro nível, e todas descem até o terceiro nível, que é a ação que a pessoa faz na tela. No fim da página, comparamos a mesma tarefa feita por um usuário experiente e por um inexperiente.',
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
      {
        numero: '1',
        texto: 'Encontrar a disciplina no UFFIND',
        subtarefas: [
          {
            numero: '1.1',
            texto: 'Abrir o UFFIND',
            subtarefas: [
              { numero: '1.1.1', texto: 'Tocar no link fixado no grupo da turma' },
              { numero: '1.1.2', texto: 'Buscar o UFFIND no navegador' },
            ],
          },
          {
            numero: '1.2',
            texto: 'Achar a disciplina',
            subtarefas: [
              { numero: '1.2.1', texto: 'Digitar o nome da disciplina ou do professor' },
              { numero: '1.2.2', texto: 'Escolher a turma na lista' },
            ],
          },
        ],
      },
      {
        numero: '2',
        texto: 'Conferir a sala',
        subtarefas: [
          {
            numero: '2.1',
            texto: 'Ler o resultado',
            subtarefas: [
              { numero: '2.1.1', texto: 'Ver sala, bloco e andar' },
              { numero: '2.1.2', texto: 'Ver o horário' },
            ],
          },
          {
            numero: '2.2',
            texto: 'Checar se a informação vale',
            subtarefas: [
              { numero: '2.2.1', texto: 'Ver a data da última atualização' },
              { numero: '2.2.2', texto: 'Ler o aviso de sala alterada' },
            ],
          },
        ],
      },
      {
        numero: '3',
        texto: 'Avisar a turma',
        subtarefas: [
          {
            numero: '3.1',
            texto: 'Copiar o link da disciplina',
            subtarefas: [{ numero: '3.1.1', texto: 'Tocar em "Copiar link"' }],
          },
          {
            numero: '3.2',
            texto: 'Mandar no grupo',
            subtarefas: [{ numero: '3.2.1', texto: 'Colar o link na conversa da turma' }],
          },
        ],
      },
      {
        numero: '4',
        texto: 'Ir até a sala',
        subtarefas: [
          {
            numero: '4.1',
            texto: 'Chegar ao andar',
            subtarefas: [{ numero: '4.1.1', texto: 'Subir até o andar indicado no resultado' }],
          },
          {
            numero: '4.2',
            texto: 'Achar a porta',
            subtarefas: [{ numero: '4.2.1', texto: 'Seguir o lado do corredor indicado' }],
          },
        ],
      },
    ],
    planos: [
      'Plano 0: faça 1, 2 e 4. Faça 3 antes de 4 se a sala mudou ou se alguém perguntou no grupo.',
      'Plano 1.1: faça 1.1.1. Se não houver link no grupo, faça 1.1.2.',
      'Plano 1: se o link do grupo já abriu a disciplina, pule 1.2.',
      'Plano 2.2: faça 2.2.1. Faça 2.2.2 se houver aviso de mudança.',
    ],
  },
  {
    id: 'beatriz',
    persona: 'beatriz',
    cenario: 'A disciplina pelo código',
    objetivo: 'Achar a sala de uma disciplina do IC',
    subtarefas: [
      {
        numero: '1',
        texto: 'Abrir o UFFIND, sem login',
        subtarefas: [
          {
            numero: '1.1',
            texto: 'Chegar ao site',
            subtarefas: [
              { numero: '1.1.1', texto: 'Ler o QR Code na entrada do prédio' },
              { numero: '1.1.2', texto: 'Digitar o endereço no navegador' },
            ],
          },
          {
            numero: '1.2',
            texto: 'Entender a tela inicial',
            subtarefas: [{ numero: '1.2.1', texto: 'Localizar o campo de busca no topo' }],
          },
        ],
      },
      {
        numero: '2',
        texto: 'Buscar a disciplina',
        subtarefas: [
          {
            numero: '2.1',
            texto: 'Digitar o nome',
            subtarefas: [{ numero: '2.1.1', texto: 'Escrever o nome como aparece na inscrição' }],
          },
          {
            numero: '2.2',
            texto: 'Confirmar a turma',
            subtarefas: [{ numero: '2.2.1', texto: 'Conferir o código, se aparecer mais de uma turma' }],
          },
        ],
      },
      {
        numero: '3',
        texto: 'Ver como chegar',
        subtarefas: [
          {
            numero: '3.1',
            texto: 'Achar o prédio',
            subtarefas: [{ numero: '3.1.1', texto: 'Abrir a localização no mapa' }],
          },
          {
            numero: '3.2',
            texto: 'Achar a sala dentro do prédio',
            subtarefas: [{ numero: '3.2.1', texto: 'Ver o andar e o lado do corredor' }],
          },
        ],
      },
      {
        numero: '4',
        texto: 'Pedir ajuda',
        subtarefas: [
          {
            numero: '4.1',
            texto: 'Ver o contato da secretaria',
            subtarefas: [{ numero: '4.1.1', texto: 'Ler o horário de atendimento e o andar' }],
          },
          {
            numero: '4.2',
            texto: 'Avisar que não encontrou',
            subtarefas: [{ numero: '4.2.1', texto: 'Tocar em "Informar erro"' }],
          },
        ],
      },
    ],
    planos: [
      'Plano 0: faça 1, 2 e 3. Se 2 não trouxer resultado, faça 4.',
      'Plano 1.1: faça 1.1.1. Se não houver QR Code por perto, faça 1.1.2.',
      'Plano 2: faça 2.1. Faça 2.2 se aparecer mais de uma turma.',
    ],
  },
  {
    id: 'silvia',
    persona: 'silvia',
    cenario: 'A sala que mudou',
    objetivo: 'Publicar uma mudança de sala',
    subtarefas: [
      {
        numero: '1',
        texto: 'Registrar a mudança na planilha da secretaria',
        subtarefas: [
          {
            numero: '1.1',
            texto: 'Abrir a planilha',
            subtarefas: [{ numero: '1.1.1', texto: 'Localizar a linha da turma' }],
          },
          {
            numero: '1.2',
            texto: 'Alterar a sala',
            subtarefas: [{ numero: '1.2.1', texto: 'Salvar a planilha' }],
          },
        ],
      },
      {
        numero: '2',
        texto: 'Publicar a mudança no UFFIND',
        subtarefas: [
          {
            numero: '2.1',
            texto: 'Abrir a disciplina',
            subtarefas: [{ numero: '2.1.1', texto: 'Buscar pelo código da turma' }],
          },
          {
            numero: '2.2',
            texto: 'Trocar a sala',
            subtarefas: [{ numero: '2.2.1', texto: 'Escolher a sala nova na lista' }],
          },
          {
            numero: '2.3',
            texto: 'Confirmar',
            subtarefas: [{ numero: '2.3.1', texto: 'Ver a turma marcada como sala alterada, com a data' }],
          },
        ],
      },
      {
        numero: '3',
        texto: 'Avisar',
        subtarefas: [
          {
            numero: '3.1',
            texto: 'Copiar o link da disciplina',
            subtarefas: [{ numero: '3.1.1', texto: 'Tocar em "Copiar link"' }],
          },
          {
            numero: '3.2',
            texto: 'Enviar ao professor',
            subtarefas: [{ numero: '3.2.1', texto: 'Colar o link no e-mail ou no WhatsApp' }],
          },
        ],
      },
      {
        numero: '4',
        texto: 'Atender no balcão',
        subtarefas: [
          {
            numero: '4.1',
            texto: 'Abrir a mesma página',
            subtarefas: [{ numero: '4.1.1', texto: 'Buscar a disciplina que a pessoa perguntou' }],
          },
          {
            numero: '4.2',
            texto: 'Mostrar a resposta',
            subtarefas: [{ numero: '4.2.1', texto: 'Mostrar a tela ou o QR Code da página' }],
          },
        ],
      },
    ],
    planos: [
      'Plano 0: faça 1 e, em seguida, 2. Faça 3 se a aula for na mesma semana. Faça 4 quando alguém perguntar.',
      'Plano 2: faça 2.1, 2.2 e 2.3, nessa ordem.',
    ],
  },
]

// Atividade 6: a mesma tarefa para um usuario experiente e um inexperiente,
// comparada pelo KLM, a forma mais simples do GOMS (aula 10, slides 12 a 16).
// Tempos dos operadores conforme o slide 12. Cada toque conta como apertar e
// soltar (B + B), como no exemplo do slide 13. O tempo de resposta do sistema
// (W) e o mesmo nos dois caminhos e fica fora da soma.
export const comparacao = {
  titulo: 'Usuário experiente e inexperiente',
  intro:
    'A tarefa "conferir a sala de uma disciplina" tem dois caminhos no UFFIND. O experiente chega pelo link fixado no grupo da turma, como o Thiago. A inexperiente não está em grupo nenhum e precisa buscar pelo nome, como a Beatriz. O tempo de cada caminho foi estimado pelo KLM, a técnica mais simples do GOMS.',
  nota:
    'Tempos dos operadores conforme a aula 10. Cada toque conta como apertar e soltar (B B). A espera pelo sistema (W) é igual nos dois caminhos e não entra na soma.',
  rotulos: { operador: 'Operador', acao: 'Ação', tempo: 'Tempo (s)', total: 'Total' },
  opcoes: [
    {
      id: 'experiente',
      titulo: 'Experiente: pelo link do grupo',
      persona: 'thiago',
      passos: [
        { operador: 'M', acao: 'Decidir abrir o link fixado no grupo', tempo: 1.2 },
        { operador: 'P', acao: 'Levar o dedo até o link', tempo: 1.1 },
        { operador: 'B B', acao: 'Tocar no link', tempo: 0.4 },
        { operador: 'M', acao: 'Ler sala, andar e data de atualização', tempo: 1.2 },
      ],
    },
    {
      id: 'inexperiente',
      titulo: 'Inexperiente: pela busca',
      persona: 'beatriz',
      passos: [
        { operador: 'M', acao: 'Decidir usar a busca', tempo: 1.2 },
        { operador: 'P', acao: 'Levar o dedo até o campo de busca', tempo: 1.1 },
        { operador: 'B B', acao: 'Tocar no campo', tempo: 0.4 },
        { operador: 'M', acao: 'Lembrar o nome da disciplina', tempo: 1.2 },
        { operador: 'T(11)', acao: 'Digitar "programação" (11 letras, 0,20 s cada)', tempo: 2.2 },
        { operador: 'M', acao: 'Reconhecer a turma certa na lista', tempo: 1.2 },
        { operador: 'P', acao: 'Levar o dedo até o resultado', tempo: 1.1 },
        { operador: 'B B', acao: 'Tocar no resultado', tempo: 0.4 },
        { operador: 'M', acao: 'Ler sala e andar', tempo: 1.2 },
        { operador: 'P', acao: 'Levar o dedo até "Como chegar"', tempo: 1.1 },
        { operador: 'B B', acao: 'Tocar em "Como chegar"', tempo: 0.4 },
        { operador: 'M', acao: 'Ler o andar e o lado do corredor', tempo: 1.2 },
      ],
    },
  ],
  conclusao: [
    'Pelo link, a tarefa leva cerca de 3,9 segundos. Pela busca, cerca de 12,7, mais de três vezes. Só que o link só chega a quem está no grupo da turma, e a Beatriz não está em grupo nenhum.',
    'Por isso o UFFIND precisa dos dois caminhos: o link para quem já usa os grupos e a busca pelo nome para quem chega de fora. Se a lista de resultados já mostrar a sala e o andar, a Beatriz nem precisa abrir a disciplina, e economiza um P e um toque, cerca de 1,5 segundo.',
  ],
}
