package gmibank.stepdefinitions;

import gmibank.pages.Eyup_US012_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Calendar;
import java.util.TimeZone;

public class Eyup_US012_StepDefinitions {

    Eyup_US012_Page eyup_us012_page = new Eyup_US012_Page();

    // TC_01
    @Given("Kullanici GmiBank sayfasina baglanir")
    public void kullanici_GmiBank_sayfasina_baglanir() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
    }

    @Given("kullanici Sag uste bulunan insan simgesine tiklar")
    public void kullanici_Sag_uste_bulunan_insan_simgesine_tiklar() {

        eyup_us012_page.sagIkon.click();

       // WebElement sagButton = Driver.getDriver().findElement(By.id("account-menu"));
       // sagButton.click();
    }

    @Given("kullanici Acilan menude sign in text ine tiklar")
    public void kullanici_Acilan_menude_sign_in_text_ine_tiklar() {

        eyup_us012_page.signInText.click();

     //   WebElement signIn = Driver.getDriver().findElement(By.id("login-item"));
     //   signIn.click();
    }

    @Given("kullanici acilan menude User Name textbox'a User Name yazilacak")
    public void kullanici_acilan_menude_User_Name_textbox_a_User_Name_yazilacak() {
        eyup_us012_page.userName.sendKeys(ConfigurationReader.getProperty("userName"));
    }

    @Given("kullanici Password  textbox'a Password yazilacak")
    public void kullanici_Password_textbox_a_Password_yazilacak() {
        eyup_us012_page.password.sendKeys(ConfigurationReader.getProperty("password"));
    }

    @Given("Sign in butonu tiklanacak")
    public void sign_in_butonu_tiklanacak() {
        eyup_us012_page.signIn.click();
    }

    @Given("Ana sayfada Menu seceneklerinde My Operation tiklanacak")
    public void ana_sayfada_Menu_seceneklerinde_My_Operation_tiklanacak() {
        eyup_us012_page.myOperation.click();
    }

    @Given("Acilan menude Manage Customer tiklanacak")
    public void acilan_menude_Manage_Customer_tiklanacak() {
        eyup_us012_page.manageCustomer.click();
    }

    @Then("Acilan menude musteri bilgilerini goruntuler")
    public void acilan_menude_musteri_bilgilerini_goruntuler() {
      //  WebElement bilgiVarMi = Driver.getDriver().findElement(By.xpath("//*[@id=\"app-view-container\"]/div[1]/div/div/div/div[1]/div/table"));
      //  boolean kontrol = bilgiVarMi.isDisplayed();
      //  System.out.println("Bilgiler mevcut : " + kontrol);


        for (WebElement w: eyup_us012_page.bilgiler){
            System.out.println(w.getText());
        }

    }


    // TC_02
    @Given("musterilere ait View butonu goruntulenecek")
    public void musterilere_ait_View_butonu_goruntulenecek() {

        WebElement viewKontrol = Driver.getDriver().findElement(By.xpath("//*[@class='btn btn-info btn-sm']"));
        boolean viewVarMi2 = viewKontrol.isDisplayed();
        System.out.println("View Buttonu kontrolu : " + viewVarMi2);

     //  String view = eyup_us012_page.viewButtonu.getText();
     //  boolean viewVarMi = view.contains("View");
     //   Assert.assertTrue(viewVarMi);
     //   System.out.println("View Buttonu kontrolu : " + viewVarMi);
    }

    @Then("musterilere ait Edit butonu goruntulenecek")
    public void musterilere_ait_Edit_butonu_goruntulenecek() {

        // 1.yol
        Assert.assertTrue("Edit buttonu var " , eyup_us012_page.editButtonu.isDisplayed());

        //2.yol
      //  WebElement editKontrol = Driver.getDriver().findElement(By.xpath("//*[@class='btn btn-primary btn-sm']"));
      //  boolean editVarMi2 = editKontrol.isDisplayed();
      //  System.out.println("Edit Buttonu kontrolu : " + editVarMi2);


       // String edit = eyup_us012_page.editButtonu.getText();
       // boolean editVarMi = edit.contains("Edit");
       // Assert.assertTrue(editVarMi);
       // System.out.println("Edit Buttonu kontrolu : "+ editVarMi);
    }



    // TC_03
    @Then("musterilere ait Edit butonuna tiklayacak")
    public void musterilere_ait_Edit_butonuna_tiklayacak() throws InterruptedException {
        Thread.sleep(3000);
        eyup_us012_page.editButtonu.click();
        System.out.println("Edit Butonu tiklandi...");
    }


    // *********************************************
    // TC_04
    @Given("Acilan menude ID goruntulenecek")
    public void acilan_menude_ID_goruntulenecek() {
        WebElement idGoruntule = Driver.getDriver().findElement(By.xpath("//*[@name='id']"));
        boolean idVarMi = idGoruntule.isDisplayed();
        System.out.println("Id Goruntuleme Sonucu : " + idVarMi);

       // Assert.assertTrue(eyup_us012_page.id.isDisplayed());

       // boolean idVarMi = eyup_us012_page.id.isEnabled();
      //  Assert.assertTrue(idVarMi);
      //  System.out.println(idVarMi);
    }

    @Given("First Name girilecek")
    public void first_Name_girilecek() {
        eyup_us012_page.firstName.clear();
        eyup_us012_page.firstName.sendKeys(ConfigurationReader.getProperty("firstName"));

        Assert.assertTrue(eyup_us012_page.firstName.isDisplayed());
    }

    @Given("Last Name girilecek")
    public void last_Name_girilecek() {
        eyup_us012_page.lastName.clear();
        eyup_us012_page.lastName.sendKeys(ConfigurationReader.getProperty("lastName"));

        Assert.assertTrue(eyup_us012_page.lastName.isDisplayed());
    }

    @Given("Middle Initial girilecek")
    public void middle_Initial_girilecek() {
        eyup_us012_page.middleName.clear();
        eyup_us012_page.middleName.sendKeys(ConfigurationReader.getProperty("middleInitial"));

        Assert.assertTrue(eyup_us012_page.middleName.isDisplayed());
    }

    @Given("E-Mail girilecek")
    public void e_Mail_girilecek() {
        eyup_us012_page.eMail.clear();
        eyup_us012_page.eMail.sendKeys(ConfigurationReader.getProperty("eMail"));
        // @gmail.com unutulmayacak
       Assert.assertTrue(eyup_us012_page.eMail.isDisplayed());
    }

    @Given("Mobile Phone Number girilecek")
    public void mobile_Phone_Number_girilecek() {
        eyup_us012_page.mobilePhoneNumber.clear();
        eyup_us012_page.mobilePhoneNumber.sendKeys(ConfigurationReader.getProperty("mobilPhoneNumber"));
        Assert.assertTrue(eyup_us012_page.mobilePhoneNumber.isDisplayed());
    }

    @Given("Phone Number girilecek")
    public void phone_Number_girilecek() {
        eyup_us012_page.phoneNumber.clear();
        eyup_us012_page.phoneNumber.sendKeys(ConfigurationReader.getProperty("phoneNumber"));
       Assert.assertTrue(eyup_us012_page.phoneNumber.isDisplayed());
    }

    @Given("Zip Code girilecek")
    public void zip_Code_girilecek() {
        eyup_us012_page.zipCode.clear();
        eyup_us012_page.zipCode.sendKeys(ConfigurationReader.getProperty("zipCode"));
       Assert.assertTrue(eyup_us012_page.zipCode.isDisplayed());
    }

    @Given("Address girilecek")
    public void address_girilecek() {
        eyup_us012_page.address.clear();
        eyup_us012_page.address.sendKeys(ConfigurationReader.getProperty("adres"));
        Assert.assertTrue(eyup_us012_page.address.isDisplayed());
    }

    @Given("City girilecek")
    public void city_girilecek() {
        eyup_us012_page.city.clear();
        eyup_us012_page.city.sendKeys(ConfigurationReader.getProperty("city"));
        Assert.assertTrue(eyup_us012_page.city.isDisplayed());
    }

    @Given("Ssn numarasi girilecek")
    public void ssn_numarasi_girilecek() {
        eyup_us012_page.ssn.clear();
        eyup_us012_page.ssn.sendKeys(ConfigurationReader.getProperty("ssn"));
        Assert.assertTrue(eyup_us012_page.ssn.isDisplayed());
    }

    @Given("Create Date girilecek")
    public void create_Date_girilecek() throws InterruptedException {
     //  eyup_us012_page.createDate.clear();
     //  Thread.sleep(2000);

       eyup_us012_page.createDate.sendKeys("11/23/2020 01:10 PM");

      //  WebElement dropDownDate = Driver.getDriver().findElement(By.id("tp-customer-createDate"));
      //  Select select = new Select(dropDownDate);
      //  dropDownDate.clear();
      //  dropDownDate.click();
      //  dropDownDate.sendKeys( ConfigurationReader.getProperty("date"));

       // Select select = new Select(eyup_us012_page.createDate);
       // select.selectByValue("2020-02-14T07:09");
        //select.selectByValue(ConfigurationReader.getProperty("date"));


    }

    @Given("Country secilecek")
    public void country_secilecek() {

      //  eyup_us012_page.country.clear();
        WebElement dropDownCountry = Driver.getDriver().findElement(By.xpath("//*[@name='country.id']"));
       // Select select = new Select(dropDownCountry);
      //  select.selectByValue(ConfigurationReader.getProperty("country"));

        Select selectCountry = new Select(dropDownCountry);
        selectCountry.selectByVisibleText(ConfigurationReader.getProperty("country"));
    }

    @Given("State girilecek")
    public void state_girilecek() {
        eyup_us012_page.state.clear();
        eyup_us012_page.state.sendKeys(ConfigurationReader.getProperty("state"));

    }

    @Given("User secilecek")
    public void user_secilecek() {
       // eyup_us012_page.userId.clear();
        WebElement dropDownUser = Driver.getDriver().findElement(By.id("tp-customer-user"));
        Select select = new Select(dropDownUser);
        //select.selectByIndex(5);

       // Select selectUser = new Select(eyup_us012_page.userId);
       // selectUser.selectByVisibleText(ConfigurationReader.getProperty("user"));
    }

    @Given("Account secilecek")
    public void account_secilecek() throws InterruptedException {
       // eyup_us012_page.account.clear();
       // Thread.sleep(2000);
       // WebElement dropDownAccount = Driver.getDriver().findElement(By.id("tp-customer-account)"));
       // Select select = new Select(dropDownAccount);
       // select.selectByIndex(3);

        //eyup_us012_page.account.sendKeys("test");
        Thread.sleep(2000);
        Select selectAccount = new Select(eyup_us012_page.account);
        selectAccount.selectByIndex(1);

    }

    @Given("Zelle Enrolled checkbox secilecek")
    public void zelle_Enrolled_checkbox_secilecek() {
        eyup_us012_page.zelleEnrolled.isDisplayed();
    }

    @Then("Save butonuna basilacak")
    public void save_butonuna_basilacak() throws InterruptedException {
        Thread.sleep(2000);
        eyup_us012_page.save.click();
        Thread.sleep(7000);
        Assert.assertTrue("Kullanici Bilgileri Edit Edildi " , eyup_us012_page.saveOnay.isDisplayed());
    }



    //**********************************************
    //TC05
    @Given("musterilere ait Delete butonuna goruntulenecek ve tiklanacak")
    public void musterilere_ait_Delete_butonuna_goruntulenecek_ve_tiklanacak() throws InterruptedException {

     //   eyup_us012_page.deleteVarMi.isDisplayed();
        Thread.sleep(2000);
        /*WebDriverWait webDriverWait = new WebDriverWait(Driver.getDriver(),10);
        webDriverWait.until(ExpectedConditions.elementToBeClickable().click();
        */
      //  ((JavascriptExecutor) Driver.getDriver()).executeScript("arguments[0].scrollIntoView(true);", eyup_us012_page.deleteVarMi);

      //  Driver.waitForInVisibility(By.xpath("//a[@class='btn btn-danger btn-sm']"),10);
      //  Driver.waitForVisibility(By.xpath("//a[@class='btn btn-danger btn-sm']"),10).click();

        Driver.clickWithJS(eyup_us012_page.deleteVarMi);

    }

    @Given("Uyari mesaji goruntulenecek")
    public void uyari_mesaji_goruntulenecek() {
       eyup_us012_page.uyariMesaji.isDisplayed();
    }

    @Given("Kullanici emin ise Delete butonuna tiklanacak")
    public void kullanici_emin_ise_Delete_butonuna_tiklanacak() throws InterruptedException {
        Thread.sleep(2000);
        eyup_us012_page.deleteButtonu.click();
       // Driver.clickWithJS(eyup_us012_page.deleteButtonu);
    }

    @Then("Userin silindigi mesaj goruntulenecek")
    public void userin_silindigi_mesaj_goruntulenecek() {

        Assert.assertTrue("Kullanici silindi!!!" , eyup_us012_page.deleteMesaji.isDisplayed());
    }
}
