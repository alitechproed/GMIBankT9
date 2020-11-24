package gmibank.stepdefinitions;

import gmibank.pages.Gulser_Pages_US_04_05;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class Gulser_Step_US_04_05 {
   Gulser_Pages_US_04_05 gulser_pages_us_04_05 = new Gulser_Pages_US_04_05();
    @Given("user is on the gmiBank page")
    public void user_is_on_the_gmiBank_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }

    @Given("Click on the login")
    public void click_on_the_login() {
        gulser_pages_us_04_05.loginButton.click();
    }

    @Given("Click on the sign in")
    public void click_on_the_sign_in() {
      gulser_pages_us_04_05.sigIn.click();

    }

    @Given("User should be valid username")
    public void user_should_be_valid_username() {
        gulser_pages_us_04_05.username.sendKeys(ConfigurationReader.getProperty("userName"));

    }

    @Given("User should be valid password")
    public void user_should_be_valid_password() {
        gulser_pages_us_04_05.password.sendKeys(ConfigurationReader.getProperty("password"));

    }

    @Given("User click sing in button")
    public void user_click_sing_in_button() {
        gulser_pages_us_04_05.sigIn.click();
    }

    @Then("Then I should not see the eror message")
    public void then_I_should_not_see_the_eror_message() {
       // Assert.assertFalse(gulser_pages_us_04_05.errorMessage.getText().contains("Failed to sign in! Please check your credentials and try again."));

    }

    @Given("Click on the cancel")
    public void click_on_the_cancel() {
        gulser_pages_us_04_05.cancel.click();
    }

    @Then("User should be see Home    Given something..")
    public void user_should_be_see_Home_Given_something() {
        Assert.assertEquals(gulser_pages_us_04_05.homeHeader.getText(),"Home");
    }

}
