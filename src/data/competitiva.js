// Analise competitiva: alimenta a tabela em pages/imersao/AnaliseCompetitiva.jsx.
//
// origem: 'documento'  = veio da analise registrada pelo grupo
//         'desk'       = levantado por desk research sobre sistemas publicos
// O campo origem nao aparece na tela. Serve para o grupo saber o que precisa
// revisar antes da entrega.

export const justificativaEscolha = [
  'A seleção partiu do problema do usuário. Procuramos sistemas que já respondem à pergunta "onde fica e como eu chego" dentro de um campus ou de um prédio grande.',
  'Os dois primeiros concorrentes diretos são os sistemas que quem frequenta o IC já tem à mão hoje: o site do Instituto e o idUFF. Eles definem a régua real, porque é com eles que a solução vai ser comparada no dia a dia. Em seguida entram guias e mapas de outras universidades, que mostram como o mesmo problema foi resolvido em contextos institucionais parecidos, com restrições semelhantes de orçamento e de acesso a dados acadêmicos.',
  'Como concorrentes indiretos entraram sites de outras unidades da UFF, que organizam bem a informação mas não tratam de salas, e a combinação de mural físico com grupos de WhatsApp. Essa combinação informal é o que hoje realmente resolve o problema, segundo o questionário, e por isso é a referência a ser superada.',
  'Os inspiradores não competem com o projeto. Eles definem o padrão de experiência que as pessoas já conhecem quando precisam se localizar em ambiente fechado.',
]

export const competitiva = [
  {
    sistema: 'ic.uff.br',
    tipo: 'Concorrente direto',
    origem: 'documento',
    positivos: ['Presença institucional oficial', 'Acesso ao e-mail da secretaria'],
    negativos: [
      'Não centraliza informações de salas',
      'Estrutura de navegação confusa',
      'Sem informações para visitantes',
    ],
    ideiaDesign: 'Oportunidade de centralização e hierarquia clara',
  },
  {
    sistema: 'idUFF',
    tipo: 'Concorrente direto',
    origem: 'documento',
    positivos: [
      'Quadro de horários com salas vinculadas',
      'Autenticação integrada com vínculo acadêmico',
    ],
    negativos: [
      'Interface pouco intuitiva',
      'Acesso restrito a alunos vinculados',
      'Não acessível a visitantes',
    ],
    ideiaDesign: 'Os dados de sala já existem. Falta exposição clara',
  },
  {
    sistema: 'Guia USP',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Aplicativo oficial que reúne serviços da universidade em um só lugar',
      'Mapa do campus integrado ao restante dos serviços',
      'Disponível nas lojas de aplicativo, sem depender do portal acadêmico',
    ],
    negativos: [
      'Escala de campus, com pouca profundidade dentro de cada prédio',
      'Boa parte das funções exige login institucional',
      'Não resolve a identificação de sala por ala e andar',
    ],
    ideiaDesign: 'Reunir serviços e localização no mesmo produto, em vez de sistemas separados',
  },
  {
    sistema: 'Mapas da UnB',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Mapa oficial do campus aberto, sem exigir vínculo',
      'Busca por prédio e por unidade acadêmica',
    ],
    negativos: [
      'Orientação para entre prédios, não para dentro deles',
      'Não integra horário de aula com o espaço',
    ],
    ideiaDesign: 'Acesso aberto como padrão, com busca por nome do espaço',
  },
  {
    sistema: 'Mapa Interativo da U.Porto',
    tipo: 'Concorrente direto',
    origem: 'desk',
    positivos: [
      'Mapa interativo com filtro por tipo de espaço e por serviço',
      'Funciona no navegador, sem instalar nada',
      'Atende visitante externo sem autenticação',
    ],
    negativos: [
      'Depende de uma base de dados de espaços bem mantida',
      'Interface densa para quem só quer achar uma sala rápido',
    ],
    ideiaDesign: 'Filtrar por tipo de espaço, como laboratório ou secretaria',
  },
  {
    sistema: 'Site EAU/UFF',
    tipo: 'Concorrente indireto',
    origem: 'documento',
    positivos: [
      'Estrutura de navegação mais clara que a do IC',
      'Informações de contato visíveis',
    ],
    negativos: ['Também não centraliza salas', 'Design desatualizado'],
    ideiaDesign: 'Modelo de organização de seções por público-alvo',
  },
  {
    sistema: 'Site Eng. Mecânica/UFF',
    tipo: 'Concorrente indireto',
    origem: 'documento',
    positivos: ['Seção dedicada a calouros', 'Informações de secretaria na home'],
    negativos: ['Sem mapa ou localização de salas'],
    ideiaDesign: 'Seção de calouros como referência de onboarding',
  },
  {
    sistema: 'Mural físico e grupos de WhatsApp',
    tipo: 'Concorrente indireto',
    origem: 'desk',
    positivos: [
      'É o que as pessoas realmente usam: 86,7% recorrem a colegas com frequência e 64,3% usam grupos de mensagem',
      'Resposta rápida e já adaptada ao contexto de quem pergunta',
      'Não exige login, instalação nem aprendizado',
    ],
    negativos: [
      'Depende de outra pessoa estar disponível e saber a resposta',
      'A informação não fica registrada, então a mesma dúvida se repete a cada período',
      'Ninguém garante que a resposta está atualizada',
      'Deixa de fora quem não está no grupo, principalmente calouro e visitante',
    ],
    ideiaDesign: 'Entregar a velocidade da resposta do colega, com a confiabilidade da fonte oficial',
  },
  {
    sistema: 'Wayfinding indoor comercial',
    tipo: 'Concorrente indireto',
    origem: 'desk',
    positivos: [
      'Resolve orientação dentro de prédios grandes, que é o mesmo problema espacial',
      'Linguagem visual consolidada, com setas, blocos e cores por setor',
    ],
    negativos: [
      'Custo de implantação e manutenção fora da realidade de um instituto público',
      'Pensado para quem circula sem pressa, não para quem vai perder a chamada',
    ],
    ideiaDesign: 'Sinalização por bloco e andar, aplicada à identificação das salas',
  },
  {
    sistema: 'Google Maps no campus da UFF',
    tipo: 'Inspirador',
    origem: 'documento',
    positivos: [
      'Localização física precisa',
      'Familiar para qualquer usuário',
      'Funciona para visitantes externos',
    ],
    negativos: [
      'Não conhece a estrutura interna do IC',
      'Não tem informação de serviços administrativos',
    ],
    ideiaDesign: 'A experiência de encontrar como ponto de partida do design',
  },
  {
    sistema: 'Google Indoor Maps',
    tipo: 'Inspirador',
    origem: 'desk',
    positivos: [
      'Mostra andares dentro de um mesmo prédio, com troca de nível',
      'Mantém a mesma interface que a pessoa já usa na rua',
    ],
    negativos: [
      'Cobertura limitada a locais mapeados por parceiros',
      'Nenhum instituto da UFF está mapeado nesse nível',
    ],
    ideiaDesign: 'Seletor de andar como elemento central da navegação espacial',
  },
  {
    sistema: 'iBeacons em shoppings',
    tipo: 'Inspirador',
    origem: 'desk',
    positivos: [
      'Posicionamento dentro do prédio, onde o GPS não alcança',
      'Consegue dizer onde a pessoa está, e não só onde fica o destino',
    ],
    negativos: [
      'Exige hardware instalado e manutenção contínua',
      'Depende de aplicativo instalado e de bluetooth ligado',
    ],
    ideiaDesign: 'A pergunta útil é "onde eu estou agora", não apenas "onde fica a sala"',
  },
]

// Sintese: as ideias de design da tabela agrupadas em direcoes, com o lugar
// onde cada uma entrou na Ideacao (personas, cenarios e tarefas).
export const sintese = {
  titulo: 'O que vai para a próxima fase',
  rotuloSistemas: 'Vem de:',
  intro:
    'As ideias da última coluna da tabela se agrupam em cinco direções. Cada uma aparece nas personas, nos cenários ou nas tarefas da Ideação.',
  direcoes: [
    {
      titulo: 'Publicar o dado que já existe, sem login',
      texto:
        'O idUFF já tem a sala de cada turma, mas exige vínculo. Mapas da UnB e da U.Porto mostram que o acesso aberto, com busca por nome do espaço, funciona.',
      sistemas: ['idUFF', 'Mapas da UnB', 'Mapa Interativo da U.Porto'],
      ideacao: 'Beatriz consulta sem login na tarefa 1 da sua árvore.',
    },
    {
      titulo: 'Sala e serviço no mesmo lugar',
      texto:
        'O site do IC não centraliza nada, e o Guia USP junta serviços e localização num produto só. A busca do UFFIND cobre as duas coisas.',
      sistemas: ['ic.uff.br', 'Guia USP'],
      ideacao: 'Thiago procura achados e perdidos sem precisar perguntar a ninguém.',
    },
    {
      titulo: 'Endereço por bloco e andar',
      texto:
        'Wayfinding comercial e Google Indoor Maps organizam o espaço por andar. Os iBeacons lembram que a pergunta útil é onde a pessoa está agora.',
      sistemas: ['Wayfinding indoor comercial', 'Google Indoor Maps', 'iBeacons em shoppings', 'Google Maps no campus da UFF'],
      ideacao: 'Beatriz vê o andar e o corredor na tarefa 3 da sua árvore.',
    },
    {
      titulo: 'A rapidez do colega com a confiança da fonte oficial',
      texto:
        'Mural e grupos de WhatsApp são o que de fato resolve hoje. A solução entra nesse caminho com um link que dá para colar no grupo, em vez de competir com ele.',
      sistemas: ['Mural físico e grupos de WhatsApp'],
      ideacao: 'Thiago avisa a turma com o link da disciplina na tarefa 4 da sua árvore.',
    },
    {
      titulo: 'Uma entrada para quem está chegando',
      texto:
        'Os sites da EAU e da Engenharia Mecânica organizam as seções por público e têm uma área para calouros.',
      sistemas: ['Site EAU/UFF', 'Site Eng. Mecânica/UFF'],
      ideacao: 'Sílvia quer que quem entra no primeiro semestre saiba como funciona cada setor.',
    },
  ],
}
