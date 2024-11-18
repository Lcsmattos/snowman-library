# **Catálogo e Aluguel de Livros Online**

Este é um projeto desenvolvido com **React** e **Typescript** para visualização de catálogo e aluguel de livros online. O site é responsivo e suporta múltiplos idiomas, com um fluxo realista de aluguel utilizando modais e alertas.

---

## **Funcionalidades**

- **Catálogo de livros:** Visualização e busca de livros disponíveis.
- **Fluxo de aluguel:** Com modais e feedback ao usuário.
- **Troca de idioma:** Suporte a Português e Inglês.
- **Responsividade:** Layout adaptado para desktop, tablets e smartphones.

---

## **Instalação e Execução**

### **Pré-requisitos**

- **Node.js**: v16 ou superior.
- Gerenciador de pacotes: **npm** ou **yarn**.

### **Passos para rodar o projeto**

1. Clone o repositório:

   ```bash
   git clone https://github.com/Lcsmattos/snowman-library.git
   cd snowman-library

   ```

2. Instale as dependências:
   npm install

   # ou

   yarn install

3. Execute o projeto em modo de desenvolvimento:
   npm start

   # ou

   yarn start

4. Acesse no navegador:
   http://localhost:3000

---

## **Simulação de API**

Os dados de livros e fluxos de aluguel estão simulados com mocks localizados em _src/mocks_. Estes mocks replicam o comportamento de chamadas reais à API.

---

## **Tecnologias Utilizadas**

# **Dependências Principais**

•**React e Typescript**: Base do projeto.
•**Styled-components**: Estilização dinâmica.
•**Axios**: Simulação de requisições API.
•**React-hook-form e Yup**: Manipulação e validação de formulários.
•**React-i18next**: Internacionalização.
•**React-router-dom**: Navegação.

# **DevDependencies**

•**Cypress**: Testes end-to-end.
•**ESLint e Prettier**: Padrões de código e formatação.

---

## **Arquitetura e Organização do Projeto**

A arquitetura segue um padrão modular com separação de responsabilidades, utilizando contextos para manipulação global de estados.

cypress # Testes
src/
├── assets/ # Imagens do projeto
├── components/ # Componentes reutilizáveis
├── contexts/ # Gerenciamento de estado global
├── i18n/ # Textos da internacionalização
├── mocks/ # Simulação de dados
├── pages/ # Páginas do site
├── routes/ # Separação de rotas do site
├── services/ # Chamadas ao banco de dados
├── styles/ # Estilos globais e temas
├── types/ # Tipagens de objetos globais
├── utils/ # Funções auxiliares

---

## **Responsividade**

A responsividade foi implementada com **Flexbox** e **Media Queries**, garantindo uma experiência fluida em dispositivos móveis, tablets e desktops.

---

## **Internacionalização**

•Idiomas suportados:
•Português (pt-BR)
•Inglês (en-US)
•Traduções dos textos em src/i18n.

---

## **Testes**

O projeto inclui testes E2E: Executados com Cypress.

**Rodando os testes**:

npx cypress open

---

## **Configuração de Estilo**

Utilizando Styled-components para criar componentes estilizados e reutilizáveis. O foco é na simplicidade e manutenibilidade.

---

## **Como Contribuir**

1. Faça um fork do repositório.

2. Crie uma branch para a sua feature:
   git checkout -b sua-feature

3. Commit suas alterações:
   git commit -m 'Adicionando nova feature'

4. Faça o push:
   git push origin minha-feature

5. Abra um Pull Request.

## **Autor**

Lucas Santos Mattos
