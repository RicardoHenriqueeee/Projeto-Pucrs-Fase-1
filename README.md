## Projeto Livraria - Fase 1

Aluno: Ricardo Henrique Lobo Barreto Machado da Silva
Curso: Analise e Desenvolvimento de Sistemas

## Descrição do Projeto

Este projeto é uma aplicação React para gerenciamento de livros, desenvolvido como parte de um projeto de trabalho. Ele permite cadastrar, listar e excluir livros de forma estática. A aplicação foi desenvolvida utilizando Create React App e React Router DOM para a navegação entre páginas.

## Como Executar o Projeto
Siga os passos abaixo para rodar a aplicação localmente:

1. Clone o repositório git ou baixe o arquivo zip e extraia a pasta:
git clone https://github.com/RicardoHenriqueeee/projeto-pucrs-fase1.git

2. Instale as dependências:
Entre na pasta do projeto, clique no caminho da pasta e digite cmd para entrar no diretório, logo após execute esse comando:
npm install

3. Execute o projeto com esse comando:
npm start

## Estrutura do Projeto

<Componentes>

NavBar: Responsável pela navegação entre as páginas da aplicação. Contém links para a página inicial (Home), página sobre (About), página de cadastro (Register) e página de listagem (List).

BookForm: Componente que contém o formulário para cadastro de livros. Valida se os campos de título, autor, genero e data foram preenchidos antes de submeter.

BookList: Lista os livros cadastrados. Permite excluir um livro da lista.


<Páginas>

Home: Página inicial da aplicação, com uma mensagem de boas-vindas.

About: Página informativa sobre a aplicação.

Register: Página para cadastrar novos livros, utilizando o componente BookForm.

List: Página que lista os livros cadastrados, utilizando o componente BookList.

<Prints>

![Aqui temos a tela inicial](/public/pag-inical.png)
![Aqui temos a tela sobre](/public/pag-sobre.png)
![Aqui temos a tela de cadastrar](/public/pag-cadastrar.png)
![Aqui temos a tela de lista dos livros](/public/pag-livros.png)
![Aqui temos a tela de edição dos livros](/public/pag-edicao.png)