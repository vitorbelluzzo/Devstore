describe('search products', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to search for product', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.contains('Cart(1)').should('exist')
  })
})
