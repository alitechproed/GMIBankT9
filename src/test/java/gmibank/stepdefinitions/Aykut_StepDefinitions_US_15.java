package gmibank.stepdefinitions;

import gmibank.pages.Aykut_Pages_US_15;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class Aykut_StepDefinitions_US_15 {
    Aykut_Pages_US_15 aykut_pages_us_15=new Aykut_Pages_US_15();
    @Given("Kullanici gmibank adresine gider")
    public void kullanici_gmibank_adresine_gider() {
        Driver.getDriver().get(" http://gmibank.com/");

    }

    @Given("Kullanici “Sign in” butonuna tiklar")
    public void kullanici_Sign_in_butonuna_tiklar() {
        aykut_pages_us_15.signin.click();
    }

    @Given("Kullanici “Username” username girer,“Password” kutusuna password girer,“Sign in” butonuna tiklar")
    public void kullanici_Username_username_girer_Password_kutusuna_password_girer_Sign_in_butonuna_tiklar() {
        aykut_pages_us_15.username.sendKeys(ConfigurationReader.getProperty("employee_userName"));
        aykut_pages_us_15.password.sendKeys(ConfigurationReader.getProperty("employee_password"));
        aykut_pages_us_15.signinButonu.click();

    }

    @Given("Kullanici “My Operations” a tiklar")
    public void kullanici_My_Operations_a_tiklar() {
        aykut_pages_us_15.myoperation.click();

    }

    @Given("Kullanici acilan menuden Manage Accounts linkine tiklar")
    public void kullanici_acilan_menuden_Manage_Accounts_linkine_tiklar() {
        aykut_pages_us_15.manegeaccount.click();

    }

    @Then("Balance nin gorunurlugunu kontrol eder.")
    public void balance_nin_gorunurlugunu_kontrol_eder() {
        String text=aykut_pages_us_15.balance.getText();
        System.out.println(text);
        Assert.assertTrue(text.contains("Balance"));

    }
    @Then("Account Types nin gorunurlugunu kontrol eder.")
    public void account_Types_nin_gorunurlugunu_kontrol_eder() {
        String textA=aykut_pages_us_15.accounttypes.getText();
        System.out.println(textA);
        Assert.assertTrue(textA.contains("Account Type"));
    }
    @Given("Kullanici “View” a tiklar")
    public void kullanici_View_a_tiklar() {
        aykut_pages_us_15.view.click();

    }

    @Then("Islemin gorundugunu kontrol eder")
    public void islemin_gorundugunu_kontrol_eder() {
        String textB=aykut_pages_us_15.islem.getText();
        System.out.println(textB);
        Assert.assertTrue(textB.contains("Account []"));

    }



}
