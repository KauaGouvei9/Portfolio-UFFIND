// Entrevista semiestruturada: tecnica qualitativa da Imersao.
// Conteudo transcrito do documento "Consultoria 1 - G3: Analise da Situacao
// Atual". Ao atualizar aquele documento, atualize este arquivo junto.

export const entrevistas = {
  tecnica: {
    nome: 'Entrevista semiestruturada individual',
    paragrafos: [
      'A entrevista semiestruturada combina perguntas planejadas com liberdade para aprofundar tópicos que surjam durante a conversa. Segundo Barbosa e Silva (cap. 5), ela permite coletar informações ricas e individualizadas, e é adequada quando é preciso compreender experiências, dificuldades e expectativas dos usuários em relação a um sistema.',
      'No contexto deste projeto, a técnica foi escolhida porque o problema envolve experiências distintas entre quem estuda, quem trabalha e quem apenas visita o Instituto. Um roteiro flexível permite comparar situações recorrentes e, ao mesmo tempo, explorar particularidades relatadas por cada participante.',
    ],
    referencia: 'BARBOSA, S. D. J.; SILVA, B. S. Interação Humano-Computador. Cap. 5.',
  },

  objetivo: {
    geral:
      'Compreender como as pessoas que estudam, trabalham ou visitam o IC/UFF buscam informações sobre salas e serviços administrativos, identificando dificuldades, estratégias adotadas e lacunas nos canais digitais e físicos atualmente disponíveis.',
    especificos: [
      'Mapear os caminhos percorridos para localizar salas e secretarias, tanto por quem estuda quanto por quem trabalha no Instituto.',
      'Identificar pontos de confusão ou frustração nos sistemas existentes, como o site do IC, o idUFF e o mural físico.',
      'Levantar necessidades não atendidas que possam orientar o design da solução.',
    ],
  },

  perfil: {
    intro:
      'Foram sete entrevistas, divididas em dois grupos recrutados por motivos diferentes. Os estudantes foram convidados para aprofundar o que o questionário já tinha medido. Os servidores foram convidados por outra razão: eles ocupam os três pontos da cadeia da informação sobre salas, ou seja, quem produz o dado, quem o publica e quem o usa para dar aula. Entrevistar os três mostra onde a informação trava antes de chegar a quem procura, e isso nenhuma quantidade de conversas com estudantes revelaria.',
    justificativa:
      'A escolha também compensa um limite conhecido do questionário, que reuniu quase só estudantes de graduação e nenhum docente. As entrevistas foram atrás exatamente de quem a amostra anterior não alcançou.',
    lista: [
      {
        nome: 'Três estudantes do IC',
        icone: 'alunos',
        descricao:
          'Sistemas de Informação, todos na metade do curso. Representam o perfil que dominou as respostas do questionário, e foram ouvidos para explicar o porquê por trás daqueles percentuais.',
        porque: 'Vivem o problema todo início de período e já criaram estratégias próprias.',
      },
      {
        nome: 'Uma estudante de outro instituto',
        icone: 'alunos',
        descricao:
          'Cursa a graduação em outra unidade da UFF e frequenta o IC há pouco tempo. É a participante mais próxima do visitante que o projeto declara atender.',
        porque: 'Usa o prédio sem pertencer a ele, que é a situação de quem chega de fora.',
      },
      {
        nome: 'Um professor do Instituto',
        icone: 'professores',
        descricao:
          'Leciona disciplinas de Banco de Dados para mais de um curso. Precisa localizar salas a cada período e é procurado por alunos que se perderam.',
        porque: 'Está na ponta que usa o espaço e absorve o problema de quem não achou.',
      },
      {
        nome: 'Um servidor da área técnica',
        icone: 'funcionarios',
        descricao:
          'Alimenta o site do Instituto com informação. É a pessoa que publica aquilo que os demais procuram.',
        porque: 'Se a informação não chega ao site, o gargalo passa por ele.',
      },
      {
        nome: 'Uma servidora da secretaria',
        icone: 'funcionarios',
        descricao:
          'Atende no balcão e mantém a planilha de alocação das salas. É quem responde quando alguém se perde.',
        porque: 'Detém o dado original e vê de perto quem não conseguiu encontrar sozinho.',
      },
    ],
  },

  modalidade: {
    nome: 'Presencial',
    criterio:
      'A entrevista acontece no próprio IC. Isso permite observar o contexto físico onde o problema aparece, como o mural, os corredores e os espaços de circulação, e deixa a conversa mais natural.',
  },

  coleta: {
    intro:
      'Cada entrevista contou com dois integrantes do grupo: um entrevistador principal, que conduziu o roteiro e manteve o fluxo da conversa, e um observador, responsável pelas anotações e pelas percepções não verbais. Os dados foram coletados por:',
    itens: [
      'Gravação de áudio, mediante autorização prévia no TCLE.',
      'Anotações escritas em tempo real pelo observador.',
      'Ficha de perfil preenchida antes da entrevista, com vínculo, curso ou setor e tempo de contato com o IC.',
    ],
    nota: 'As gravações e os termos assinados ficam arquivados com o grupo, em uso restrito à disciplina. Esta página reproduz apenas trechos anonimizados.',
  },

  analise: {
    nome: 'Análise temática',
    intro:
      'As sete transcrições foram tratadas por análise temática, seguindo as seis fases propostas por Braun e Clarke. O material foi lido na íntegra, e não por amostragem. Um tema só foi mantido quando apareceu em mais de uma entrevista.',
    etapas: [
      {
        titulo: 'Familiarização',
        texto:
          'Os áudios foram transcritos e lidos por inteiro antes de qualquer codificação, para formar uma visão do conjunto.',
      },
      {
        titulo: 'Codificação aberta',
        texto:
          'Cada trecho relevante recebeu um rótulo livre, como "usa colega como referência" ou "planilha desatualizada".',
      },
      {
        titulo: 'Busca de temas',
        texto:
          'Os códigos próximos foram reunidos em temas candidatos, como as estratégias informais de navegação e as barreiras de acesso digital.',
      },
      {
        titulo: 'Revisão',
        texto:
          'Cada tema candidato foi conferido contra as sete transcrições. Os que apareciam em uma entrevista só foram descartados ou absorvidos por outro.',
      },
      {
        titulo: 'Definição e nomeação',
        texto:
          'Os temas mantidos receberam um nome que afirma o achado, em vez de apenas rotular o assunto.',
      },
      {
        titulo: 'Relato',
        texto:
          'Os temas foram escritos com trechos das falas como evidência, e convertidos nos requisitos de design listados nesta página.',
      },
    ],
    referencia: 'BRAUN, V.; CLARKE, V. Using thematic analysis in psychology, 2006.',
  },

  infoRoteiro: {
    duracao: '20 a 30 minutos',
    materiais: 'Roteiro impresso, ficha de perfil e gravador ou celular.',
  },

  roteiro: [
    {
      id: 'bloco-0',
      numero: 0,
      nome: 'Abertura e apresentação',
      duracao: '~3 min',
      topicos: [
        'Apresentar os membros presentes e a pesquisa brevemente.',
        'Explicar que não existem respostas certas ou erradas.',
        'Solicitar a assinatura do TCLE e a autorização para gravação de áudio.',
        'Iniciar a gravação após o consentimento.',
      ],
    },
    {
      id: 'bloco-1',
      numero: 1,
      nome: 'Perfil do participante',
      duracao: '~5 min',
      perguntas: [
        {
          codigo: 'P1',
          texto: 'Use a versão correspondente ao perfil do participante:',
          variantes: [
            { perfil: 'Aluno', texto: 'Qual é o seu curso e semestre atual? Há quanto tempo você frequenta o IC?' },
            { perfil: 'Professor', texto: 'Para quais cursos ou disciplinas você leciona atualmente? Há quanto tempo atua no IC?' },
            { perfil: 'Funcionário', texto: 'Qual é o seu cargo ou setor? Há quanto tempo você trabalha no IC?' },
          ],
        },
        { codigo: 'P2', texto: 'Com que frequência você precisa buscar informações sobre salas ou serviços administrativos no IC?' },
        { codigo: 'P3', texto: 'Quando precisa localizar uma sala ou saber sobre um serviço, qual é o seu primeiro passo?' },
      ],
    },
    {
      id: 'bloco-2',
      numero: 2,
      nome: 'Experiência com os sistemas atuais',
      duracao: '~10 min',
      perguntas: [
        { codigo: 'P4', texto: 'Você conhece o site do IC (ic.uff.br)? Com que frequência o acessa?' },
        { codigo: 'P5', texto: 'Já usou o idUFF para ver o quadro de horários ou localizar salas? Como foi essa experiência?' },
        { codigo: 'P6', texto: 'Você já consultou o mural físico de salas no primeiro andar do IC? Ele ajudou?' },
        { codigo: 'P7', texto: 'Existe algum canal ou recurso que você usa bastante para esse tipo de informação, como grupos de WhatsApp, colegas ou professores? Por quê?' },
        { codigo: 'P8', texto: 'Conte uma situação em que teve dificuldade para encontrar uma sala ou acessar um serviço administrativo. Como você resolveu?' },
      ],
    },
    {
      id: 'bloco-3',
      numero: 3,
      nome: 'Dificuldades e expectativas',
      duracao: '~8 min',
      perguntas: [
        { codigo: 'P9', texto: 'O que você considera mais confuso ou difícil nos sistemas e espaços atuais?' },
        { codigo: 'P10', texto: 'Se pudesse mudar uma coisa na forma como o IC disponibiliza informações sobre salas e serviços, o que seria?' },
        { codigo: 'P11', texto: 'Você prefere buscar essas informações online, presencialmente ou por outro meio? Por quê?' },
        { codigo: 'P12', texto: 'Existe alguma informação que você nunca consegue encontrar facilmente? Qual?' },
      ],
    },
    {
      id: 'bloco-4',
      numero: 4,
      nome: 'Encerramento',
      duracao: '~2 min',
      topicos: [
        'Perguntar se o participante deseja acrescentar algo que não foi abordado.',
        'Agradecer a participação e reforçar o sigilo das informações.',
        'Encerrar a gravação.',
      ],
    },
  ],

  tcle: {
    titulo: 'Termo de Consentimento Livre e Esclarecido',
    intro:
      'Documento lido e assinado por cada participante antes do início da gravação.',
    identificacao: [
      {
        rotulo: 'Título da pesquisa',
        valor:
          'Análise da situação atual: como alunos de graduação e colaboradores da instituição buscam informações sobre salas e serviços no IC/UFF.',
      },
      { rotulo: 'Instituição', valor: 'Universidade Federal Fluminense, Instituto de Computação' },
      { rotulo: 'Disciplina', valor: 'Interação Humano-Computador, Prof.ª Daniela Gorski Trevisan' },
      {
        rotulo: 'Pesquisadores',
        valor:
          'Kauã Gouveia de Carvalho, Fabricio de Freitas Rivas, Kaua Muller Campista, Kayo Vianna Cipriano, Giancarlo Pereira dos Santos',
      },
      { rotulo: 'Contato', valor: 'giancarlos@id.uff.br' },
    ],
    secoes: [
      {
        titulo: 'O que é esta pesquisa?',
        texto:
          'Você está sendo convidado(a) a participar de uma pesquisa acadêmica conduzida por estudantes de graduação do IC/UFF como parte da disciplina de Interação Humano-Computador. O objetivo é compreender como alunos de graduação e colaboradores da instituição buscam informações sobre salas e serviços administrativos no Instituto de Computação, a fim de identificar dificuldades e oportunidades de melhoria nos canais de informação existentes.',
      },
      {
        titulo: 'O que envolve a participação?',
        texto:
          'Sua participação consiste em uma entrevista individual, presencial, com duração estimada de 20 a 30 minutos. A atividade será realizada em local combinado no IC/UFF. Você responderá perguntas sobre sua experiência com os sistemas e espaços do Instituto. Não há respostas certas ou erradas: o que importa é a sua experiência real.',
      },
      {
        titulo: 'A participação é voluntária?',
        texto:
          'Sim. Você pode recusar o convite ou desistir a qualquer momento, sem prejuízo ou penalidade. Não há remuneração pelo envolvimento.',
      },
      {
        titulo: 'Os dados serão gravados?',
        texto:
          'Com a sua autorização, a entrevista poderá ser gravada em áudio para análise posterior. As gravações serão armazenadas de forma segura e usadas exclusivamente para fins acadêmicos desta disciplina. Caso prefira, a entrevista poderá ser conduzida apenas com anotações escritas.',
      },
      {
        titulo: 'Sigilo e confidencialidade',
        texto:
          'Sua identidade será mantida em sigilo. Os dados coletados serão anonimizados nos relatórios e trabalhos produzidos. Nenhuma informação pessoal identificável será divulgada publicamente.',
      },
      {
        titulo: 'Riscos e benefícios',
        texto:
          'Esta pesquisa apresenta risco mínimo. Não envolve procedimentos físicos nem perguntas sensíveis de cunho pessoal. O benefício indireto é contribuir para a melhoria dos sistemas de informação do IC/UFF, beneficiando quem estuda, trabalha ou visita o Instituto.',
      },
    ],
    declaracao:
      'Li e compreendi as informações acima. Tive a oportunidade de fazer perguntas e minhas dúvidas foram esclarecidas. Concordo em participar desta pesquisa de forma voluntária, sabendo que posso retirar meu consentimento a qualquer momento, sem prejuízo.',
    campos: [
      'Nome do participante',
      'Data',
      'Assinatura',
      'Autoriza gravação de áudio? ( ) Sim ( ) Não',
    ],
    arquivo: 'assets/docs/TCLE_G3.pdf',
    rotulo: 'Baixar TCLE (PDF)',
    // O PDF e gerado a partir deste mesmo objeto por scripts/gerar-tcle.mjs.
    // Depois de mudar o texto acima, rode: node scripts/gerar-tcle.mjs
    arquivoDisponivel: true,
    avisoSemArquivo:
      'A versão em PDF para impressão será disponibilizada aqui. O texto integral do termo está reproduzido acima.',
  },

  resultados: {
    titulo: 'Conclusões',
    intro:
      'Oito temas saíram da análise das sete entrevistas. Juntos, eles mudam o enunciado do problema: não falta informação sobre salas no Instituto, falta publicá-la e mantê-la sincronizada.',

    // Os quatro achados que mudam a direcao do projeto. Ficam no topo da
    // pagina de proposito: sao a resposta curta para quem nao vai ler tudo.
    chave: [
      {
        titulo: 'A base de dados já existe',
        texto:
          'A secretaria mantém uma planilha com sala, horário, professor e capacidade. Ela não é pública.',
      },
      {
        titulo: 'O problema é defasagem',
        texto:
          'Várias fontes coexistem e discordam entre si. Ninguém sabe qual está atualizada.',
      },
      {
        titulo: 'O custo é alto e concreto',
        texto:
          'Uma participante perdeu a primeira semana de aula inteira por não achar a sala.',
      },
      {
        titulo: 'O WhatsApp corrige o sistema oficial',
        texto:
          'Até quem opera os sistemas do Instituto recorre a grupos de mensagem para confirmar sala.',
      },
    ],

    temas: [
      {
        numero: 1,
        titulo: 'A informação já existe, em arquivos privados',
        texto:
          'A secretaria mantém uma planilha com horário, professor, sala e capacidade de cada espaço. Perguntada se o arquivo é público, a resposta foi direta: não é. O servidor da área técnica trabalha a partir de um PDF guardado no próprio computador, e o professor recebe da secretaria, por e-mail, um PDF com a relação de salas no início do semestre.',
        citacao:
          'Todas as informações de horário, professores, salas, quantidade de capacidade das salas.',
        implicacao:
          'O projeto não precisa construir a base. Precisa publicar uma base que já está pronta e atualizada.',
      },
      {
        numero: 2,
        titulo: 'O problema é defasagem, não ausência',
        texto:
          'Alocações de sala são feitas com pouca antecedência, em um sistema que nem todo mundo acompanha na mesma frequência. Um dos servidores já informou o número errado de uma sala por estar lendo uma planilha desatualizada, percebeu depois e corrigiu por fora. O professor descreveu o mesmo padrão nas trocas de início de período.',
        citacao:
          'É uma informação que pode ter algum atraso, eu consigo a informação, mas aí eu uso o WhatsApp para conseguir sincronizar com as pessoas.',
        implicacao:
          'Mostrar a data da última atualização e sinalizar mudanças vale mais do que reunir tudo em uma tela.',
      },
      {
        numero: 3,
        titulo: 'O WhatsApp é a camada que sincroniza o sistema oficial',
        texto:
          'Os sete recorrem a pessoas, e o detalhe que surpreende é quem. Um servidor com mais de duas décadas de Instituto consulta o grupo dos colegas porque a informação de lá chega antes da que ele tem em mãos. O professor mantém grupo de cada turma, e é lá que o aluno perdido pergunta.',
        citacao: 'Geralmente eles têm uma precisão maior, são mais atualizados.',
        implicacao:
          'O canal informal não é falha de usuário, é infraestrutura. A solução precisa alimentá-lo, com conteúdo pronto para colar em uma conversa.',
      },
      {
        numero: 4,
        titulo: 'Quem erra paga em semanas de aula',
        texto:
          'Uma estudante perdeu a primeira semana inteira de aulas porque o professor não informou a sala e a informação não estava em lugar nenhum. Só descobriu na semana seguinte. Outra turma tentou Classroom, colegas e portaria, e terminou esperando o professor chegar para saber onde seria a aula.',
        citacao: 'Acabei perdendo a primeira semana de aula inteira por causa disso.',
        implicacao:
          'A consulta acontece sob pressão de tempo e o erro tem custo acadêmico. Nenhuma busca pode terminar sem uma próxima ação.',
      },
      {
        numero: 5,
        titulo: 'A facilidade dos veteranos é memorização, não sistema',
        texto:
          'O professor afirma não ter problema algum e explica por quê: tudo que é administrativo fica no mesmo andar, e ele decorou em anos de rotina. Ele mesmo nomeia o próprio viés e observa que alguém de fora não teria esse ponto de partida.',
        citacao: 'Não sabe nem sequer que no quarto andar são as secretarias.',
        implicacao:
          'O sistema não ficou fácil. Algumas pessoas construíram atalhos particulares. O projeto precisa entregar a quem chega o que hoje só o tempo de casa oferece.',
      },
      {
        numero: 6,
        titulo: 'A informação é endereçada por código, não por significado',
        texto:
          'A participante de fora do Instituto resumiu a barreira de entrada: o endereço da aula é dado pelo código da disciplina, e quem está chegando ainda não tem esse vocabulário. O mural físico foi descrito como grande demais e sem distinção clara entre curso e matéria.',
        citacao:
          'Não tem "a sala da matéria tal", é "a sala da matéria com o código".',
        implicacao:
          'Busca por nome de disciplina, de turma ou de professor, com o código como informação secundária.',
      },
      {
        numero: 7,
        titulo: 'Serviço administrativo é mais invisível que sala',
        texto:
          'Achados e perdidos apareceu espontaneamente em três das quatro entrevistas com estudantes, sem estar no roteiro. Do outro lado do balcão, a servidora da secretaria pediu exatamente o complemento disso: material explicando como funciona cada setor, para quem está ingressando. Os dois lados descreveram a mesma lacuna sem saber um do outro.',
        citacao:
          'Onde era a secretaria ou onde é achado e perdido, essas coisas você acaba descobrindo perguntando. Não tem essa informação em nenhum lugar.',
        implicacao:
          'Uma página por serviço, com o que ele resolve, onde fica, horário e contato. Achados e perdidos entra como caso de teste.',
      },
      {
        numero: 8,
        titulo: 'Não é falta de recurso, é falta de descoberta',
        texto:
          'Três dos quatro estudantes nunca tinham ouvido falar do site do Instituto. O único participante que o acessa com frequência é justamente quem o alimenta. Sobre o idUFF, o caso mais eloquente veio de um servidor com mais de vinte anos de casa, que não sabia que o sistema trazia informação de sala.',
        citacao:
          'Eu tanto não precisei, como também não sabia que pelo idUFF tinha essa disponibilidade.',
        implicacao:
          'Lançar mais um endereço para as pessoas decorarem tende a repetir o problema. A solução precisa aparecer onde a busca já começa.',
      },
    ],

    requisitos: [
      { requisito: 'Publicar a alocação que já existe, em vez de criar uma base nova', origem: 'Tema 1' },
      { requisito: 'Data da última atualização visível e mudanças de sala sinalizadas', origem: 'Temas 2 e 4' },
      { requisito: 'Conteúdo e link prontos para compartilhar em grupo de mensagem', origem: 'Tema 3' },
      { requisito: 'Busca por disciplina, turma ou professor, não só por código', origem: 'Tema 6' },
      { requisito: 'Uma página por serviço administrativo, começando pelos mais procurados', origem: 'Tema 7' },
      { requisito: 'Guia de primeiro acesso com o que fica em cada andar', origem: 'Temas 5 e 7' },
      { requisito: 'Orientação para chegar ao prédio, e não apenas para circular dentro dele', origem: 'Tema 5' },
      { requisito: 'Presença nos canais que as pessoas já usam, em vez de mais um endereço', origem: 'Tema 8' },
    ],

    tensao: {
      titulo: 'Uma divergência que vale manter à vista',
      texto:
        'O professor diz que não existe problema. A servidora da secretaria diz que o mais difícil é a divulgação da informação. Mesma instituição, leituras opostas. Não é contradição a resolver escolhendo um lado: a dificuldade é invisível para quem já a superou por conta própria e muito visível para quem atende quem não superou. Isso ajuda a explicar por que o problema persiste sem grande pressão por solução.',
    },

    limitacoes: [
      'Nenhum calouro de curso do IC foi entrevistado, embora o How Might We aponte esse perfil como o mais afetado. Três dos quatro estudantes estão na metade do curso.',
      'Nenhum visitante sem vínculo com a UFF participou. A estudante de outro instituto é a aproximação mais próxima disponível.',
      'Em duas conversas o entrevistador saiu do roteiro e sugeriu respostas ao formular a pergunta. O material ficou mais rico, mas o viés precisa ser considerado na leitura.',
    ],
  },
}
