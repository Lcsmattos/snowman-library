describe('Página Home - Snowman Library', () => {
  beforeEach(() => {
    // Substitua pela URL da sua página home
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir os cards de livros na página', () => {
    cy.get('.book-card').should('have.length.greaterThan', 0);
  });

  it('Deve abrir um modal ao clicar em um card de livro', () => {
    cy.get('.book-card').first().click();
    cy.get('.modal').should('be.visible');
  });

  it('Deve exibir informações e sinopse no modal', () => {
    cy.get('.book-card').first().click();
    cy.get('.modal').within(() => {
      cy.contains('Descrição').should('be.visible');
      cy.contains('Autor').should('be.visible');
    });
  });

  it('Deve redirecionar para a página de login ao clicar no botão Alugar', () => {
    cy.get('.book-card').first().click();
    cy.get('.modal button').contains('Alugar').click();
    cy.url().should('include', '/login');
  });
});
