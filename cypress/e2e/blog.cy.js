class BlogSearch {
  elements = {
    searchIcon: () => cy.get('.ast-search-menu-icon.slide-search'),
    searchInput: () => cy.get('#search-field'),
    searchWithoutResult: () => cy.get('.no-results'),
    searchWithResults: () => cy.get('.post-content')
  }

  clickSearchIcon() {
    this.elements.searchIcon().click()
  }

  typeSearchText(text) {
    this.elements.searchInput().type(text)
  }

  hitEnter() {
    cy.focused().type('{enter}')
  }
}

const blogSearch = new BlogSearch()

describe('Blog Search', () => {
  describe('Submitting search with no results', () => {
    const input = {
      text: 'This will result in nothing',
      no_reults: 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras'
    }

    after(() => {
      cy.clearLocalStorage()
    })

    it("Given I'm on the homepage of Agi's blog", () => {
      cy.visit('/')
    })

    it("When I click on the magnifying glass in the top right corner", () => {
      blogSearch.clickSearchIcon()
    })

    it(`And I type '${input.text}' and perform the search`, () => {
      blogSearch.typeSearchText(input.text)
      blogSearch.hitEnter()
    })

    it(`Then I should be sent to a new screen with the message '${input.no_reults}'`, () => {
      blogSearch.elements.searchWithoutResult().should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    })
  })

  describe('Submitting search with valid results', () => {
    const input = {
      text: 'Agibank',
    }

    after(() => {
      cy.clearLocalStorage()
    })

    it("Given I'm on the homepage of Agi's blog", () => {
      cy.visit('/')
    })

    it("When I click on the magnifying glass in the top right corner", () => {
      blogSearch.clickSearchIcon()
    })

    it(`And I type '${input.text}' and perform the search`, () => {
      blogSearch.typeSearchText(input.text)
      blogSearch.hitEnter()
    })

    it('Then I should be sent to a new screen with several articles mentioning Agibank', () => {
      blogSearch.elements.searchWithResults().should('have.length.of.at.least', 1)
      blogSearch.elements.searchWithResults().should('contain.text', 'Agibank')
    })
  })
  
})