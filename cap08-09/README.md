# Projeto CSS Zen Garden

## Autor
Ian Lima

## Tema
Minimalista Industrial / Tech

## Design de Referência
Steel

## Link de Referência
https://www.csszengarden.com/219/

## Descrição das Decisões de Layout
O projeto foi estruturado utilizando **CSS Grid Layout** para a malha principal. No desktop, o layout é dividido em duas colunas bem definidas: o conteúdo principal com os cards informativos (`.supporting`) ocupa o lado esquerdo, enquanto a barra de navegação e créditos (`.sidebar`) fica fixada no lado direito utilizando a propriedade `position: sticky`.

A técnica de **Flexbox** foi aplicada para organizar as seções internas de texto em formato de coluna fluida e para alinhar verticalmente os links e listas da barra lateral. O design adota uma estratégia responsiva através de *Media Queries*, fazendo com que em telas menores (celulares) o conteúdo se reorganize automaticamente em uma única coluna integrada, garantindo uma leitura confortável.

## Recursos Utilizados
- **CSS Grid:** Utilizado para criar a divisão macro de colunas (conteúdo e barra lateral) no desktop.
- **Flexbox:** Aplicado no alinhamento de listas, links e no espaçamento dos blocos internos de texto.
- **Variáveis CSS (`:root`):** Centralização e gerenciamento da paleta de cores (tons de cinza, branco e azul IBM) e fontes do projeto.
- **Efeitos de Transição:** Uso de `:hover` nos links para criar um feedback visual suave ao passar o mouse.
- **Responsividade:** Uso de *Media Queries* com quebra em `768px` para adaptação em dispositivos móveis.