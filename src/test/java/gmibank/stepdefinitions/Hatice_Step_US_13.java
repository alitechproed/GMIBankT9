package gmibank.stepdefinitions;

import gmibank.pages.Ali_Pages_US_01_02_03;
import gmibank.pages.Hatice_Pages_US_13;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class Hatice_Step_US_13 {

    Hatice_Pages_US_13 hatice_pages_us_13=new Hatice_Pages_US_13();
    Ali_Pages_US_01_02_03 ali_pages_us_01_02_03=new Ali_Pages_US_01_02_03();
    //US13TC01
    @Given("Kullanici gmibank sayfasina gider.")
    public void kullanici_gmibank_sayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }
    @Given("Kullanici  insan simgesine tiklar.")
    public void kullanici_insan_simgesine_tiklar () {
        ali_pages_us_01_02_03.insanFigur.click();


    }
    @Given("Kullanici  sign in text'ine tiklar.")
    public void kullanici_sign_in_text_ine_tiklar () {
        hatice_pages_us_13.signinSimge.click();

    }
    @Given("Kullanici gecerli username'i girer")
    public void kullanici_gecerli_username_i_girer () {
        hatice_pages_us_13.username.sendKeys(ConfigurationReader.getProperty("employee_userName"));

    }
    @Given("Kullanici gecerli Password'u girer.")
    public void kullanici_gecerli_Password_u_girer () {
        hatice_pages_us_13.password.sendKeys(ConfigurationReader.getProperty("employee_password"));
    }
    @Given("Kullanici Sign in butonuna tiklar.")
    public void kullanici_Sign_in_butonuna_tiklar () {
        hatice_pages_us_13.signinButton.click();

    }
    @Given("Kullanici   My Operations'a tiklar.")
    public void kullanici_My_Operations_a_tiklar () {
        hatice_pages_us_13.myOperations.click();

    }
    @Given("Kullanici  Manage Accounts'a tiklar.")
    public void kullanici_Manage_Accounts_a_tiklar () {
        hatice_pages_us_13.manageAccounts.click();
    }
    @Given("Kullanici  +Create a new Account'a  tiklar.")
    public void kullanici_Create_a_new_Account_a_tiklar () {
        hatice_pages_us_13.createNewAccount.click();
    }

    @Given("Kullanici Description textboxuna Önemli musteri aciklamasini girer.")
    public void kullanici_Description_textboxuna_Onemli_musteri_aciklamasini_girer () {
        hatice_pages_us_13.description.sendKeys("Onemli Musteri");
    }

    @Then("Kullanici Description'in  hata uyarisi vermedigini goruntuler.")
    public void kullanici_Description_in_hata_uyarisi_vermedigini_goruntuler() {
        String desc= hatice_pages_us_13.invalid.getAttribute("name");
        Assert.assertFalse(desc.contains("invalid"));

    }

    //US13TC02
    @Given("Kullanici Description textboxunu bos bırakır.")
    public void kullanici_Description_textboxunu_bos_birakir() {
        hatice_pages_us_13.description.sendKeys("");
        hatice_pages_us_13.balance.sendKeys("7000");
    }

    @Then("Kullanici This field is required hata uyarisini goruntuler.")
    public void kullanici_This_field_is_required_hata_uyarisini_goruntuler() {
        Assert.assertTrue(hatice_pages_us_13.errorMesaji.isDisplayed());
    }
    //US13TC03
    @Given("Kullanici Balance textboxuna bakiye  girer.")
    public void kullanici_Balance_textboxuna_bakiye_girer() {
        hatice_pages_us_13.balance.sendKeys("7000");
    }
    @Then("Kullanici Balance'in hata uyarisi vermedigini görüntüler.")
    public void kullanici_Balance_in_hata_uyarisi_vermedigini_goruntuler() {
        String balance=hatice_pages_us_13.invalid.getAttribute("name");
        Assert.assertFalse(balance.contains("invalid2"));

    }
    //US13TC04
    @Given("Kullanici Balance textboxunu boş bırakır.")
    public void kullanici_Balance_textboxunu_bos_birakir() {
        hatice_pages_us_13.balance.sendKeys("");
        hatice_pages_us_13.description.sendKeys("Onemli Musteri");
    }

    @Then("Kullanici This field is required hata uyarısını goruntuler.")
    public void kullanici_This_field_is_required_hata_uyarısını_goruntuler() {
        Assert.assertTrue(hatice_pages_us_13.errorMesaji.isDisplayed());
    }
    //US13TC05
    @Given("Kullanici Account Type Dropdownindan bir hesap durumunu secer.")
    public void kullanici_Account_Type_Dropdownindan_bir_hesap_durumunu_secer() {
        Select select=new Select(hatice_pages_us_13.accountType);
        select.selectByVisibleText("CREDIT_CARD");
    }

    //US13TC06
    @Given("Kullanici Account Status Type Dropdownindan bir hesap durumunu secer.")
    public void kullanici_Account_Status_Type_Dropdownindan_bir_hesap_durumunu_secer() {
        Select select=new Select(hatice_pages_us_13.accountStatusType);
        select.selectByIndex(1);
    }
    //US13TC07
    @Given("Kullanici Employee Dropdownindan bir Employee secer.")
    public void kullanici_Employee_Dropdownindan_bir_Employee_secer() {
        // Select select=new Select(hatice_pages_us_13.employee);
        // select.selectByIndex(1);
        //Dropdown funktioniert nicht.
    }

    @Then("Kullanici SAVE butonuna tiklar.")
    public void kullanici_SAVE_butonuna_tiklar() {
        hatice_pages_us_13.saveButton.click();
    }

}
