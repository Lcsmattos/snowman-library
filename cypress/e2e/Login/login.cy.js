describe('Página de Login - Snowman Library', () => {
  beforeEach(() => {
    // Substitua pela URL da sua página de login
    cy.visit('http://localhost:3000/login');
  });

  it('Deve conter a label Email', () => {
    cy.contains('text', 'Email').should('be.visible');
  });

  it('Deve conter a label Senha', () => {
    cy.contains('text', 'Senha').should('be.visible');
  });

  it('Deve conter um botão Entrar', () => {
    cy.get('button').contains('Entrar').should('be.visible');
  });

  it('Deve tentar enviar o formulário sem preencher', () => {
    cy.get('button').contains('Entrar').click()
    cy.contains('text', 'Email Obrigatório').should('be.visible');
    cy.contains('text', 'Senha Obrigatória').should('be.visible');
  });

  it('Deve preencher o formulário e acessar', () => {
    cy.get("input[name='email']").type("email@gmail.com");
    cy.get("input[name='password']").type("teste");
    cy.get('button').contains('Entrar').click()
  });
});
