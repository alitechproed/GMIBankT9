@gmaiLogin_US_004_005
Feature: gmibank Login test

  @gmibankLoginTC_001
  Scenario:Login Pozitive test
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And User should be valid username
    And User should be valid password
    And User click sing in button
    Then Then I should not see the eror message

  @gmibankLoginTC_002
  Scenario: Pozitive cancel
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And Click on the cancel
    Then  User should be see Home
#    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  @gmiBankLoginTC_003
  Scenario: Negative  username test
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And User should be invalid username
    And User should be valid password
    And User click sing in button
    Then Then i should see the error message
  @gmiBankLoginTC_004
  Scenario: Negative password test
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And User should be valid username
    And User should be invalid password
    And User click sing in button
    Then Then I should see the error message1
  @gmiBankTC_005
  Scenario: Negative username and password test
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And User should be invalid username
    And User should be invalid password
    And User click sing in button
    Then Then I should see the error message2
  @gmiBankTC_006
  Scenario: Forget password test
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And Click on the Did you forget your password?
    And provide email to checkbox
    And Click on the Reset password
    Then I should see the message reset your password
  @gmiBankLoginTC_007
  Scenario: New Registration
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And Click on the You don't have an account yet? Register a new account
    Then User should be see Registration