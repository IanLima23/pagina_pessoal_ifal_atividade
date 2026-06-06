# Projeto — Recriação Responsiva

## Autor
Ian Lima

## Site Escolhido
Spotify (Homepage)

## Link do Site Original
https://www.spotify.com

## Objetivo Visual do Projeto
Construir uma interface moderna e adaptativa inspirada na página de vendas inicial do Spotify. O foco foi reinterpretar o uso de espaçamentos generosos, botões de ação arredondados de grande destaque, blocos de benefícios limpos organizados em grids inteligentes e manter a identidade de contrastes fortes de cores do serviço original.

## Estratégia Responsiva
O projeto foi integralmente concebido e desenvolvido utilizando a abordagem **Mobile-First**. Toda a estilização estrutural base foca em telas pequenas (smartphones), otimizando a legibilidade e o empilhamento vertical do conteúdo. As expansões e distribuições de colunas foram aplicadas progressivamente por meio de Media Queries baseadas no parâmetro `min-width`.

## Breakpoints Implementados
- **768px (Tablets):** Ativação da barra de navegação no header, transformação dos blocos institucionais do footer em colunas paralelas e organização dos cards de benefícios em malha de 2 colunas.
- **1024px (Laptops/Desktops):** Expansão das seções internas e ampliação da malha de benefícios principais para exibição em 4 colunas consecutivas através de CSS Grid.
- **1440px (Telas Ultra-Wide):** Alargamento da largura máxima do container centralizador de conteúdo para evitar excesso de áreas vazias nas laterais em monitores maiores.

## Recursos Utilizados
- **Estratégia Mobile-First:** Desenvolvimento de folhas de estilo ascendentes de telas menores para maiores.
- **CSS Grid Layout:** Controle e distribuição de blocos na seção de destaques institucionais e alinhamento do footer em resoluções maiores.
- **Flexbox:** Organização linear de links, centralização de caixas de textos e ajustes nos alinhamentos dos itens da barra de navegação.
- **Tipografia Fluida:** Utilização do recurso matemático `clamp()` nos cabeçalhos (`h1` e `h2`), permitindo que as fontes aumentem ou diminuam organicamente conforme a largura do navegador, sem quebras bruscas.
- **Tema Escuro Nativo:** Suporte à diretiva de mídia `prefers-color-scheme: dark` que injeta variáveis CSS customizadas de baixo contraste caso o sistema operacional do estudante esteja configurado para o modo escuro.
- **Imagens e Mídias Adaptativas:** Proteção estrutural do elemento de imagens usando `max-width: 100%`.

## Adaptações Realizadas
Para simplificar o desenvolvimento mantendo o código 100% autoral e limpo, o menu mobile no formato hambúrguer (com JavaScript) foi omitido e substituído por uma barra simplificada de foco contínuo nas ações de login. Os ícones institucionais pesados foram convertidos e reinterpretados através do uso de Emojis de alta legibilidade, otimizando o carregamento da página.

## Dificuldades
O principal desafio técnico consistiu em criar um ponto de equilíbrio ideal na função `clamp()` para os títulos maiores da seção Hero, impedindo que as letras ficassem pequenas demais em celulares ou gigantescas em telas de alta definição. O problema foi superado por testes sequenciais por meio do inspetor de elementos do navegador (DevTools).