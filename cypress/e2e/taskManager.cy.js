describe('Fluxo Principal do Gerenciador de Tarefas', () => {

  beforeEach(() => {
          cy.visit('http://localhost:5173'); 
      });

  // CREATE
  // Caso de teste específico
  it('Deve adicionar uma nova tarefa à lista', () => {    
    const novaTarefa = 'Revisar Àrvore binária';
    
    // Localiza o input e digita o texto.
    cy.get('input[placeholder="Nova tarefa..."]').type(novaTarefa);
    
    // Localiza o botão que contém o texto "Adicionar" e clica.
    cy.get('button').contains('Adicionar').click();
    
    // Confirma se o texto da nova tarefa está visível na página.
    cy.contains(novaTarefa).should('exist');
  });

  // UPDATE
    it('Deve marcar e desmarcar uma tarefa como concluída', () => {
      // Usa uma tarefa inicial do estado do App.jsx
      const taskTitle = 'Go shopping'; 
      
      // Encontra o botão da tarefa. 
      cy.contains('button', taskTitle).as('taskButton');

      // Clica para marcar como concluída
      cy.get('@taskButton').click(); 

      // Verifica se a classe 'line-through' foi aplicada (concluída)
      cy.get('@taskButton').should('have.class', 'line-through');

      // Clica novamente para desmarcar
      cy.get('@taskButton').click();

      // Verifica se a classe 'line-through' foi removida (não concluída)
      cy.get('@taskButton').should('not.have.class', 'line-through');
    }); 

    //Delete
    it('Deve deletar uma tarefa', () => {
    const tarefaParaDeletar = 'Go to the supermarket';

    // Localizar o elemento da tarefa para usá-lo como contexto
    cy.contains('li', tarefaParaDeletar).as('taskItem')

    // Clicar no botão de lixeira
    cy.get('@taskItem').find('button').last().click();

    // Verificar se a tarefa não está mais na tela
    cy.contains(tarefaParaDeletar).should('not.exist'); 
});
});