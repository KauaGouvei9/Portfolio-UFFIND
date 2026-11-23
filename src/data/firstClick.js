// First Click: segunda entrega da Avaliacao.
//
// Fonte: os relatorios individuais do Kaua Gouveia e do Fabricio Rivas, cada
// um com o seu estudo no Useberry (2 tarefas, 10 participantes). Os estudos
// sao diferentes: tarefas, area esperada e escala de confianca nao sao as
// mesmas, por isso cada um aparece separado.
//
// No estudo do Fabricio, a tarefa 1 nao define uma area esperada. A pagina
// mostra onde as pessoas clicaram, sem chamar isso de acerto. Os numeros da
// tarefa 2 dele foram estimados contando os pontos do mapa de calor.

export const firstClick = {
  intro:
    'Dois estudos no Useberry que mostram para onde as pessoas vão primeiro na tela inicial do UFFIND.',

  oQueE: [
    'O First Click mede se a pessoa encontra o caminho certo para uma tarefa olhando só para onde ela dá o primeiro clique. A ideia é que, quando o primeiro clique está certo, a chance de terminar a tarefa é bem maior.',
    'O participante lê uma situação, vê uma tela parada do protótipo e clica onde acha que resolveria. A ferramenta registra os cliques num mapa de calor e mede o tempo até o clique. Depois de cada tarefa, o participante diz o quanto se sentiu seguro da escolha.',
  ],

  comoFoi:
    'Fizemos dois estudos independentes no Useberry, cada um com 2 tarefas e 10 participantes, usando a tela inicial do protótipo no formato de celular. Todos os participantes terminaram os dois estudos.',

  rotulos: {
    estudo: 'Estudo',
    tarefa: 'Tarefa',
    acerto: 'de acerto no primeiro clique',
    cenario: 'Situação',
    esperada: 'Área esperada',
    cliques: 'Onde clicaram',
    tempo: 'Tempo médio até o clique',
    confianca: 'Confiança',
    leitura: 'O que isso mostra',
    sugestao: 'Sugestão de redesign',
    link: 'Abrir o estudo no Useberry',
  },

  estudos: [
    {
      id: 'kaua',
      link: 'https://app.useberry.com/t/LzMUyoJ0lTsTQK/',
      escala: 'Confiança de 0 a 10, depois de cada tarefa.',
      tarefas: [
        {
          titulo: 'Aula começando',
          cenario:
            'Sua aula de Banco de Dados I começa em 20 minutos e você não sabe em que sala ela vai ser. Onde você clicaria primeiro para descobrir?',
          esperada: 'Campo de busca',
          acerto: '50%',
          cliques: [
            '50% no campo de busca',
            '30% em "Salas por andar"',
            '10% em "Serviços do IC"',
            '10% fora de qualquer elemento',
          ],
          tempo: '11,5 s',
          confianca: 'Média 8,1. 80% deram nota 8 ou mais.',
          leitura:
            'Metade das pessoas não usou a busca, e o tempo foi o dobro da outra tarefa. Mesmo assim, quase todo mundo se disse confiante. Para o usuário, "onde é minha aula" e "onde fica a sala" parecem a mesma pergunta, e "Salas por andar" soa mais natural para quem pensa no lugar.',
          sugestao: [
            'Um atalho "Minha próxima aula" no topo da tela inicial, já com a sala.',
            'Subir "Minhas disciplinas" para antes da dobra da tela.',
            'Colocar a busca por disciplina também dentro de "Salas por andar".',
          ],
        },
        {
          titulo: 'Prédio desconhecido',
          cenario:
            'Você já sabe que a aula é na Sala 305, mas nunca entrou nesse prédio e não faz ideia de onde ela fica. Onde você clicaria primeiro?',
          esperada: 'Cartão "Salas por andar"',
          acerto: '90%',
          cliques: ['90% em "Salas por andar"', '10% em "Serviços do IC"'],
          tempo: '5,0 s',
          confianca: 'Média 8,4. 3 pessoas deram notas entre 4 e 7.',
          leitura:
            'Quase todo mundo acertou de primeira e rápido. Quem hesitou provavelmente estranhou o título "Salas por andar", que fala de salas e deixa a planta do prédio só no subtítulo.',
          sugestao: ['Trocar o título do cartão para "Mapa do prédio" e deixar "Salas por andar" como subtítulo.'],
        },
      ],
    },
    {
      id: 'fabricio',
      link: 'https://app.useberry.com/sharing-results/t42FUxidpDf7Yq/?segmentID=f1af03ab-ef41-4c90-b7b4-6fd738e423fe',
      escala: 'Depois de cada tarefa: muito seguro, em dúvida ou não consegui me localizar.',
      tarefas: [
        {
          titulo: 'Localizar uma sala',
          cenario:
            'Imagine que você precisa localizar uma sala que não aparece nos cards iniciais. Onde você clicaria para achar essa sala?',
          esperada: null,
          acerto: null,
          cliques: [
            '60% no campo de busca',
            '30% em "Salas por andar"',
            '10% no card da disciplina Banco de Dados I',
          ],
          tempo: '5,7 s',
          confianca: '70% muito seguros, 20% em dúvida e 10% não conseguiram se localizar.',
          leitura:
            'Os cliques se dividiram em três caminhos para a mesma tarefa, e nenhum se destaca. O clique no título do card mostra que a pessoa espera que o card inteiro abra a disciplina, mas só a seta funciona.',
          sugestao: [
            'Deixar a busca em destaque e "Salas por andar" como caminho secundário.',
            'Deixar o card de disciplina inteiro clicável, com resposta visual ao toque.',
          ],
        },
        {
          titulo: 'Acessar os serviços do IC',
          cenario:
            'Imagine que você perdeu um item. Onde você clicaria para localizar o serviço de achados e perdidos?',
          esperada: 'Cartão "Serviços do IC"',
          acerto: 'cerca de 80%',
          cliques: [
            'cerca de 80% em "Serviços do IC"',
            '10% no ícone de menu do cabeçalho',
            '10% na seta do card de Estruturas de Dados',
          ],
          tempo: '9,5 s, e 3 pessoas levaram mais de 16 s',
          confianca: '70% muito seguros e 30% em dúvida.',
          leitura:
            'O nome "Serviços do IC" funciona, mas a decisão demorou quase o dobro da tarefa 1. Quem foi ao menu procurou num ícone sem nome, e quem clicou num card de disciplina pode ter confundido os cards com os atalhos.',
          sugestao: [
            'Dar o nome "Menu" ao ícone do cabeçalho, ou listar nele "Serviços do IC" e "Salas por andar".',
            'Aumentar a área de toque e o contraste do subtítulo de "Serviços do IC" e separar melhor os atalhos da lista Minhas disciplinas.',
          ],
        },
      ],
    },
  ],

  conclusao: [
    'Os dois estudos chegam ao mesmo ponto: para encontrar uma sala, a tela inicial oferece mais de um caminho e nenhum se destaca. Nos dois, 30% das pessoas foram para "Salas por andar" quando a tarefa era achar a sala de uma aula. Quando a tarefa era se localizar no prédio, "Salas por andar" acertou 90%.',
    '"Serviços do IC" é um nome claro, mas a decisão demora. A lista Minhas disciplinas, abaixo da dobra, quase não aparece: no estudo 1, ninguém rolou a tela até ela. Isso conversa com a avaliação heurística, que também apontou a tela inicial como a que mais concentra problemas.',
    'Foram 10 participantes por estudo, então os números mostram tendências. O ideal é repetir o teste depois dos ajustes e comparar.',
  ],
}
