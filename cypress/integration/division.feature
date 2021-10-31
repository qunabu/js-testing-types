Feature: Divider main functionality

    I want to divide two numbers in the app

    @focus
    Scenario: Valid dividing number
        Given I open http://localhost:3000 page
        Then I see "Dummy divider"
        When I put "3" into dividend field and "2" into divider field
        Then I see "1.5" in result field and "1" into modulo field

    Scenario: invalid dividing number
        Given I open http://localhost:3000 page
        Then I see "Dummy divider"
        When I put "3" into dividend field and "0" into divider field
        Then I see "🤬" in result field and "🤬" into modulo field

