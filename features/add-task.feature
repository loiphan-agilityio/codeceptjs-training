Feature: add the todo task
  As a user
  I need to add the todo task in the app

  Scenario: Add the task successful
    Given I am on the home page
    When I type the name of the task
    And Click Enter
    Then The task will be show in the todo list
