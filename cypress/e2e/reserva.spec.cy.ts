describe('Teste da tela de Resumo da Viagem', () => {
    beforeEach(() => {
        cy.visit('/reserva');
    });

    it('deve verificar se os botões de rádio para voo, hotel e aluguel de carro estão funcionando corretamente', () => {
        cy.get('[formControlName="vooRadioSelection"]').find('input[type="radio"]').first().check().should('be.checked');
        cy.get('[formControlName="acomodacaoRadioSelection"]').find('input[type="radio"]').first().check().should('be.checked');
        cy.get('[formControlName="carroRadioSelection"]').find('input[type="radio"]').first().check().should('be.checked');
    });

    it('deve mostrar as informações detalhadas após selecionar todas as opções', () => {
        cy.get('[formControlName="vooRadioSelection"]').find('input[type="radio"]').first().check();
        cy.get('[formControlName="acomodacaoRadioSelection"]').find('input[type="radio"]').first().check();
        cy.get('[formControlName="carroRadioSelection"]').find('input[type="radio"]').first().check();
    });

    it('deve permitir avançar para o pagamento após selecionar todas as opções', () => {
        cy.get('[formControlName="vooRadioSelection"]').find('input[type="radio"]').first().check();
        cy.get('[formControlName="acomodacaoRadioSelection"]').find('input[type="radio"]').first().check();
        cy.get('[formControlName="carroRadioSelection"]').find('input[type="radio"]').first().check();

        cy.get('.payment-button').click();

        cy.url().should('include', '/pagamento');
    });
});