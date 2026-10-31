// Crazy 4: quarta entrega da Ideacao.
//
// Tres folhas feitas em sala, transcritas como os autores escreveram. A
// convergencia agrupa as ideias por intencao e diz o que segue para o
// prototipo e por que, apontando o dado da Imersao que sustenta a escolha.
//
// Fotos em src/assets/ para o Vite gerar nome com hash quando forem trocadas.

import fotoKauaMuller from '../assets/crazy4/kaua-muller.webp'
import fotoGiancarlo from '../assets/crazy4/giancarlo.webp'
import fotoFabricio from '../assets/crazy4/fabricio.webp'

export const metodo = {
  intro:
    'Três folhas de ideias feitas em sala e o que cada uma trouxe para o protótipo.',
  paragrafos: [
    'O Crazy 4 é uma variação do Crazy 8. A folha é dobrada em quatro partes, e cada parte pede uma solução com uma regra diferente: uma solução cara, uma barata e rápida, uma inspirada em jogos e uma inspirada em série, livro ou robôs. As regras ajudam a sair das ideias óbvias.',
    'Cada integrante fez a sua folha sozinho, a partir da pergunta do How Might We. Depois juntamos as ideias que tentavam resolver a mesma coisa, mesmo quando a tecnologia era bem diferente. O teletransporte e a lente que guia, por exemplo, viraram a tela de "Como chegar".',
  ],
}

export const rotulos = {
  folhas: 'As folhas',
  convergencia: 'Convergência',
  noPrototipo: 'No protótipo',
  porque: 'Por quê',
  ampliar: 'Abrir a foto em tamanho real',
}

export const folhas = [
  {
    id: 'kaua-muller',
    autor: 'Kauã Muller Campista',
    foto: fotoKauaMuller,
    largura: 1400,
    altura: 788,
    alt: 'Folha de caderno dividida em quatro quadrantes, com desenhos de funcionários por andar, um mural por andar, uma pessoa com celular e um robô com tela.',
    quadrantes: [
      {
        tipo: 'Solução cara',
        texto:
          'Vários funcionários em cada andar para responder quais são as salas e os serviços, divididos em escalas por faixa de horário. Só eles teriam as informações das turmas. O mesmo vale para os serviços administrativos.',
      },
      {
        tipo: 'Barata e rápida',
        texto: 'Um mural gigante com todas essas informações em cada andar.',
      },
      {
        tipo: 'Inspirada em jogos',
        texto:
          'Viagem rápida para a sala selecionada. Quem achar e divulgar a sala na plataforma ganha pontos para trocar por recompensas na UFF.',
      },
      {
        tipo: 'Robôs e IoT',
        texto: 'Robôs que andam pelo Instituto com uma tela interativa para informar o aluno.',
      },
    ],
  },
  {
    id: 'giancarlo',
    autor: 'Giancarlo Pereira dos Santos',
    foto: fotoGiancarlo,
    largura: 1200,
    altura: 1600,
    alt: 'Folha de caderno dividida em quatro quadrantes, com a pergunta do grupo no topo e as quatro ideias escritas à mão.',
    quadrantes: [
      {
        tipo: 'Solução cara',
        texto:
          'Espalhar totens informacionais das salas, laboratórios e afins por todo o IC, para as pessoas estarem sempre informadas.',
      },
      {
        tipo: 'Barata e rápida',
        texto: 'Panfleto minimalista e fácil de entender no mural de cada andar.',
      },
      {
        tipo: 'Inspirada em jogos',
        texto: 'Teletransporte direto para a sala que você quiser.',
      },
      {
        tipo: 'Inspirada em série ou livro',
        texto: 'Lente que guia a pessoa até a sala que ela quiser.',
      },
    ],
  },
  {
    id: 'fabricio',
    autor: 'Fabricio de Freitas Rivas',
    foto: fotoFabricio,
    largura: 1400,
    altura: 1050,
    alt: 'Folha de caderno dividida em quatro quadrantes, com desenhos de guias acompanhando alunos, uma recepção na entrada, um portal e um aluno com implante.',
    quadrantes: [
      {
        tipo: 'Solução cara',
        texto: 'Cada aluno tem um localizador pessoal: uma pessoa contratada só para guiá-lo.',
      },
      {
        tipo: 'Barata e rápida',
        texto:
          'Uma recepção na entrada do IC, com um funcionário que sabe de todas as instruções e mudanças e guia os alunos.',
      },
      {
        tipo: 'Inspirada em jogos',
        texto:
          'Um elevador baseado no jogo Portal: o aluno diz no totem da entrada para onde quer ir, e um portal abre na frente do local.',
      },
      {
        tipo: 'Robôs e IoT',
        texto:
          'Cada aluno tem um implante que se comunica com o IC em tempo real e responde qualquer dúvida ou mudança de forma personalizada.',
      },
    ],
  },
]

// fontes: dado da Imersao que sustenta a escolha (nao aparece na tela)
export const convergencia = {
  intro:
    'As doze ideias das folhas formam cinco grupos. De cada grupo, levamos para o protótipo uma versão que dá para construir e que conversa com o que a pesquisa encontrou.',
  direcoes: [
    {
      titulo: 'A informação em cada andar',
      ideias: [
        { texto: 'Mural gigante em cada andar', autor: 'Kauã Muller' },
        { texto: 'Panfleto minimalista no mural de cada andar', autor: 'Giancarlo' },
        { texto: 'Totens informacionais por todo o IC', autor: 'Giancarlo' },
      ],
      noPrototipo: 'Um QR Code na entrada e em cada andar, que abre o UFFIND já naquele andar.',
      porque:
        'Papel fica desatualizado, como o PDF que circula hoje. O QR Code abre a informação atual. No questionário, 42,9% escolheram essa opção, e a servidora da secretaria sugeriu a mesma coisa.',
      fontes: ['Q', 'P3'],
    },
    {
      titulo: 'Alguém que sabe das mudanças',
      ideias: [
        { texto: 'Funcionários por andar, em escala', autor: 'Kauã Muller' },
        { texto: 'Recepção que sabe de todas as mudanças', autor: 'Fabricio' },
        { texto: 'Localizador pessoal para cada aluno', autor: 'Fabricio' },
      ],
      noPrototipo: 'A página da disciplina com o aviso de sala alterada e a data da última atualização.',
      porque:
        'Hoje quem sabe das mudanças é o vigia da porta ou a secretaria, e só conta para quem pergunta. Com o aviso na página, todo mundo fica sabendo sem precisar de mais funcionários.',
      fontes: ['E1', 'P2', 'P3'],
    },
    {
      titulo: 'Ser guiado até a porta',
      ideias: [
        { texto: 'Viagem rápida para a sala selecionada', autor: 'Kauã Muller' },
        { texto: 'Teletransporte direto para a sala', autor: 'Giancarlo' },
        { texto: 'Portal que abre na frente do local', autor: 'Fabricio' },
        { texto: 'Lente que guia até a sala', autor: 'Giancarlo' },
        { texto: 'Robôs com tela interativa', autor: 'Kauã Muller' },
      ],
      noPrototipo: '"Como chegar" passo a passo: o prédio, o andar e o lado do corredor.',
      porque:
        'Todas essas ideias tentam evitar que a pessoa se perca no caminho. É a tarefa 3 da Beatriz, e 71,4% de quem respondeu o questionário deu prioridade alta ou máxima a saber como chegar a um local dentro do IC.',
      fontes: ['Q', 'E1'],
    },
    {
      titulo: 'Quem descobre, avisa',
      ideias: [{ texto: 'Pontos para quem divulgar a sala', autor: 'Kauã Muller' }],
      noPrototipo: 'Um botão "Copiar link" em cada disciplina, para mandar no grupo da turma.',
      porque:
        'Os grupos de WhatsApp já espalham a informação. Com o link, a sala certa chega pelo mesmo caminho, que é a tarefa 3 do Thiago.',
      fontes: ['Q', 'E2', 'E3'],
    },
    {
      titulo: 'Resposta do jeito de cada um',
      ideias: [{ texto: 'Implante que responde de forma personalizada', autor: 'Fabricio' }],
      noPrototipo: '"Minhas disciplinas": a pessoa salva as suas turmas e vê as salas da própria grade.',
      porque:
        'Nas respostas abertas do questionário, apareceu o pedido de ver as informações conforme a própria grade.',
      fontes: ['Q'],
    },
  ],
}
