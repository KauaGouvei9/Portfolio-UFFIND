// Personas: primeira entrega da Ideacao.
//
// Cada traco guarda o dado de onde saiu (campo fontes, siglas logo abaixo).
// O campo nao aparece na tela: serve para o grupo conferir antes da entrega,
// como o campo origem de data/competitiva.js. Nome e identidade sao ficticios. Curso, cargo e
// tempo de casa foram generalizados para que nenhum participante seja
// reconhecivel, como prometido no TCLE.
//
// As citacoes sao falas reais, reproduzidas das transcricoes sem identificar
// quem falou. As transcricoes nao ficam no repositorio.
//
// As fotos nao retratam nenhum participante. Ficam em src/assets/ para o
// Vite gerar nome com hash quando forem trocadas.

import fotoThiago from '../assets/personas/thiago.webp'
import fotoBeatriz from '../assets/personas/beatriz.webp'
import fotoSilvia from '../assets/personas/silvia.webp'

export const fontes = {
  E1: 'Entrevista com a estudante de outro instituto',
  E2: 'Entrevista com estudante do IC',
  E3: 'Entrevista com estudante do IC',
  E4: 'Entrevista com estudante do IC',
  P1: 'Entrevista com o professor',
  P2: 'Entrevista com o servidor da área técnica',
  P3: 'Entrevista com a servidora da secretaria',
  Q: 'Questionário',
  ME: 'Mapa de Empatia',
  CA: 'Análise Competitiva',
}

export const metodo = {
  intro:
    'Três personas, uma para cada grupo do público do projeto, montadas a partir das entrevistas, do questionário e do Mapa de Empatia.',
  paragrafos: [
    'Uma persona é um personagem fictício montado a partir de dados de usuários reais. Ela não descreve uma pessoa entrevistada: reúne o que se repetiu entre várias, para que a equipe projete pensando no mesmo usuário em vez de cada um imaginar o seu.',
    'As três personas desta página saíram das sete entrevistas da Imersão, cruzadas com o questionário e o Mapa de Empatia. Nome e aparência são inventados. Comportamento, objetivos e frustrações vêm da pesquisa, e as frases entre aspas são falas reais dos participantes.',
  ],
}

// titulos fixos da ficha e da pagina, para trocar texto sem mexer no JSX
export const rotulos = {
  grupo: 'Grupo do público',
  perfil: 'Perfil',
  sobre: 'Sobre',
  objetivos: 'Objetivos',
  frustracoes: 'Frustrações',
  comportamento: 'Comportamento e tecnologia',
  tarefas: 'Tarefas',
  expectativas: 'Expectativas',
  garantir: 'O que a solução precisa garantir',
  verFicha: 'Ver a ficha de',
  trava: 'Onde trava.',
}

export const personas = [
  {
    id: 'thiago',
    nome: 'Thiago Rocha',
    papel: 'Estudante do IC',
    grupo: 'Estudantes do IC',
    resumo: 'Procura sala todo início de período e depende dos grupos de WhatsApp para achar.',
    foto: {
      arquivo: fotoThiago,
      alt: 'Rapaz de camiseta cinza e mochila no ombro, olhando o celular com a testa franzida em um corredor com portas de sala de aula.',
    },
    perfil: 'Sistemas de Informação, quinto período, dois anos e meio de Instituto.',
    citacao: {
      texto: 'Não teve nenhuma que eu nunca encontrei, mas todas eu tive trabalho para encontrar.',
      fontes: ['E3'],
    },
    sobre: [
      'Thiago conhece o prédio, mas não decorou as salas. No início de cada período olha o mural uma vez, descobre o andar e depois adivinha a sala. Quando precisa de uma informação, procura primeiro nos grupos de WhatsApp da turma e no Classroom, quando o professor posta.',
      'Já chegou a uma sala e encontrou o nome de outro professor na porta. Perguntou no Classroom, na portaria, e terminou esperando o professor chegar. Em outro período, o professor não informou a sala e ele perdeu a primeira semana de aula inteira.',
    ],
    fontesSobre: ['E2', 'E3', 'E4'],
    comportamento: [
      { rotulo: 'Primeiro canal', texto: 'Colegas e grupos de WhatsApp. 86,7% da amostra recorrem a colegas com frequência ou sempre.', fontes: ['E2', 'E3', 'E4', 'Q'] },
      { rotulo: 'idUFF', texto: 'Tentou e não achou a sala, ou o sistema travou no começo do período.', fontes: ['E2', 'E3', 'E4'] },
      { rotulo: 'Site do IC', texto: 'Não conhece. Três dos quatro estudantes entrevistados nunca tinham ouvido falar dele.', fontes: ['E1', 'E2', 'E3', 'E4'] },
      { rotulo: 'Mural físico', texto: 'Consulta uma vez por período, para saber o andar.', fontes: ['E2', 'E3', 'E4'] },
      { rotulo: 'Preferência', texto: 'Online, "pela praticidade". 78,6% preferem receber a informação por um site.', fontes: ['E2', 'E4', 'Q'] },
    ],
    objetivos: [
      { texto: 'Estar na sala certa já na primeira semana, sem esperar alguém responder no grupo.', fontes: ['E3', 'ME'] },
      { texto: 'Saber quando a sala muda no meio do período.', fontes: ['Q'] },
      { texto: 'Achar serviços como achados e perdidos sem precisar perguntar.', fontes: ['E2', 'E4'] },
    ],
    frustracoes: [
      { texto: 'A informação está espalhada e é preciso procurar em vários lugares. 56,7% da amostra relataram o mesmo.', fontes: ['E3', 'Q'] },
      { texto: 'O idUFF trava no começo do período, que é justamente quando ele mais precisa.', fontes: ['E4'] },
      { texto: 'Chegar à sala e descobrir que ela não é mais aquela.', fontes: ['E2', 'P1'] },
      { texto: 'Serviço administrativo só se descobre perguntando.', fontes: ['E2', 'E4'] },
    ],
    tarefas: [
      'Descobrir a sala de cada disciplina no início do período',
      'Confirmar se a sala mudou antes de sair de casa',
      'Encontrar um serviço administrativo',
    ],
    // slide 8 da disciplina: como a persona acredita que o produto funciona
    expectativas: [
      { texto: 'Ver a disciplina, a sala e o professor no mesmo lugar, logo depois da inscrição, como acha que o idUFF deveria mostrar.', fontes: ['E2', 'E3', 'Q'] },
      { texto: 'Um site ou aplicativo no lugar do mural, com letra maior e a informação mais clara.', fontes: ['E4'] },
    ],
    requisitos: [
      'Resposta que basta: sala, bloco e horário sem abrir outro sistema',
      'Data da última atualização visível e mudança de sala sinalizada',
      'Link pronto para colar no grupo da turma',
      'Funcionar com sinal instável, a caminho da sala',
    ],
    porque:
      'É o perfil com mais dado: três entrevistas, a maior parte das respostas do questionário e o Mapa de Empatia inteiro. É também quem mais esbarra no problema: entre quem procura sala com frequência, 76,5% relatam dificuldade frequente.',
  },
  {
    id: 'beatriz',
    nome: 'Beatriz Lemos',
    papel: 'Estudante de outro instituto',
    grupo: 'Visitantes e externos',
    resumo: 'Tem aula no IC sem pertencer ao Instituto e fica de fora dos grupos onde a sala circula.',
    foto: {
      arquivo: fotoBeatriz,
      alt: 'Moça de jaqueta jeans segurando um caderno, olhando com ar perdido para um mural cheio de papéis com horários.',
    },
    perfil: 'Engenharia, início do curso. Tem disciplinas no IC desde o período passado.',
    citacao: {
      texto: 'Não tem "a sala da matéria tal", é "a sala da matéria com o código".',
      fontes: ['E1'],
    },
    sobre: [
      'Beatriz assiste a aulas no IC, mas não pertence ao Instituto. Quase nunca precisa procurar nada no prédio, e por isso não criou hábito nem atalho. Não está em nenhum grupo de WhatsApp do IC: quando precisa, pergunta a colegas dos cursos de computação ou à portaria.',
      'Olhou o mural uma vez e não conseguiu separar curso de disciplina. Quando perdeu uma garrafa, foi à coordenação procurar o achados e perdidos, porque não havia indicação de onde ele ficava.',
    ],
    fontesSobre: ['E1'],
    comportamento: [
      { rotulo: 'Primeiro canal', texto: 'Colegas de computação e a portaria.', fontes: ['E1'] },
      { rotulo: 'Grupos do IC', texto: '"Aqui no IC não tem." Por isso não recebe os avisos de sala que circulam nos grupos dos outros estudantes.', fontes: ['E1'] },
      { rotulo: 'idUFF', texto: 'Só no começo do período, e foi suficiente.', fontes: ['E1'] },
      { rotulo: 'Site do IC', texto: 'Não conhece.', fontes: ['E1'] },
      { rotulo: 'Preferência', texto: 'Online, por um acesso "mais conhecido".', fontes: ['E1'] },
    ],
    objetivos: [
      { texto: 'Achar a sala pelo nome da disciplina, sem conhecer o código.', fontes: ['E1'] },
      { texto: 'Resolver sem depender de quem estuda no IC.', fontes: ['E1'] },
      { texto: 'Saber chegar ao prédio e ao andar certo. O professor entrevistado manda o pin de localização para quem vem de fora, "porque senão o pessoal não sabe chegar".', fontes: ['P1'] },
    ],
    frustracoes: [
      { texto: 'O mural é grande e não distingue curso de disciplina.', fontes: ['E1', 'E4'] },
      { texto: 'A aula é endereçada por código, um vocabulário que ela ainda não tem.', fontes: ['E1'] },
      { texto: 'Os sistemas que dão sala exigem vínculo. O idUFF não é acessível a visitantes.', fontes: ['CA'] },
      { texto: 'Serviço administrativo sem orientação de onde fica.', fontes: ['E1', 'E4'] },
    ],
    tarefas: [
      'Localizar a sala de uma disciplina do IC',
      'Chegar ao prédio e ao andar certo',
      'Encontrar o achados e perdidos',
    ],
    expectativas: [
      { texto: 'Um endereço online que todo mundo conheça, em vez de depender do mural.', fontes: ['E1'] },
      { texto: 'Achar pelo nome da disciplina, sem precisar aprender o código antes.', fontes: ['E1'] },
    ],
    requisitos: [
      'Busca por disciplina, turma ou professor, com o código como informação secundária',
      'Acesso aberto, sem login',
      'Orientação para chegar ao prédio, e não apenas para circular dentro dele',
      'Guia de primeiro acesso com o que fica em cada andar',
    ],
    porque:
      'Representa quem usa o prédio sem pertencer a ele, o grupo que o projeto declara atender e que o questionário não alcançou. Ela não conhece os códigos das disciplinas e não está nos grupos, e o calouro do IC começa o curso na mesma situação. O que funcionar para ela tende a servir para ele.',
  },
  {
    id: 'silvia',
    nome: 'Sílvia Moraes',
    papel: 'Servidora do Instituto',
    grupo: 'Professores e demais servidores',
    resumo: 'Mantém a planilha de salas e atende no balcão quem não achou sozinho.',
    foto: {
      arquivo: fotoSilvia,
      alt: 'Mulher de óculos e crachá, sentada diante do computador em um balcão de atendimento de escritório.',
    },
    perfil: 'Servidora técnico-administrativa, há mais de dez anos no Instituto.',
    citacao: {
      texto: 'No primeiro semestre deve vir muita gente aqui perguntar muita coisa.',
      fontes: ['P3'],
    },
    sobre: [
      'Sílvia consulta a alocação de salas todos os dias. A planilha da secretaria tem horário, professor, sala e capacidade de cada espaço, mas não é pública. Ela acha qualquer sala em segundos, mas quem está do outro lado do balcão só fica sabendo se vier perguntar.',
      'Colegas de outros setores trabalham com cópias: um PDF salvo no computador, a relação de salas enviada por e-mail no início do semestre. As cópias envelhecem, porque algumas salas são alocadas com uma semana de antecedência. Quem tem a cópia volta à secretaria, ou confirma pelo WhatsApp com quem fez a alocação.',
    ],
    fontesSobre: ['P1', 'P2', 'P3'],
    comportamento: [
      { rotulo: 'Fonte principal', texto: 'A planilha da secretaria, todos os dias.', fontes: ['P3'] },
      { rotulo: 'Site do IC', texto: 'Raramente, para pegar um contato e repassar.', fontes: ['P1', 'P3'] },
      { rotulo: 'idUFF e mural', texto: 'Não usa para sala. Um dos servidores não sabia que o idUFF mostrava sala.', fontes: ['P2', 'P3'] },
      { rotulo: 'Sem luz ou internet', texto: 'Abre a planilha no celular. Antes havia uma cópia impressa.', fontes: ['P3'] },
      { rotulo: 'Preferência', texto: 'Online, "porque está sempre atualizado".', fontes: ['P3'] },
    ],
    objetivos: [
      { texto: 'Que a informação chegue a quem procura sem passar pelo balcão.', fontes: ['P2', 'P3'] },
      { texto: 'Que quem entra no primeiro semestre saiba como funciona cada setor.', fontes: ['P3'] },
      { texto: 'Que ninguém repasse uma sala lida em cópia desatualizada.', fontes: ['P2'] },
    ],
    frustracoes: [
      { texto: 'O ponto mais difícil é "a divulgação da informação".', fontes: ['P3'] },
      { texto: 'Alocações feitas em cima da hora não chegam às cópias que circulam.', fontes: ['P2'] },
      { texto: 'No início do semestre, muita gente perdida pergunta a mesma coisa.', fontes: ['P3'] },
    ],
    tarefas: [
      'Manter a alocação de salas',
      'Responder pedidos de sala e de serviço no balcão',
      'Avisar uma mudança de sala',
    ],
    expectativas: [
      { texto: 'Uma página com a alocação de salas atualizada, que ela não precise repassar uma a uma.', fontes: ['P2', 'P3'] },
      { texto: 'Um QR Code ou um folder com o mapa das salas e o que cada setor faz, entregue a quem está entrando.', fontes: ['P3'] },
      { texto: 'Um painel no térreo mostrando as salas do dia.', fontes: ['P2'] },
    ],
    requisitos: [
      'Publicar a alocação que já existe, em vez de criar uma base nova',
      'Atualizar em um lugar só, sem retrabalho',
      'Uma página por serviço administrativo, com o que ele resolve, onde fica e o horário',
      'Canal para apontar informação errada',
    ],
    porque:
      'O sistema depende da planilha que ela mantém. Se publicar e atualizar der trabalho extra, a versão pública envelhece como as cópias em PDF de hoje, e Thiago e Beatriz voltam a perguntar no balcão.',
  },
]

// "Quantas personas e por que essas e nao outras": a pergunta do enunciado.
export const escolha = {
  intro:
    'O público do projeto tem três grupos declarados no How Might We: estudantes do IC, professores e servidores, e visitantes externos. Cada grupo tem uma persona, porque dentro de cada um os participantes tinham o mesmo papel diante da informação: quem procura todo período, quem chega de fora e quem guarda o dado. Uma quarta persona repetiria os objetivos de alguma das três.',
  foraTitulo: 'Por que não outras',
  decisoes: [
    {
      pergunta: 'Uma persona de professor',
      resposta:
        'Ele relata não ter problema: decorou o prédio em anos de rotina. O que contou entrou nas outras personas, como o grupo da turma e o pin que manda para quem vem de fora.',
      fontes: ['P1'],
    },
    {
      pergunta: 'Secretaria e área técnica separadas',
      resposta:
        'Os dois guardam a informação e respondem a quem pergunta. Separados, cada persona corresponderia a uma pessoa identificável pelo cargo.',
      fontes: ['P2', 'P3'],
    },
  ],
}

// Relacionamento entre as personas (slide 8 da disciplina), desenhado como
// trajeto: por onde a informacao de sala passa ate chegar a cada uma, e onde
// ela trava. Cada parada aponta para a persona quando e uma delas.
export const trajetos = {
  intro:
    'As três personas estão nas pontas do mesmo caminho. A sala sai da planilha da Sílvia e chega ao Thiago por repasses. A Beatriz, que não está nos grupos, pergunta na portaria e, se não resolver, sobe até a secretaria.',
  rotas: [
    {
      id: 'ate-thiago',
      titulo: 'Como a sala chega ao Thiago',
      paradas: [
        { nome: 'Planilha da secretaria', detalhe: 'Fica na secretaria e não é pública', persona: 'silvia' },
        { nome: 'Cópias e repasses', detalhe: 'PDF por e-mail, grupo da turma, Classroom' },
        { nome: 'Thiago', detalhe: 'Fica sabendo se alguém repassar', persona: 'thiago' },
      ],
      trava:
        'As cópias envelhecem. Uma sala alocada com uma semana de antecedência não chega ao PDF, e a correção depende de alguém avisar no grupo.',
      fontes: ['P1', 'P2', 'P3', 'E2', 'E3'],
    },
    {
      id: 'ate-balcao',
      titulo: 'Como a Beatriz chega à sala',
      paradas: [
        { nome: 'Beatriz', detalhe: 'Fora dos grupos do IC', persona: 'beatriz' },
        { nome: 'Colegas e portaria', detalhe: 'Pergunta a quem estiver por perto, quase sempre o vigia da porta do prédio' },
        { nome: 'Balcão da secretaria', detalhe: 'A Sílvia responde, se a pessoa subir até o andar dela', persona: 'silvia' },
      ],
      trava:
        'Sem os grupos, a resposta depende de quem está na porta. Quando o vigia não sabe, o caminho termina no balcão, com a pergunta repetida que a Sílvia descreve no início de cada semestre.',
      fontes: ['E1', 'E4', 'P3'],
    },
  ],
}
