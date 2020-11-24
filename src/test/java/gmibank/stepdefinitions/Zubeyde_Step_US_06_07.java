package gmibank.stepdefinitions;

import gmibank.pages.Zubeyde_Pages_US_06_07;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


public class Zubeyde_Step_US_06_07 {

    Zubeyde_Pages_US_06_07 info = new Zubeyde_Pages_US_06_07();

    //@US_06_TC_01
    @Given("GMIBank sayfasina gider")
    public void gmibank_sayfasina_gider() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }

    @Given("Ana sayfada sag ustte ikona tiklar")
    public void ana_sayfada_sag_ustte_ikona_tiklar() {
        info.ikonButton.click();

    }

    @Given("SignInText buttonuna tiklar")
    public void signintext_buttonuna_tiklar() throws InterruptedException {
        info.SignIn1.click();
        Thread.sleep(2000);

    }

    @Given("UserName ve password girer")
    public void username_ve_password_girer() {
    info.userTextbox.sendKeys(ConfigurationReader.getProperty("user_username_zu"));
    info.passwordTextbox.sendKeys(ConfigurationReader.getProperty("user_password_zu"));

    }

    @Given("SignIn buttonuna tiklar")
    public void signin_buttonuna_tiklar() {
        info.signInButton.click();

    }

    @Given("User user buttonuna tiklar")
    public void user_user_buttonuna_tiklar() {
        info.ikonButton.click();

    }

    @Given("User info secenegini tiklar")
    public void user_info_secenegini_tiklar() {
        info.userInfoButton.click();

    }

    @Then("FirstName {string} oldugunu dogrular")
    public void firstname_oldugunu_dogrular(String expectedFirstName) {

        String actualFirstName =  info.firstNameTextBox.getAttribute("value");
        System.out.println(actualFirstName);
        Assert.assertEquals(expectedFirstName,actualFirstName);
    }



    @Then("LastName {string} oldugunu dogrular")
    public void lastname_oldugunu_dogrular(String expectedLastName) {
        String actualLastName =  info.lastNameTextBox.getAttribute("value");
        System.out.println(actualLastName);
        Assert.assertEquals(expectedLastName,actualLastName);
    }

    @Then("Email {string} oldugunu dogrular")
    public void email_oldugunu_dogrular(String expectedEmail) {
        String actualEmail =  info.emailTextBox.getAttribute("value");
        System.out.println(actualEmail);
        Assert.assertEquals(expectedEmail,actualEmail);
    }

    @Then("Language {string} secilmis oldugunu dogrular")
    public void language_secilmis_oldugunu_dogrular(String expectedLangue) {
        Select selectLangue = new Select(info.diller);
        String actualfirstLangue =  selectLangue.getFirstSelectedOption().getText();
        System.out.println(expectedLangue);
        Assert.assertEquals("English",actualfirstLangue);

    }
////////////////////////************************************//////////////////////////////////

  // @US_06_TC_02
    @Then("ingilizce && Turkce dilllerinin var oldugunu dogrular")
    public void ingilizce_Turkce_dilllerinin_var_oldugunu_dogrular(String expectedLanguage) {

        Select options = new Select(info.diller);
        System.out.println("all of languages :"+ options.getOptions());
        options.selectByIndex(0);
//        options.selectByIndex(1);
       boolean flag = false;
      for (WebElement language : options.getOptions()) {
           if (language.getText().equals("English")) {
               System.out.println("languagedropdown has English");

           } else {
                System.out.println("languagedropdown has Turkish");
                flag = true;
              break;
           }
        }



       // info.langueDropdown.isDisplayed();
       // Select selectLangue = new Select(info.langueDropdown);
       // List<WebElement> dropdown = selectLangue.getAllSelectedOptions();

       // System.out.println(dropdown);
       // Assert.assertEquals(expectedLanguage,dropdown);
    }

//////////////////////************************************///////////////////////////////////////

    // @US_06_TC_03
    @Given("FirstName textboxina tiklar")
    public void firstname_textboxina_tiklar() {
       info.firstNameTextBox.click();
    }

    @Given("FirstName textboxini siler")
    public void firstname_textboxini_siler() {
        info.firstNameTextBox.clear();
    }

    @Given("FirstName textboxina girer")
    public void firstname_textboxina_girer() {
       info.firstNameTextBox.sendKeys("Isim");
    }

    @Then("FirstName'in {string} oldugunu dogrular")
    public void firstname_in_oldugunu_dogrular(String expectedFirstName) {
        String actualFirstName =  info.firstNameTextBox.getAttribute("value");
        System.out.println(actualFirstName);
        Assert.assertEquals(expectedFirstName,actualFirstName);

    }

    //////////////////////************************************///////////////////////////////////////

   // @US_06_TC_04
    @Given("LastName textboxina tiklar")
    public void lastname_textboxina_tiklar() {
    info.lastNameTextBox.click();
    }


    @Given("LastName textboxini siler")
    public void lastname_textboxini_siler() {
    info.lastNameTextBox.clear();
    }

    @Given("LastName textboxina girer")
    public void lastname_textboxina_girer() {
    info.lastNameTextBox.sendKeys("SoyIsim");

    }

    @Then("LastName'in {string} oldugunu dogrular")
    public void lastname_in_oldugunu_dogrular(String expectedLastName) {
        String actualLastName =  info.lastNameTextBox.getAttribute("value");
        System.out.println(actualLastName);
        Assert.assertEquals(expectedLastName,actualLastName);

    }

    //////////////////////************************************///////////////////////////////////////

    // @US_06_TC_05
    @Given("Email textboxina tiklar")
    public void email_textboxina_tiklar() {
    info.emailTextBox.click();
    }

    @Given("Email textboxini siler")
    public void email_textboxini_siler() {
    info.emailTextBox.clear();
    }

    @Given("Email textboxina {string} karakteri ve {string} uzantisi ile yazar")
    public void email_textboxina_karakteri_ve_uzantisi_ile_yazar(String ecpectedCharacter1, String ecpectedCharacter2) {
        info.emailTextBox.sendKeys("New@gmail",".com");

    }

    @Given("Save buttonuna tiklar")
    public void save_buttonuna_tiklar() {
    info.saveButton.click();

    }

  //////////////////////************************************///////////////////////////////////////

    // @US_07_TC_01  Negative Test

    @Given("Email texboxina sadece rakam ve harf girer")
    public void email_texboxina_sadece_rakam_ve_harf_girer() {
    info.emailTextBox.clear();
    info.emailTextBox.sendKeys("123abc");
    info.saveButton.click();
    }

    @Then("{string} mesaji gorur")
    public void mesaji_gorur(String ecpectedMesaj) {
    String actualMessaj = info.errorMessage.getText();
    Assert.assertEquals(actualMessaj,ecpectedMesaj);

    }

    @When("Email textboxina {string}  karakteri ve {string} uzantisi girilmeyince")
    public void email_textboxina_karakteri_ve_uzantisi_girilmeyince() {
    Assert.assertFalse(info.emailTextBox.getText().contains("@"));
    Assert.assertFalse(info.emailTextBox.getText().contains(".com"));

    }

    //////////////////////************************************///////////////////////////////////////
    // @US_07_TC_02

    @Then("Sadece Ingilizce ve Turkce dil secenekleri gorulur")
    public void sadece_Ingilizce_ve_Turkce_dil_secenekleri_gorulur(String expectedLanguage) {
        Select selectLangue = new Select(info.diller);
        List<WebElement> dropdown = selectLangue.getAllSelectedOptions();
        System.out.println(dropdown);


    }


}
