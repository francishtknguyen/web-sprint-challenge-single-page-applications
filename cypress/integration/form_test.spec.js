
describe('Pizza app sprint Challenge', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('sanity check', () => {
        expect(true).to.equal(true);
    });

    const orderLink = () => cy.get('a').contains('Order Here');
    const homeLink = () => cy.get('a').contains('Home');
    const nameInput = () => cy.get('input[name="name"]');
    const sizeInput = () => cy.get('select[name="size"]');
    const specialInput = () => cy.get('input[name="special"]');
    const roniInput = () => cy.get('input[name="pepperoni"]');
    const sausageInput = () => cy.get('input[name="sausage"]');
    const pineappleInput = () => cy.get('input[name="pineapple"]');
    const jalapenoInput = () => cy.get('input[name="jalapenos"]');
    const submitBtn = () => cy.get('.submitBtn')

    it('clicking on order link opens /pizza', () => {
        orderLink().click();
        cy.url().should('include', '/pizza');
    });

    it('check adding text to boxes', () => {
        // clicking order link
        orderLink().click();

        // Testing name input
        nameInput().should("have.value", "").type("Test Name").should("have.value", "Test Name");

        // Testing special notes input 
        specialInput().should("have.value", "").type("Test Special Notes").should("have.value", "Test Special Notes");
        
    });

    it('Testing multiple topping clicks', () => {
        
        // clicking order link
        orderLink().click();

        // unchecking all checkboxes
        cy.get('[type="checkbox"]').uncheck();

        // checking multiple toppings
        roniInput().check();
        sausageInput().check();
        pineappleInput().check();
        jalapenoInput().check();

        // unchecking all checkboxes
        cy.get('[type="checkbox"]').uncheck();
    });

    it('Testing submitting a form', () => {
         // clicking order link
         orderLink().click();

        // checkign form is empty and filling out form

        nameInput().should("have.value", "").type("Test Name").should("have.value", "Test Name");

        sizeInput().should("have.value", "").select('Medium').should("have.value", "medium");

        specialInput().should("have.value", "").type("Test Special Notes").should("have.value", "Test Special Notes");

        roniInput().should('not.be.checked').check().should('be.checked');
        sausageInput().should('not.be.checked').check().should('be.checked');
        pineappleInput().should('not.be.checked').check().should('be.checked');
        jalapenoInput().should('not.be.checked').check().should('be.checked');

        // click submit

        submitBtn().click();

    })


    
})