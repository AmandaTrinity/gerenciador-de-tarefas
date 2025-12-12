# 🚀 Gerenciador de Tarefas (Task Manager)

[![Feito com React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Construído com Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Estilizado com Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Testado com Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Licença MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Um simples e elegante gerenciador de tarefas (To-Do List) desenvolvido com a modernidade do **React** e a rapidez do **Vite**, estilizado com a flexibilidade do **Tailwind CSS**.

Este projeto foi criado para ser uma base limpa e eficiente para o desenvolvimento de aplicações web que exigem gestão de estado e uma interface de utilizador responsiva.

## ✨ Funcionalidades

O Gerenciador de Tarefas permite ao utilizador realizar as operações CRUD (Criar, Ler, Atualizar, Eliminar) básicas:

* **Adicionar** novas tarefas à lista.
* **Marcar/Desmarcar** tarefas como concluídas.
* **Remover** tarefas da lista.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

* [**React**](https://react.dev/)
* [**Vite**](https://vitejs.dev/)
* [**Tailwind CSS**](https://tailwindcss.com/)
* **ESLint** (para qualidade de código)
* **Prettier** (para formatação de código)
* **Cypress** (para testes End-to-End)

## ⚙️ Instalação e Configuração

Para obter uma cópia local e operacional, siga estes passos.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### Passos

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    O servidor será iniciado e estará acessível em `http://localhost:5173`.

## 🧪 Testes End-to-End

Este projeto inclui testes de ponta a ponta (E2E) com **Cypress** para garantir que as funcionalidades principais estão a funcionar como esperado. Os testes simulam as interações do utilizador no navegador e validam os fluxos de:

- Adicionar uma nova tarefa.
- Marcar e desmarcar uma tarefa como concluída.
- Excluir uma tarefa.

Os testes estão localizados em `cypress/e2e/`.

## 💻 Scripts Disponíveis

No diretório do projeto, pode executar os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local. |
| `npm run build` | Compila o projeto para produção na pasta `dist/`. |
| `npm run lint` | Executa o ESLint para identificar problemas e aderência ao estilo de código. |
| `npm run preview` | Serve o build de produção localmente, útil para testar a versão compilada. |
| `npm run format` | Formata todos os arquivos do projeto com o Prettier. |
| `npm run cy:open` | Abre a interface interativa do Cypress para executar e depurar os testes. |
| `npm run cy:run` | Executa todos os testes em modo *headless* (sem interface gráfica). |

## 🤝 Contribuição

Contribuições, *issues* e pedidos de funcionalidades são bem-vindos! Sinta-se à vontade para verificar a [página de issues](https://github.com/seu-usuario/nome-do-repositorio/issues).

Para contribuir com o código:

1.  Faça um *fork* do projeto.
2.  Crie uma *branch* para a sua funcionalidade (`git checkout -b feature/minha-nova-feature`).
3.  Faça *commit* das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Faça *push* para a *branch* (`git push origin feature/minha-nova-feature`).
5.  Abra um *Pull Request* detalhado.

## 📄 Licença

Este projeto está sob a Licença MIT.
