Feature: Blog Search

    Scenario: Submitting search with no results
        Given I'm on the homepage of Agi's blog
        When I click on the magnifying glass in the top right corner
        And I type “this will result in nothing” and perform the search
        Then I should be sent to a new screen with the message “Sorry, nothing was found for your search, try again with other words.”
    
    Scenario: Submitting search with valid results
        Given I'm on the homepage of Agi's blog
        When I click on the magnifying glass in the top right corner
        And I type “Agibank” and perform the search
        Then I should be sent to a new screen with several articles mentioning Agibank