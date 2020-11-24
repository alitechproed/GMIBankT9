$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Gulser_US_04_05.feature");
formatter.feature({
  "name": "gmibank Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmaiLogin_US_004"
    }
  ]
});
formatter.background({
  "name": "TC_004 gmibank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Go to login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_004 gmibank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Pozitive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004"
    },
    {
      "name": "@gmibankLoginTC_001"
    }
  ]
});
formatter.step({
  "name": "User should be valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_click_sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the eror message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.then_I_should_not_see_the_eror_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_004 gmibank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Pozitive cancel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004"
    },
    {
      "name": "@gmibankLoginTC_002"
    }
  ]
});
formatter.step({
  "name": "Click on the cancel",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be see Home    Given something..",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_see_Home_Given_something()"
});
formatter.result({
  "status": "passed"
});
});