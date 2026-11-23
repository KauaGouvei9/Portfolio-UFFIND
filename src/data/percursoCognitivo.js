// Percurso Cognitivo: terceira entrega da Avaliacao.
//
// Fonte: as planilhas individuais do Kaua Gouveia (primeiro acesso) e do
// Fabricio Rivas (segundo acesso), as duas com o Thiago como persona e o
// metodo das 4 perguntas. A pagina mostra so os passos em que alguma
// resposta foi "nao" ou "parcialmente", como nos portfolios de exemplo.

export const percursoCognitivo = {
  intro:
    'O protótipo percorrido passo a passo, no lugar do Thiago, para ver onde ele pode travar.',

  oQueE: [
    'O Percurso Cognitivo é um método de inspeção que avalia se a interface é fácil de aprender usando, sem manual. O avaliador assume o lugar de uma persona, divide a tarefa em passos e, em cada passo, responde a quatro perguntas.',
  ],

  perguntas: [
    'O usuário vai tentar fazer a ação certa?',
    'O usuário vai perceber que a ação certa está disponível?',
    'O usuário vai associar a ação ao que ele quer fazer?',
    'O usuário vai perceber que está avançando na tarefa?',
  ],

  comoFoi:
    'Fizemos dois percursos com o Thiago, a persona principal. No primeiro, ele usa o UFFIND pela primeira vez e só sabe o nome da disciplina. No segundo, ele já usou o app antes e tem Banco de Dados I salva em Minhas disciplinas. Cada percurso teve duas tarefas, avaliadas no protótipo publicado, com os dados de exemplo.',

  rotulos: {
    tarefa: 'Tarefa',
    acesso: 'Situação',
    problemas: 'Onde ele pode travar',
    sugestoes: 'Sugestões de redesign',
    conhecimentos: 'O que o usuário precisa saber',
  },

  tarefas: [
    {
      titulo: 'Descobrir a sala de Banco de Dados I e ver se está atualizada',
      acesso: 'Primeiro acesso',
      problemas: [
        'O "Pular guia" é um link pequeno no canto da tela e quase não aparece.',
        '"Lado ímpar" exige conhecer a regra do corredor, que fica numa caixa separada do cartão da sala.',
        '"Alterada em 03/11" e "Hoje às 08:30" são duas datas na mesma tela, e a de atualização tem menos destaque.',
      ],
      sugestoes: [
        'Deixar o "Pular guia" mais visível.',
        'Explicar o lado ímpar dentro do próprio cartão da sala.',
        'Juntar as duas datas numa frase só.',
      ],
    },
    {
      titulo: 'Avisar a turma e chegar até a Sala 305',
      acesso: 'Primeiro acesso',
      problemas: [
        'A confirmação "Link copiado com sucesso!" aparece longe do botão.',
        'A instrução "na parede atrás de você" confunde depois que ele já virou à esquerda.',
        'Não há nenhum aviso de que ele chegou à sala certa.',
      ],
      sugestoes: [
        'Mostrar o "Link copiado" junto do botão.',
        'Reescrever a instrução do passo 3 e marcar a porta da Sala 305 na planta.',
        'Avisar quando ele chegar ao destino.',
      ],
    },
    {
      titulo: 'Ver se a sala mudou, ativar o aviso e passar o link para a turma',
      acesso: 'Segundo acesso',
      problemas: [
        'No celular, Minhas disciplinas aparece depois da busca e dos três atalhos, e ele precisa rolar a tela para ver se a sala mudou. Foi o passo mais difícil.',
        'O botão "Salvar em Minhas disciplinas" continua aparecendo para uma disciplina que já está salva.',
        '"Vamos avisar neste aparelho" não diz como o aviso chega.',
        'A data de atualização fica embaixo da busca, longe dos cartões.',
      ],
      sugestoes: [
        'No celular, mostrar Minhas disciplinas antes dos atalhos para quem já salvou alguma.',
        'Trocar "Salvar" por "Salva" quando a disciplina já estiver na lista.',
        'Explicar como o aviso chega.',
      ],
    },
    {
      titulo: 'Descobrir onde fica o Achados e Perdidos e como chegar lá',
      acesso: 'Segundo acesso',
      problemas: [
        'A busca por "achados" responde "Não encontramos" e sugere conferir a grafia ou buscar pelo professor. Ela não aponta para Serviços do IC, onde o serviço está. Foi o passo mais difícil.',
        'O campo de busca diz "Disciplina, professor ou sala" e não fala de serviços.',
        '"Serviços do IC · Secretarias e suporte" não deixa claro que o Achados e Perdidos está ali. A dica fica no guia inicial, que quem pulou não viu.',
        'No celular, os setores viram abas que rolam para o lado, e o Achados e Perdidos fica fora da tela.',
      ],
      sugestoes: [
        'Fazer a busca encontrar também os serviços.',
        'Quando a busca não encontrar nada, sugerir Serviços do IC.',
        'Subir o cartão Serviços do IC para a primeira posição dos atalhos.',
      ],
    },
  ],

  conhecimentos:
    'Usar um site no celular, copiar e colar um link no WhatsApp, entender andar e lado ímpar e par, saber que Minhas disciplinas e o aviso valem só no aparelho e saber que achados e perdidos é um serviço, e não uma disciplina.',

  conclusao: [
    'O caminho principal funciona: a busca é a primeira coisa que o Thiago vê, a sala aparece em destaque, "Ver como chegar" é o botão mais visível e copiar o link mostra uma confirmação que já diz o próximo passo.',
    'Os pontos em que ele trava são os mesmos que apareceram na avaliação heurística: a orientação até a sala, com o lado ímpar e o passo a passo, a lista de Minhas disciplinas no celular e as abas de Serviços do IC. O percurso acrescenta um ponto que a inspeção não pegou: a busca não encontra serviços e, quando falha, não indica outro caminho.',
  ],
}
