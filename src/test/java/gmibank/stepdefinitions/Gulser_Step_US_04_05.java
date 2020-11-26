package gmibank.stepdefinitions;

import gmibank.pages.Gulser_pages_US_04_05;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

public class Gulser_Step_US_04_05 {
    Gulser_pages_US_04_05 gulser_pages_us_04_05 = new Gulser_pages_US_04_05();


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
        gulser_pages_us_04_05.signInButton.click();
    }

    @Given("User should be valid username")
    public void user_should_be_valid_username() {
        gulser_pages_us_04_05.username.sendKeys(ConfigurationReader.getProperty("employee_userName"));
    }

    @Given("User should be valid password")
    public void user_should_be_valid_password() {
        gulser_pages_us_04_05.username.sendKeys(ConfigurationReader.getProperty("employee_password"));
    }

    @Given("User click sing in button")
    public void user_click_sing_in_button() {
        gulser_pages_us_04_05.sigIn.click();
    }

    @Then("Then I should not see the eror message")
    public void then_I_should_not_see_the_eror_message() {
        Assert.assertFalse(gulser_pages_us_04_05.errorMessage.getText().contains("Failed to sign in! Please check your credentials and try again."));
    }

    @Given("Click on the cancel")
    public void click_on_the_cancel() {
      gulser_pages_us_04_05.cancel.click();
    }

    @Then("User should be see Home")
    public void user_should_be_see_Home() {
        Assert.assertEquals(gulser_pages_us_04_05.homeHeader.getText(),"Home");
    }

    @Given("User should be invalid username")
    public void user_should_be_invalid_username() {
      gulser_pages_us_04_05.username.sendKeys(ConfigurationReader.getProperty("gecersiz_username"));
    }

    @Then("Then i should see the error message")
    public void then_i_should_see_the_error_message() {
      Driver.waitForVisibility(gulser_pages_us_04_05.errorMessage,5);
    }

    @Given("User should be invalid password")
    public void user_should_be_invalid_password() {
        gulser_pages_us_04_05.username.sendKeys(ConfigurationReader.getProperty("gecersiz_password"));
    }

    @Then("Then I should see the error message1")
    public void then_I_should_see_the_error_message1() {
        Driver.waitForVisibility(gulser_pages_us_04_05.errorMessage,5);
    }

    @Then("Then I should see the error message2")
    public void then_I_should_see_the_error_message2() {
        Driver.waitForVisibility(gulser_pages_us_04_05.errorMessage,5);
    }

    @Given("Click on the Did you forget your password?")
    public void click_on_the_Did_you_forget_your_password() {
        Actions actions = new Actions(Driver.getDriver());
        actions.click(gulser_pages_us_04_05.passwordForget).build().perform();
       gulser_pages_us_04_05.passwordForget.click();
      // gulser_pages_us_04_05.passwordForget.click();
        //Driver.waitForClickablility(gulser_pages_us_04_05.passwordForget,5);
    }
    @Given("provide email to checkbox")
    public void provide_email_to_checkbox() {
       gulser_pages_us_04_05.emailCheckBox.sendKeys(ConfigurationReader.getProperty("gmi_reset_email"));
    }

    @Given("Click on the Reset password")
    public void click_on_the_Reset_password() {
        gulser_pages_us_04_05.resetPassword.click();
    }

    @Then("I should see the message reset your password")
    public void i_should_see_the_message_reset_your_password() {
       Assert.assertTrue(gulser_pages_us_04_05.resetPasswordAlert.isDisplayed());
    }

    @Given("Click on the You don't have an account yet? Register a new account")
    public void click_on_the_You_don_t_have_an_account_yet_Register_a_new_account() {
        Actions actions = new Actions(Driver.getDriver());
        actions.click(gulser_pages_us_04_05.registerNewAcount).build().perform();
        gulser_pages_us_04_05.registerNewAcount.click();
    }

    @Then("User should be see Registration")
    public void user_should_be_see_Registration() {
        Assert.assertEquals(gulser_pages_us_04_05.verifyRegistration.getText(),"Registration");
    }






}
