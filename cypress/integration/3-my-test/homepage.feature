Feature: Homepage

  Scenario: Open the homepage and check the title
    Given I open the website
    Then I see "Vite App" in the title

  Scenario: Open the homepage and see correct header text
    Given I open the website
    Then I see "Hello Vite + React!"

  Scenario: Open the homepage and see correct footer text
    Given I open the website
    Then I see "Edit App.tsx and save to test HMR updates."

  Scenario: Open the homepage and see correct text in count button
    Given I open the website
    Then I see "count is: 0" on "plus-btn" button

  Scenario: Open the homepage and check the count
    Given I open the website
    When I click on "plus-btn" button 3 times
    Then I see "count is: 3" on "plus-btn" button
    Then I don't see "count is: 2" on "plus-btn" button

