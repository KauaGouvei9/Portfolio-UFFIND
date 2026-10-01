// Declaracao de uso de IA, pedida pela professora.
// Alimenta o PDF gerado por scripts/gerar-declaracao-ia.mjs e o link discreto
// no fim da pagina da Equipe.
//
// Depois de editar este arquivo, rode: npm run declaracao

export const declaracaoIA = {
  titulo: 'Declaração de uso de inteligência artificial',
  intro:
    'Este documento informa onde a inteligência artificial foi usada na produção do portfólio e reúne prompts representativos de cada frente de trabalho. Em todas as frentes, a decisão final sobre o que entra, o que sai e como fica foi do grupo.',

  usos: [
    {
      titulo: 'Implementação do site',
      texto:
        'Geração e edição do código React e CSS a partir da arquitetura, das regras de organização de conteúdo e das decisões visuais definidas pelo grupo. Cada alteração passou por revisão, ajuste e integração manual, e os commits são do grupo.',
    },
    {
      titulo: 'Síntese temática das entrevistas',
      texto:
        'As sete transcrições foram feitas à mão pelo grupo, em mais de um dia de trabalho. A partir desse material, a IA apoiou o agrupamento dos códigos em temas e a redação das conclusões. Os temas, os requisitos de design e os trechos citados foram revisados, cortados e reescritos pelo grupo.',
    },
    {
      titulo: 'Ajustes de ortografia e formatação',
      texto:
        'Correção ortográfica e padronização de formatação dos textos escritos pelo grupo.',
    },
    {
      titulo: 'Adaptação do painel do Power BI',
      texto:
        'Ajuste de um layout pré-existente para refletir os dados corretos da pesquisa.',
    },
    {
      titulo: 'Verificação do portfólio',
      texto:
        'Conferência do conteúdo publicado contra os itens pedidos no enunciado da entrega, para localizar o que ainda faltava.',
    },
  ],

  promptsIntro:
    'Os prompts abaixo são representativos de cada frente. Para cada um está registrado o que o grupo mudou na resposta recebida, que é onde está a autoria do trabalho.',

  prompts: [
    {
      prompt: 'Analise o contexto para futuras implementações.',
      depois:
        'A leitura apontou pendências que o grupo já havia resolvido. O grupo corrigiu e redirecionou o trabalho para a seção de entrevistas.',
    },
    {
      prompt:
        'Faça um checklist de onde estamos agora em relação ao enunciado, baseado só no portfólio. Não mexa em nada ainda, só analise.',
      depois:
        'O grupo usou o checklist para definir a ordem do trabalho e descartou os pontos que considerou fora de escopo.',
    },
    {
      prompt:
        'É possível colocar o link do Power BI no site igual aos links do Miro, para a pessoa visualizar sem sair do portfólio?',
      depois:
        'O grupo forneceu o link publicado e decidiu manter os gráficos próprios do site como conteúdo principal, com o painel como camada extra.',
    },
    {
      prompt: 'Com a leitura que você fez agora, você acha que foi feito errado?',
      depois:
        'O grupo avaliou as ressalvas levantadas sobre a análise e escolheu quais incorporar no texto da página.',
    },
    {
      prompt:
        'Vamos deixar os números exatos das respostas do questionário só na pergunta. Consegue retirar os números fixos?',
      depois:
        'Decisão do grupo sobre a apresentação dos dados. O grupo pediu o ajuste duas vezes até chegar ao formato final.',
    },
    {
      prompt:
        'Sobre as fórmulas estatísticas, os usuários não fazem ideia do que é isso, e isso não é ensinado em IHC. Retirei, pois que o texto deve ser o mais facilitador possível.',
      depois:
        'Critério editorial definido pelo grupo e aplicado a toda a seção de correlações.',
    },
    {
      prompt: 'O painel interativo não apareceu no site. Consegue corrigir isso?',
      depois: 'O grupo identificou e reportou a falha a partir da navegação no site publicado.',
    },
    {
      prompt:
        'Qual a melhor maneira de deixar isso mais visível no portfólio? Texto atrás de texto só faz o leitor perder a vontade de ler.',
      depois:
        'Requisito de legibilidade definido pelo grupo, que resultou nos cartões de síntese no topo da página.',
    },
    {
      prompt:
        'Por que a ordem foi invertida? Primeiro a pessoa tem que ler o que foi perguntado e depois o resultado da pesquisa.',
      depois:
        'O grupo rejeitou a ordenação proposta e restabeleceu a sequência metodológica: técnica, participantes, roteiro, análise e conclusões.',
    },
    {
      prompt: 'Retire a seção de limitações.',
      depois: 'Decisão do grupo sobre o escopo do que seria publicado.',
    },
    {
      prompt: 'Com o checklist final, como ficamos?',
      depois:
        'O grupo usou a conferência para fechar a entrega e definir o que ainda seria ajustado.',
    },
  ],

  arquivo: 'assets/docs/Declaracao_IA_G3.pdf',
  rotulo: 'Declaração de uso de IA (PDF)',
}
