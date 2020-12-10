package gmibank.stepdefinitions;
import gmibank.pages.HakanPages_9_10_11;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;
import static gmibank.utilities.Driver.getDriver;
import static gmibank.utilities.Driver.getElementsText;
public class HakanStep_US_9_10_11 {
    HakanPages_9_10_11 hakanPages_9_10_11 =new HakanPages_9_10_11();
    @Given("Kullanici gmibank anasayfasina gider")
    public void kullanici_gmibank_anasayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
    }
    @Given("Kullanici sag ust kosede bulunan insan simgesine tiklar")
    public void kullanici_sag_ust_kosede_bulunan_insan_simgesine_tiklar() {
        hakanPages_9_10_11.insanResmi.click();
    }
    @Given("Kullanici Sign In textine tiklar")
    public void kullanici_Sign_In_Textine_tiklar() {
        hakanPages_9_10_11.sigInText.click();
    }
    @Given("Kullanici User Name kutusuna bir {string} girer")
    public void kullanici_User_Name_kutusuna_bir_girer(String string) {
        hakanPages_9_10_11.userNameButonu.sendKeys(ConfigurationReader.getProperty("userName"));
    }
    @Given("Kullanici Password kutusuna bir {string} girer")
    public void kullanici_Password_kutusuna_bir_girer(String string) {
        hakanPages_9_10_11.passwordKutusu.sendKeys(ConfigurationReader.getProperty("password"));
    }
    @Then("Kullanici Sign In butonuna tiklar")
    public void kullanici_Sign_In_butonuna_tiklar() throws InterruptedException {
       // Thread.sleep(2000);
        hakanPages_9_10_11.signInButonu.click();
    }
    @Given("Kullanici My Operations butonuna tiklar")
    public void kullanici_My_Operations_butonuna_tiklar() {
        hakanPages_9_10_11.myOperationButonu.click();
    }
    @Given("Kullanici Manage Customer yazisina tiklar")
    public void kullanici_Manage_Customer_yazisina_tiklar() {
        hakanPages_9_10_11.manageCustomerButonu.click();
    }
    @Given("Kullanici Create a new Customer butonuna tiklar")
    public void kullanici_Create_a_new_Customer_butonuna_tiklar() {
        hakanPages_9_10_11.creatNewCustomer.click();
    }
    @Given("Kullanici gecerli bir SSN numarasi girer ve tiklar")
    public void kullanici_gecerli_bir_SSN_numarasi_girer_ve_tiklar() throws InterruptedException {
        hakanPages_9_10_11.ssnAramaKutusu.sendKeys("123-23-1234");
        hakanPages_9_10_11.searchButonu.click();

    }
    @Then("Kullanici pop-up gorur")
    public void kullanici_pop_up_gorur() {
        hakanPages_9_10_11.popUpMesaj.isDisplayed();
    }
    @Given("Kullanici First Name kutusuna first name girer")
    public void kullanici_First_Name_kutusuna_first_name_girer() throws InterruptedException {
        Thread.sleep(7000);
        hakanPages_9_10_11.firstNameCustomer.clear();
        hakanPages_9_10_11.firstNameCustomer.sendKeys(ConfigurationReader.getProperty("firstNameHakan"));
    }
    @Given("Kullanici Last Name kutusuna {string} girer")
    public void kullanici_Last_Name_kutusuna_girer(String string) {
        hakanPages_9_10_11.lastNameCustomer.clear();
        hakanPages_9_10_11.lastNameCustomer.sendKeys(ConfigurationReader.getProperty("lastNameHakan"));
    }
    @Given("Kullanici Middle Initial kutusuna {string} girer")
    public void kullanici_Middle_Initial_kutusuna_girer(String string) {
        hakanPages_9_10_11.lastNameCustomer.clear();
        hakanPages_9_10_11.middleInitialCustomer.sendKeys("A");
    }
    @Given("Kullanici Email kutusuna {string} girer")
    public void kullanici_Email_kutusuna_girer(String string) {
        hakanPages_9_10_11.emailCustomer.sendKeys("deneme@gmail.com");
    }
    @Given("Kullanici  Mobile Phone Number kutusuna  {string} girer")
    public void kullanici_Mobile_Phone_Number_kutusuna_girer(String string) {
        hakanPages_9_10_11.mobilePhoneNumberCustomer.sendKeys("706-606-7777");
    }
    @Given("Kullanici Phone Number kutusuna  {string} girer")
    public void kullanici_Phone_Number_kutusuna_girer(String string) {
        hakanPages_9_10_11.zipCodeCustomer.sendKeys("123-456-7891");
    }
    @Given("Kullanici  Zip Code kutusuna  {string} girer")
    public void kullanici_Zip_Code_kutusuna_girer(String string) {
        hakanPages_9_10_11.zipCodeCustomer.sendKeys("45000");
    }
    @Given("Kullanici Address kutusuna {string}")
    public void kullanici_Address_kutusuna(String string) {
        hakanPages_9_10_11.addressCustomer.sendKeys("11011 edge park st");
    }
    @Given("Kullanici City kutusuna {string} girer")
    public void kullanici_City_kutusuna_girer(String string) {
        hakanPages_9_10_11.cityCustomer.sendKeys("Amsterdam");
    }
    @Given("Kullanici SSN kutusuna {string} girer")
    public void kullanici_SSN_kutusuna_girer(String string) {
        hakanPages_9_10_11.ssnCustomer.sendKeys("123-23-4321");
    }
    @Given("Kullanici Create Date kutusuna {string} girer")
    public void kullanici_Create_Date_kutusuna_girer(String string) {
       hakanPages_9_10_11.createDateCustomer.sendKeys("11/26/2020 07:10 PM");
    }
    @Given("Kullanici Country kutusuna {string} girer")
    public void kullanici_Country_kutusuna_girer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici State kutusuna {string} girer")
    public void kullanici_State_kutusuna_girer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici User kutusundan {string} secer")
    public void kullanici_User_kutusundan_secer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici {string} dropdown icerisindeki hesaplardan bir {string} secer")
    public void kullanici_dropdown_icerisindeki_hesaplardan_bir_secer(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici Zelle Enrolled kutucugunu isaretler")
    public void kullanici_Zelle_Enrolled_kutucugunu_isaretler() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Kullanici Save butonu ile kayit yapar.")
    public void kullanici_Save_butonu_ile_kayit_yapar() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici adres kutucuguna {string} girer")
    public void kullanici_adres_kutucuguna_girer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Adres kutucugunun bos olmadigini gorur")
    public void adres_kutucugunun_bos_olmadigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici city kutucuguna {string} girer")
    public void kullanici_city_kutucuguna_girer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("City kutucugunun bos olmadigini gorur")
    public void city_kutucugunun_bos_olmadigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici country kutucuguna {string} girer")
    public void kullanici_country_kutucuguna_girer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Country kutucugunun bos olmadigini gorur")
    public void country_kutucugunun_bos_olmadigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici state kutucugunda bir {string} secer")
    public void kullanici_state_kutucugunda_bir_secer(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("State kutucugunun bos olmadigini gorur")
    public void state_kutucugunun_bos_olmadigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Date kismina customer creat date den {string} girilmeli")
    public void date_kismina_customer_creat_date_den_girilmeli(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Acilan pop-up da {string} yazisi gorulur")
    public void acilan_pop_up_da_yazisi_gorulur(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Creat Date kismi {string} olarak girilir")
    public void creat_Date_kismi_olarak_girilir(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Pop Up olatrak {string} mesaji gorulmeli")
    public void pop_Up_olatrak_mesaji_gorulmeli(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Creat Date kismina {string} ve {string} olarak girilmeli")
    public void creat_Date_kismina_ve_olarak_girilmeli(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("{string} mesaji gorulmeli")
    public void mesaji_gorulmeli(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici User kutucugun gider")
    public void kullanici_User_kutucugun_gider() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici User kutucugunun bos olmadigini gorur")
    public void kullanici_User_kutucugunun_bos_olmadigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Given("Kullanici Account kutucugundaki accountlardan birini secer")
    public void kullanici_Account_kutucugundaki_accountlardan_birini_secer() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Kullanici Zelle Enrolled kutucuguna tikladigini gorur.")
    public void kullanici_Zelle_Enrolled_kutucuguna_tikladigini_gorur() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
