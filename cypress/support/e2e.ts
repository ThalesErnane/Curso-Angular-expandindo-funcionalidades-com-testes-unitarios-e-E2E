// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// When a command from ./commands is ready to use, import with `import './commands'` syntax
import './commands';

// Stub API calls used by e2e specs to keep Cypress independent from backend availability.
beforeEach(() => {
	cy.intercept('GET', '**/pagamento/qrcode', {
		statusCode: 200,
		body: {
			codigo: '00020126330014BR.GOV.BCB.PIX0111122233344445204000053039865406100.005802BR5913JORNADA MILHAS6009SAO PAULO62070503***6304ABCD',
			imagem: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB'
		}
	}).as('getQrCode');

	cy.intercept('POST', '**/reserva', {
		statusCode: 201,
		body: {
			id: 1
		}
	}).as('createReserva');
});
