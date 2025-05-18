# Atividade ponderada de UX | Semana 4 | Figma

**Estudantes**: Ana Carolina Pacheco, João Victor de Souza Campos, Nataly de Souza Cunha | T11 | G04

**Professor(a)**: Bruna Mayer 

## 🎯 Atividade

&emsp;Realização de um componente no Figma utilizando Autolayout, DevMode e demais ferramentas como forma de aprendizado da ferramenta, bem como a implementação desse componente em uma página web.

## Tecnologias e estruturas de arquivos principais:

- [Next.js](https://nextjs.org/): framework React que integra recursos para desenvolvimento back-end e front-end, comumente utilizado para a construção de aplicações web com renderização híbrida (SSR, SSG e CSR), roteamento eficiente e otimizações integradas;
- `src`: integra os arquivos de desenvolvimento, como as páginas visualizáveis pelo usuário;
- `src/components`: armazena o componente desenvolvido, a ser importado na página web;
- `src/page.tsx`: página acessível ao usuário;

## Como executar

1. Execute o comando `npm i` para instalar as dependências necessárias para o funcionamento da página;

2. Execute algum dos seguintes comandos, respectivamente, conforme necessidade:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Assim como será instruído nas mensagens do terminal (Veja no menu superior: `Ver>Terminal` ou aperte `Ctrl+`), acesse [http://localhost:3000](http://localhost:3000) em um navegador para visualizar as páginas e os botões.


3. Editando o componente de Botão:
    - Em `src/components/botao.tsx` é possível visualizar o código que configura o componente de botão, ao editá-lo, todas as instâncias de botão se atualizarão conforme alterações;
    - Em `src/page.tsx` tem-se a construção geral da página e a chamada dos botões. Apenas caso o texto interno do componente botão seja exatamente "Salvar", será apresentado na página o botão de Salvar. Da mesma forma, se o texto interno do componente botão seja "Editar", será apresentado na página o botão de Editar.


## Comentários finais sobre a resolução da atividade

A presente atividade foi uma interessante oportunidade de colocar em prática a ferramenta de design Figma e nos manter atualizados de seus lançamentos de features, extremamente úteis para o desenvolvimento front-end e design de experiência de usuário. Passamos por uma pequena curva de aprendizagem, muito fácil de ser superada, para utilizarmos as funcionalidades do Figma, rapidamente conseguindo chegar à construção de um componente com Autolayout, prototipação, propriedades, etc. Para a implementação, o trio teve um pouco mais de dificuldade em descobrir a maneira certa de transportar todas as propriedades do componente no código e, apesar de que não de maneira perfeita em disposição de tela, conseguimos reproduzir o componente e as instâncias de maneira fidedigna ao planejado.