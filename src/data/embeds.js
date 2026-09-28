// Todos os links externos e de iframe do projeto em um lugar so.
// Para publicar um board: no Miro, Share > Embed > copiar a URL do src do
// iframe e colar aqui. Use null enquanto o conteudo nao existir: o componente
// MiroEmbed exibe automaticamente o card de "Conteudo em preparacao".

export const embeds = {
  matrizCSD: 'https://miro.com/app/live-embed/uXjVHvMwcZ4=/',
  mapaEmpatia:
    'https://miro.com/app/live-embed/uXjVHiuCm58=/?focusWidget=3458764684871963221&embedMode=view_only_without_ui&embedId=243311204958',

  // Painel do Power BI com a analise do questionario.
  // Precisa ser o link de "Publicar na web" (formato /view?r=...), que abre
  // sem login. O link de compartilhamento (app.powerbi.com/groups/...) exige
  // autenticacao e cairia no card de erro para quem visita o portfolio.
  powerBI:
    'https://app.powerbi.com/view?r=eyJrIjoiMzk1M2QwODQtMGUwMC00MTc0LTk3ZjItMzBiNThmNmIzMjA1IiwidCI6ImRhYjAxMTk3LWRlZTAtNGQ0ZC1hOTA0LTNlNWY0YjBkODFhMyJ9',
}

// Links externos que abrem em nova aba.
export const links = {
  questionario:
    'https://docs.google.com/forms/d/e/1FAIpQLSehTnkBUmLGbI-8mmAjJvoPzx3MPNU-6kKu0YUMUX56PFDQ4w/viewform',
}
