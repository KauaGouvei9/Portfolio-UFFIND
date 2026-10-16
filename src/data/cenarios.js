// Cenarios-problema: segunda entrega da Ideacao.
//
// Um cenario por persona (data/personas.js). Formato do Presto (ator,
// narrativa, problema, impacto) mais as perguntas que o cenario levanta,
// dos slides 18 e 19 da disciplina.
//
// O campo fontes nao aparece na tela. As siglas sao as de data/personas.js.
// O cenario da Beatriz e montado a partir da barreira que ela descreveu, nao
// de um incidente que ela viveu: cenario e ficcao baseada em dado.

export const metodo = {
  intro:
    'Três histórias, uma para cada persona, que mostram o problema acontecendo no dia a dia do Instituto.',
  paragrafos: [
    'Um cenário-problema é uma história sobre pessoas realizando uma atividade. Ele é concreto e cheio de detalhe do contexto: onde a pessoa está, o que quer fazer, o que tenta, o que acontece e como ela interpreta o resultado.',
    'Os três cenários juntam situações relatadas nas entrevistas. O enredo de cada um é ficção, mas cada passo dele foi contado por algum participante. As perguntas no fim de cada cenário são as que o grupo precisa responder ao desenhar a solução.',
  ],
}

export const rotulos = {
  ator: 'Ator',
  problema: 'Problema',
  impacto: 'Impacto',
  garantir: 'O que a solução precisa garantir',
  perguntas: 'Perguntas que o cenário levanta',
}

export const cenarios = [
  {
    id: 'primeira-semana',
    persona: 'thiago',
    titulo: 'A primeira semana sem sala',
    narrativa: [
      'Primeira segunda-feira do período, aula às 9h de uma disciplina nova. O professor não postou a sala no Classroom, e ninguém no grupo da turma sabe. Thiago abre o idUFF, que trava, como acontece todo começo de período.',
      'Ele desce até o mural, descobre o andar, sobe e escolhe uma porta. O nome na porta é de outro professor. Pergunta na portaria, e o vigia não sabe. Thiago volta para casa sem ter assistido à aula e só descobre a sala na semana seguinte, quando alguém posta no grupo.',
    ],
    problema:
      'Nenhuma fonte oficial confirma a sala. A única que funciona depende de alguém repassar.',
    impacto: 'Uma semana de aula perdida.',
    garantir: [
      'Sala, bloco, andar e horário na mesma resposta',
      'Data da última atualização visível',
      'Link para colar no grupo da turma',
    ],
    perguntas: [
      'Onde a sala precisa estar publicada para o Thiago ver antes de sair de casa?',
      'Quem avisa quando o professor não informa a sala?',
      'Como o Thiago sabe se a informação que encontrou ainda vale?',
    ],
    fontes: ['E2', 'E3', 'E4'],
  },
  {
    id: 'disciplina-pelo-codigo',
    persona: 'beatriz',
    titulo: 'A disciplina pelo código',
    narrativa: [
      'Beatriz se inscreveu numa disciplina do IC. O idUFF mostra o código e a turma, e o mural do prédio mistura cursos e códigos na mesma folha. Ela não está em nenhum grupo do Instituto.',
      'O vigia da porta indica o andar. Lá em cima, ela não sabe qual das salas é a dela e passa por duas portas fechadas. Chega atrasada, guiada por um colega de computação que encontrou no corredor.',
    ],
    problema:
      'A informação só faz sentido para quem já conhece o código e está nos grupos.',
    impacto: 'Atraso, e a dependência de encontrar alguém por acaso.',
    garantir: [
      'Busca pelo nome da disciplina, com o código como informação secundária',
      'Consulta sem login',
      'Orientação até o andar e a sala, e não só o número',
    ],
    perguntas: [
      'Como achar uma disciplina sem saber o código?',
      'O que a Beatriz precisa ver para chegar à sala sem ajuda?',
      'O que ela consegue consultar sem login e sem estar em grupo nenhum?',
    ],
    fontes: ['E1', 'E4', 'CA'],
  },
  {
    id: 'sala-que-mudou',
    persona: 'silvia',
    titulo: 'A sala que mudou',
    narrativa: [
      'Segunda semana do período. Uma turma ficou maior que o previsto e a sala é trocada. Sílvia atualiza a planilha da secretaria. O PDF enviado no início do semestre continua com a sala antiga, e um colega de outro setor quase repassa o número errado a um professor, até que confirma pelo WhatsApp.',
      'Os alunos que estão no grupo da turma recebem o aviso. Os que não estão vão para a sala antiga. Alguns perguntam ao vigia, outros sobem até a secretaria, e Sílvia responde a mesma pergunta várias vezes ao longo da manhã.',
    ],
    problema:
      'A atualização existe em um lugar só, e as cópias que circulam não acompanham.',
    impacto: 'Alunos na sala errada e a mesma pergunta repetida no balcão.',
    garantir: [
      'A mudança aparece onde as pessoas já consultam, sem depender das cópias',
      'Sala alterada sinalizada, com a data da mudança',
      'Link pronto para o professor avisar a turma',
    ],
    perguntas: [
      'Quem publica a mudança, e quanto tempo ela leva para aparecer?',
      'Como quem tem uma cópia antiga descobre que ela ficou velha?',
      'Como avisar os alunos que não estão no grupo da turma?',
    ],
    fontes: ['P1', 'P2', 'P3'],
  },
]
