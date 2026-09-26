# UFFIND

Portfólio do processo de design do **UFFIND**, um guia digital para encontrar
salas, laboratórios e serviços administrativos do Instituto de Computação da
UFF. O mascote do projeto se chama **Uffindinho**.

Trabalho do Grupo 3 da disciplina de Interação Humano-Computador,
Prof.ª Daniela Gorski Trevisan, período 2026.2.

**Pergunta norteadora:** como poderíamos ajudar quem estuda, trabalha ou visita
o IC/UFF a encontrar, de forma rápida e clara, informações sobre salas e
serviços administrativos?

O site está no ar em
[kauagouvei9.github.io/Portfolio-UFFIND](https://kauagouvei9.github.io/Portfolio-UFFIND/).

---

## Rodar e publicar

Requer Node.js 18 ou superior.

```bash
npm install && npm run dev
```

Para publicar, basta enviar para a `main`. A GitHub Action faz o build e
atualiza o site sozinha.

```bash
git pull --ff-only origin main && git add -A && git commit -m "sua mensagem" && git push origin main
```

O `git pull` no começo não é opcional: mais de uma pessoa mexe no repositório.

Outros comandos:

```bash
npm run build    # build de produção, vale rodar antes de commitar
npm run tcle     # regera o PDF do TCLE a partir do texto do site
```

---

## Onde editar o conteúdo

Todo o texto do site vive em `src/data/`. Para trocar qualquer conteúdo, você
não precisa abrir nenhum componente.

| Quero mudar | Arquivo |
| --- | --- |
| Nome, frase do hero, blocos da home, rodapé | `src/data/projeto.js` |
| Quem / O que / Metas de Design | `src/data/hmw.js` |
| Atividades do Roadmap | `src/data/roadmap.js` |
| Textos que explicam cada método | `src/data/metodos.js` |
| Tabela da análise competitiva | `src/data/competitiva.js` |
| Referências das certezas da Matriz CSD | `src/data/csd.js` |
| Campos e requisitos do Mapa de Empatia | `src/data/mapaEmpatia.js` |
| Perfis, roteiro, TCLE e conclusões das entrevistas | `src/data/entrevistas.js` |
| Resultados e gráficos do questionário | `src/data/questionario.js` |
| Links do Miro e do Google Forms | `src/data/embeds.js` |
| Integrantes da equipe | `src/data/equipe.js` |
| Ordem das entregas e navegação entre elas | `src/data/entregas.js` |

### Imagens

- **Mascote:** `src/assets/uffindinho.png`. Mantenha o fundo transparente. Fica
  em `src/assets/` e não em `public/` para o Vite gerar um nome com hash a cada
  build, evitando que o navegador sirva a versão antiga do cache.
- **Favicons:** os arquivos em `public/`. São recortes do mascote sem a palavra
  UFFINDINHO, que fica ilegível em 32px. Se trocar a logo, gere os favicons de
  novo a partir dela.
- **Logos institucionais e foto da cartolina:** `public/assets/`.

### TCLE

O PDF é gerado a partir do mesmo texto que a página mostra. Mudou o termo em
`src/data/entrevistas.js`, rode `npm run tcle`.

---

## Estrutura de pastas

```
public/          favicons e arquivos servidos direto (logos, PDF, foto)
src/assets/      imagens versionadas pelo Vite
src/styles/      global.css com todos os tokens de cor e tipografia
src/components/  componentes reutilizáveis, cada um com seu CSS Module
src/pages/       uma página por rota, pages/imersao/ agrupa as entregas
src/data/        todo o conteúdo editável
scripts/         utilitários de linha de comando
```

Feito com React e Vite. As rotas usam `HashRouter`, então recarregar qualquer
página funciona no GitHub Pages sem configuração extra.

---

## Convenções

Três regras que valem para todo texto que aparece na tela:

1. **Sem travessão.** Use ponto, vírgula ou dois-pontos.
2. **Sem status nem datas.** O site é um portfólio público, não um quadro de
   acompanhamento. O que ainda não existe aparece como estado vazio honesto.
3. **O texto fala com quem visita o site**, não com a equipe. Instruções
   internas, como orientações ao entrevistador, ficam nos documentos do grupo.

Sobre as cores: todas vêm dos tokens em `src/styles/global.css`. Não escreva
hex solto nos módulos CSS.

---

## Pendências

- Link do Miro com a digitalização do Mapa de Empatia, em `src/data/embeds.js`
- Conclusões das entrevistas, em `src/data/entrevistas.js`
