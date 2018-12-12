@navigationMenu @d @t 

Feature: Testing the navigation menu of Coolblue home page

  I want to check the elements on Coolblue home page navigation menu

@navm01
  Scenario Outline:: hover on navigation menu elements
    Given navigate to coolblue home page
    When the user hover on <title_number>
    Then the user can see a drowp menu

Examples:
|    title_number              |
|      0                |
|      1                |
# |      2                |
# |      3                |
# |      4                |
# |      5                |
# |      6                |
# |      7                |
# |      8                |
# |      9                |