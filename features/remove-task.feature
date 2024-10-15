Feature: remove the todo task
  As a user
  I need to remove the todo task in the app

  Background:
    Given I have the exist task already

  Scenario: Remove the task successful
    Given I am on the home page
    When I click the delete button icon
    Then The task will be remove in the todo list
