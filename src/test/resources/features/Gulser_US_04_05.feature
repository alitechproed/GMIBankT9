@gmaiLogin_US_004
Feature: gmibank Login
  Background: TC_004 gmibank login Test
  Scenario: Go to login page
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
  @gmibankLoginTC_001
  Scenario: Pozitive
    And User should be valid username
    And User should be valid password
    And User click sing in button
    Then Then I should not see the eror message
  @gmibankLoginTC_002
  Scenario: Pozitive cancel
    And Click on the cancel
    Then  User should be see Home    Given something..