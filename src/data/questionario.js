// Resultados do questionario aplicado no Google Forms.
// Fonte: "UFFIND, Analise Revisada", recalculada a partir do CSV exportado.
//
// A pagina fala em percentual. A contagem (campo base) so aparece nas secoes
// em que a base muda de linha para linha: os canais de hoje e a avaliacao dos
// servicos. Nessas duas, o percentual sozinho enganaria, porque quem marcou
// "nao sei avaliar" foi retirado do calculo em vez de contar como negativo.
// Nas demais secoes a base e a mesma para todas as linhas, entao a contagem
// so repetiria o percentual.

export const questionario = {
  amostra: {
    paragrafos: [
      'O questionário é aberto a toda a comunidade do Instituto: estudantes, professores, servidores e quem circula pelo prédio sem ter vínculo com a UFF.',
      'A análise desta página cobre as respostas recebidas entre 10 e 23 de setembro de 2026. A grande maioria veio de estudantes de graduação, com forte concentração em Sistemas de Informação. Houve uma resposta de funcionário e nenhuma de docente, então os resultados descrevem principalmente a experiência dos estudantes que participaram.',
      'Parte das respostas foi enviada em um formato anterior do questionário. Elas foram mantidas nas perguntas compatíveis e ficaram de fora das comparações que exigiam as escalas novas, o que faz a base variar entre uma pergunta e outra.',
      'Não há informação sobre como os participantes foram recrutados. A amostra é de conveniência, então os percentuais orientam requisitos de projeto e não descrevem a distribuição real do Instituto.',
    ],
  },

  destaques: [
    { valor: '80,0%', rotulo: 'não sabiam onde procurar a informação' },
    { valor: '86,7%', rotulo: 'recorrem a colegas com frequência ou sempre' },
    { valor: '53,3%', rotulo: 'encontram dificuldades com frequência ou mais' },
    { valor: '93,3%', rotulo: 'deram nota 5 de 5 para a utilidade da solução' },
  ],

  conclusao:
    'Os dados descrevem um problema de descoberta e de centralização da informação. As pessoas recorrem primeiro a colegas e a grupos de mensagem, embora prefiram uma solução digital oficial. O que consideram mais importante é calendário e avisos, localização das salas e horários das aulas.',

  secoes: [
    {
      id: 'frequencia',
      titulo: 'Com que frequência o problema aparece',
      intro:
        'Pouco mais da metade da amostra procura informação sobre salas com frequência ou muita frequência, e uma proporção parecida relata dificuldades nessa mesma faixa.',
      unidade: '%',
      dados: [
        { rotulo: 'Busca informações sobre salas (frequentemente ou mais)', valor: 56.7 },
        { rotulo: 'Encontra dificuldades (frequentemente ou mais)', valor: 53.3 },
      ],
      nota: 'Na nota de facilidade para localizar salas, de 1 a 5, quase metade (46,7%) deu 1 ou 2, 36,7% deram 3, 16,7% deram 4 e ninguém marcou 5.',
    },
    {
      id: 'canais-hoje',
      titulo: 'Como as pessoas procuram informação hoje',
      intro:
        'A busca é social antes de ser digital. Os colegas vêm na frente de tudo: 86,7% recorrem a eles com frequência ou sempre. Entre os canais digitais, as mensagens aparecem bem à frente do site do Instituto.',
      unidade: '%',
      destaqueAcima: 60,
      dados: [
        { rotulo: 'Grupos e canais de mensagem', valor: 64.3 },
        { rotulo: 'idUFF', valor: 35.7 },
        { rotulo: 'Site do IC/UFF', valor: 10.7 },
      ],
      nota: 'Quando a informação não é encontrada, 46,7% perguntam primeiro a um colega e 33,3% recorrem a um grupo de WhatsApp. Somadas, essas duas saídas cobrem 80,0% da amostra.',
    },
    {
      id: 'dificuldades',
      titulo: 'Principais dificuldades',
      intro:
        'A dificuldade dominante não é entender a informação, é descobrir onde ela está. A pergunta permitia várias escolhas, então os percentuais não somam 100%.',
      unidade: '%',
      destaqueAcima: 55,
      dados: [
        { rotulo: 'Não sabia onde procurar', valor: 80.0 },
        { rotulo: 'Precisei perguntar a outra pessoa', valor: 56.7 },
        { rotulo: 'A informação estava espalhada em lugares diferentes', valor: 56.7 },
        { rotulo: 'O site ou sistema era difícil de navegar', valor: 53.3 },
        { rotulo: 'Tive dificuldade para localizar uma sala fisicamente', valor: 53.3 },
        { rotulo: 'Não encontrei a informação que precisava', valor: 53.3 },
        { rotulo: 'A informação estava desatualizada', valor: 50.0 },
        { rotulo: 'Não sabia onde o serviço era realizado', valor: 43.3 },
        { rotulo: 'A informação estava pouco clara', valor: 40.0 },
      ],
      nota: 'Houve ainda dois relatos específicos, com uma ocorrência cada: uma página técnica que não carregava e a dificuldade de localizar salas de disciplinas de outros departamentos. Eles foram mantidos separados das categorias acima e servem para escolher situações de teste.',
    },
    {
      id: 'servicos',
      titulo: 'O acesso aos serviços administrativos',
      intro:
        'Suporte de TI e apoio a laboratórios tiveram as maiores proporções de "difícil" ou "muito difícil". Cada percentual considera apenas quem usa o serviço: quem marcou "não utilizei ou não sei avaliar" ficou de fora, em vez de entrar como avaliação negativa.',
      unidade: '%',
      destaqueAcima: 50,
      dados: [
        { rotulo: 'Suporte de TI', valor: 55.6 },
        { rotulo: 'Apoio a laboratórios', valor: 50.0 },
        { rotulo: 'Secretaria e direção', valor: 36.0 },
        { rotulo: 'Coordenação de curso', valor: 24.0 },
        { rotulo: 'Portaria e recepção', valor: 20.0 },
      ],
      nota: 'TI e laboratórios são os dois serviços menos conhecidos da lista, e um terço dos participantes não soube avaliá-los. Os percentuais acima, portanto, descrevem quem convive com esses serviços, não o Instituto inteiro. Entre quem busca informação administrativa ao menos às vezes, 88,2% dão prioridade alta ou máxima aos horários das secretarias, contra 54,5% de quem busca raramente ou nunca. São grupos pequenos, então a diferença indica um caminho a investigar, não uma conclusão.',
    },
    {
      id: 'preferencias',
      titulo: 'O que as pessoas preferem',
      intro:
        'A preferência aponta para o digital oficial, o oposto do que acontece na prática. Site e aplicativo empataram, o que deixa a escolha do meio em aberto para a prototipação.',
      unidade: '%',
      destaqueAcima: 70,
      dados: [
        { rotulo: 'Por um site', valor: 78.6 },
        { rotulo: 'Por um aplicativo', valor: 78.6 },
        { rotulo: 'Pelo idUFF', valor: 67.9 },
        { rotulo: 'Por grupos ou canais de mensagem', valor: 53.6 },
        { rotulo: 'Por QR Codes espalhados pelo IC', valor: 42.9 },
        { rotulo: 'Por totens ou painéis físicos', valor: 28.6 },
        { rotulo: 'Prefiro perguntar presencialmente', valor: 14.3 },
      ],
      nota: 'O contraste mais forte está no site: 71,4% preferem acessar a informação por um site, mas não usam o site atual com frequência. A maior parte avaliou site e aplicativo positivamente, e quem escolheu só um se dividiu igualmente entre os dois. Não há, portanto, uma escolha clara entre os dois meios.',
    },
    {
      id: 'prioridades',
      titulo: 'Prioridades para a solução',
      intro:
        'Calendário e avisos lideram a soma de prioridade alta e máxima, o que empurra o projeto para além de um mapa.',
      unidade: '%',
      destaqueAcima: 80,
      dados: [
        { rotulo: 'Calendário e avisos importantes', valor: 96.4 },
        { rotulo: 'Localização das salas de aula', valor: 89.3 },
        { rotulo: 'Horários das aulas', valor: 85.7 },
        { rotulo: 'Localização de laboratórios', valor: 78.6 },
        { rotulo: 'Horários de funcionamento das secretarias', valor: 75.0 },
        { rotulo: 'Como chegar a determinado local dentro do IC', valor: 71.4 },
        { rotulo: 'Localização de secretarias', valor: 57.1 },
        { rotulo: 'Informações sobre professores', valor: 50.0 },
        { rotulo: 'Contatos de setores administrativos', valor: 42.9 },
        { rotulo: 'Serviços oferecidos por cada setor', valor: 39.3 },
      ],
      nota: 'A ordem depende do critério. Somando alta e máxima, calendário vem na frente; olhando só a categoria máxima, localização das salas passa à frente, com 64,3% contra 60,7%. Os dois resultados são compatíveis. A orientação de caminho foi priorizada por 71,4%, e sobe para 80,0% entre quem já teve dificuldade para localizar uma sala fisicamente, contra 61,5% entre os demais.',
    },
  ],

  correlacoes: {
    intro:
      'Cruzar as respostas mostra o que anda junto. Três cruzamentos foram examinados, e o resultado mais útil para o projeto é justamente o que não confirmou a expectativa do grupo.',
    mudancaDePlano:
      'Sobre o método: os cruzamentos foram refeitos depois do fechamento da coleta, a partir da planilha exportada. O teste usado leva em conta que as escalas são de ordem, não de medida, e o resultado foi corrigido para o fato de haver mais de uma comparação. Os coeficientes, os valores de p e as bases estão no relatório de análise arquivado com o grupo.',
    achados: [
      {
        titulo: 'Conhecer o IC há mais tempo não resolve o problema',
        texto:
          'É o resultado que contraria a expectativa inicial. Entre quem está no IC há até um ano, 54,5% relatam dificuldade frequente. Entre quem está há mais de um ano, 52,6%. Praticamente a mesma coisa. O projeto não pode ser tratado como uma ajuda só para calouros.',
        sinal: 'neutro',
      },
      {
        titulo: 'Quanto mais se precisa procurar sala, mais dificuldade se relata',
        texto:
          'Entre quem procura informações sobre salas com frequência, 76,5% também relatam dificuldade frequente. Entre os demais, 23,1%. A diferença é de 53,4 pontos percentuais. Quem usa mais é quem mais esbarra no problema, e é esse grupo que precisa entrar nos testes de usabilidade.',
        sinal: 'positivo',
      },
      {
        titulo: 'Quem acha difícil localizar salas relata mais dificuldades',
        texto:
          'Notas menores de facilidade acompanham relatos mais frequentes de dificuldade. As duas perguntas medem aspectos próximos da mesma experiência, então esse cruzamento serve mais para verificar se as respostas são coerentes entre si do que como descoberta.',
        sinal: 'negativo',
      },
    ],
    naoConfirmado:
      'As associações descrevem relação entre respostas, não causalidade. Também não é possível separar duas leituras do primeiro achado: quem busca mais pode simplesmente encontrar mais situações problemáticas, ou a dificuldade pode estar gerando novas buscas.',
  },

  abertas: {
    intro:
      'Parte dos participantes deixou comentários, uns com sugestões de melhoria, outros indicando informações que gostariam de encontrar. São poucos, e por isso a leitura foi temática, sem atribuir frequências às ideias.',
    citacoes: [
      {
        texto: 'Saber quando a sala for trocada no meio do período',
        leitura:
          'Aproxima duas prioridades que já lideravam o ranking, localização e avisos. Não basta saber onde a sala fica se a aula foi transferida.',
      },
      {
        texto:
          'Ao apresentar a turma que você ficou poderiam também mostrar as salas e em quais blocos ficam.',
        leitura:
          'Aponta o momento em que a informação faz falta. Saber a sala e o bloco ainda na inscrição em disciplinas ajuda no planejamento, antes de chegar ao Instituto.',
      },
    ],
    temas: [
      'Personalizar o acesso conforme a grade do estudante',
      'Permitir a consulta antes de ir ao Instituto',
      'Centralizar eventos, palestras e atividades',
      'Oferecer tutoriais de como chegar aos locais',
      'Melhorar a estabilidade e a interface dos sites existentes',
    ],
    nota: 'Os trechos citados foram reproduzidos das respostas e não identificam seus autores. O pedido por estabilidade conversa com o relato de uma página que não carregava, registrado na pergunta sobre dificuldades.',
  },

  requisitos: [
    {
      nome: 'Busca centralizada',
      implicacao: 'Um ponto único de entrada para salas, turmas, horários, avisos e serviços.',
    },
    {
      nome: 'Resposta que basta',
      implicacao:
        'O resultado precisa entregar o bloco, o horário e o setor responsável, para a pessoa concluir a tarefa sem abrir outro sistema.',
    },
    {
      nome: 'Procedência do conteúdo',
      implicacao:
        'Metade dos participantes relatou informação desatualizada. Mostrar quando o dado foi revisto e oferecer um canal para apontar erro.',
    },
    {
      nome: 'Orientação espacial',
      implicacao: 'Identificação da sala por bloco e andar, com orientação de caminho dentro do IC.',
    },
    {
      nome: 'Link compartilhável',
      implicacao:
        'Colegas e grupos de mensagem participam bastante das buscas atuais. Poder enviar o link de uma informação aproveita esse caminho em vez de disputar com ele.',
    },
    {
      nome: 'Páginas de serviço completas',
      implicacao:
        'Procedimento, documentos necessários, horário, localização e contato na mesma página. TI e laboratórios são os primeiros candidatos.',
    },
  ],

  limitacoes:
    'A amostra é de conveniência, pequena e concentrada em estudantes de Sistemas de Informação, sem nenhuma resposta de docentes. Não há registro de como os participantes foram recrutados. As escalas são ordinais, os subgrupos comparados são pequenos e as associações não estabelecem causalidade. A avaliação de utilidade quase não variou, e vale lembrar que ela pede a opinião sobre uma proposta do próprio grupo a pessoas majoritariamente próximas dele, o que puxa a resposta para cima. Os resultados servem para orientar requisitos e para desenhar as avaliações de usabilidade, não para descrever a comunidade do Instituto.',

  fonte:
    'Dados recalculados a partir da planilha exportada do Google Forms, sem os filtros do painel. Coleta de 10 a 23 de setembro de 2026, análise de 27 de setembro de 2026.',
}
