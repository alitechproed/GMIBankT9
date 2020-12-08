package gmibank.stepdefinitions;

import gmibank.pages.Zeynep_Pages_US_08_14;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.poi.ss.formula.functions.T;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Zeynep_Step_US_08_14 {

    Zeynep_Pages_US_08_14 zeynep_pages_us_08_14 = new Zeynep_Pages_US_08_14();

       //US08TC01
    @Given("Kullanici gmibank adresine gider")
    public void kullanici_gmibank_adresine_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @Given("Kullanici sag ust kosedeki ok'a tiklar")
    public void kullanici_sag_ust_kosedeki_ok_a_tiklar() {
        zeynep_pages_us_08_14.loginButton.click();
    }
    @Given("Kullanici acilan menude Sign in'e tiklar")
    public void kullanici_acilan_menude_Sign_in_e_tiklar() {
        zeynep_pages_us_08_14.signInButton.click();

    }
    @Given("Kullanici  username ve passwordu girer")
    public void kullanici_username_ve_passwordu_girer() {
        zeynep_pages_us_08_14.username.sendKeys(ConfigurationReader.getProperty("Username"));
        zeynep_pages_us_08_14.password.sendKeys(ConfigurationReader.getProperty("Password"));

    }
    @Given("kullanici Sign in'e tiklar")
    public void kullanici_Sign_in_e_tiklar() throws InterruptedException {
        zeynep_pages_us_08_14.sigIn.click();
        Thread.sleep(2000);
       // Driver.clickWithJS();click yaptirmak icin
    }

    @Given("Kullanici  sag ust kosedeki isim soyisim'e tiklar")
    public void kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar() {
        zeynep_pages_us_08_14.isimSoyisim.click();
    }


    @Given("Kullanici acilan menude Password'e tiklar")
    public void kullanici_acilan_menude_Password_e_tiklar() {
        zeynep_pages_us_08_14.Password.click();

    }
    @Given("Kullanici Current password kutusuna simdiki passwordu girer")
    public void kullanici_Current_password_kutusuna_simdiki_passwordu_girer() {
        zeynep_pages_us_08_14.currentpassword.sendKeys(ConfigurationReader.getProperty("currentpassword"));

    }
    @Given("New password kutusuna en az bir buyuk harf kullanarak yeni password girer")
    public void new_password_kutusuna_en_az_bir_buyuk_harf_kullanarak_yeni_password_girer() {
        zeynep_pages_us_08_14.newpassword.sendKeys(ConfigurationReader.getProperty("newpassword"));

    }
    @Then("Kullanici Password strenght'teki turuncu rengi gorur")
    public void kullanici_Password_strenght_teki_turuncu_rengi_gorur() {
        Assert.assertTrue(zeynep_pages_us_08_14.strenghtbarorange.isDisplayed());
        zeynep_pages_us_08_14.isimSoyisim.click();
        zeynep_pages_us_08_14.Password.click();



    }
        //US08TC02
    @Given("New password kutusuna en az bir rakam kullanarak yeni password girer")
    public void new_password_kutusuna_en_az_bir_rakam_kullanarak_yeni_password_girer() {
        zeynep_pages_us_08_14.newpassword2.sendKeys(ConfigurationReader.getProperty("newpassword2"));
    }

    @Then("Kullanici Password strenght'teki yesil rengi gorur")
    public void kullanici_Password_strenght_teki_yesil_rengi_gorur() {
        Assert.assertTrue(zeynep_pages_us_08_14.strenghtbargreen.isDisplayed());
        zeynep_pages_us_08_14.isimSoyisim.click();
        zeynep_pages_us_08_14.Password.click();

    }
        //US08TC03
    @Given("New password kutusuna en az bir ozel karakter kullanarak yeni password girer")
    public void new_password_kutusuna_en_az_bir_ozel_karakter_kullanarak_yeni_password_girer() {
        zeynep_pages_us_08_14.newpassword3.sendKeys(ConfigurationReader.getProperty("newpassword3"));

    }
        @Then("Kullanici Password strenght'teki renk degisimini gorur")
        public void kullanici_Password_strenght_teki_renk_degisimini_gorur() {
        Assert.assertTrue(zeynep_pages_us_08_14.strenghtbarGreen.isDisplayed());
            zeynep_pages_us_08_14.isimSoyisim.click();
            zeynep_pages_us_08_14.Password.click();



        }
        //US08TC04
    @Given("New password kutusuna en az {int} karakter kullanarak yeni password girer")
    public void new_password_kutusuna_en_az_karakter_kullanarak_yeni_password_girer(Integer int1) {
        zeynep_pages_us_08_14.newpassword4.sendKeys(ConfigurationReader.getProperty("newpassword4"));

    }

    @Given("Kullanici Password strenght'teki degisimi gorur")
    public void kullanici_Password_strenght_teki_degisimi_gorur() {
        Assert.assertTrue(zeynep_pages_us_08_14.Passwordstrenght.isDisplayed());


    }

    @Given("kullanici save butonuna tiklar")
    public void kullanici_save_butonuna_tiklar() {
        zeynep_pages_us_08_14.saveButton.click();

    }

    @Then("Yeni password onaylanir")
    public void yeni_password_onaylanir() {
        zeynep_pages_us_08_14.confirmPasswordBox.click();
        zeynep_pages_us_08_14.saveButton.click();

    }
    @Given("Kullanici tekrar sag ustte isim soyisim'e tiklar")
    public void kullanici_tekrar_sag_ustte_isim_soyisim_e_tiklar() throws InterruptedException {
        zeynep_pages_us_08_14.isimSoyisim.click();
        Thread.sleep(300);
    }


    @Given("Kullanici acilan menude Sign out'a  tiklar")
    public void kullanici_acilan_menude_Sign_out_a_tiklar() {
        zeynep_pages_us_08_14.signout.click();
    }

    @Given("Kullanici acilan sayfada SIGN IN AGAIN butonuna tiklar")
    public void kullanici_acilan_sayfada_SIGN_IN_AGAIN_butonuna_tiklar() {
        zeynep_pages_us_08_14.signinagain.click();


    }

    @Given("Usernam'i girer")
    public void usernam_i_girer() {
        zeynep_pages_us_08_14.username.sendKeys(ConfigurationReader.getProperty("Username"));
    }

    @Given("Kullanici Eski password'u girer")
    public void kullanici_Eski_password_u_girer() throws InterruptedException {
        zeynep_pages_us_08_14.password.sendKeys(ConfigurationReader.getProperty("Password"));
        zeynep_pages_us_08_14.sigIn.click();


    }
    @Given("Kullanici eski password ile giris yaptiginda Failed to sign in! mesajini gorur")
    public void kullanici_eski_password_ile_giris_yaptiginda_Failed_to_sign_in_mesajini_gorur() {
      Assert.assertTrue(zeynep_pages_us_08_14.notfound.isDisplayed());
      zeynep_pages_us_08_14.isimSoyisim.click();
      zeynep_pages_us_08_14.signout.click();
    }


    //========================================================================================

    //US14TC01

   @Given("Kullanici GMIBANK adresine gider")
    public void kullanici_GMIBANK_adresine_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @Given("Kullanici sag ust kosedeki ikon'a tiklar")
    public void kullanici_sag_ust_kosedeki_ikon_a_tiklar() {
        zeynep_pages_us_08_14.loginButton.click();

    }

    @Given("Kullanici  SignIN'e tiklar")
    public void kullanici_SignIN_e_tiklar() {
        zeynep_pages_us_08_14.signInButton.click();
    }

    @Given("Kullanici  Username ve Passwordu girer")
    public void kullanici_Username_ve_Passwordu_girer() {
        zeynep_pages_us_08_14.username.sendKeys(ConfigurationReader.getProperty("userName2"));
        zeynep_pages_us_08_14.password.sendKeys(ConfigurationReader.getProperty("pasSword2"));
    }
    @Given("kullanici SignIn'e tiklar")
    public void kullanici_SignIn_e_tiklar() {
        zeynep_pages_us_08_14.sigIn.click();
    }
    @Given("Kullanici My Operations secenegine tiklar")
    public void kullanici_My_Operations_secenegine_tiklar() {
        zeynep_pages_us_08_14.myoperations.click();
    }
    @Given("Kullanici acilan menuden Manage Accounts'a tiklar")
    public void kullanici_acilan_menuden_Manage_Accounts_a_tiklar() {
        zeynep_pages_us_08_14.manageaccount.click();
    }
    @Given("kullanici sag ust kosedeki Create a new Account butonuna tiklar")
    public void kullanici_sag_ust_kosedeki_Create_a_new_Account_butonuna_tiklar() {
        zeynep_pages_us_08_14.newaccount.click();

    }
    @Given("Kullanici Create date kutusuna ay gun yil ve saat girer")
    public void kullanici_Create_date_kutusuna_ay_gun_yil_ve_saat_girer() {
       zeynep_pages_us_08_14.createdate.sendKeys(ConfigurationReader.getProperty("Date"));

    }
    @Given("Kullanici  Closed Date kutusuna ay gun yil ve saat girer")
    public void kullanici_Closed_Date_kutusuna_ay_gun_yil_ve_saat_girer() {
        zeynep_pages_us_08_14.closedate.sendKeys(ConfigurationReader.getProperty("Date2"));

    }
    @Then("Kullanici Back butonuna tiklar")
    public void kullanici_Back_butonuna_tiklar() {
       zeynep_pages_us_08_14.BackButton.click();
    }

    //@US14TC02
    @Given("Kullanici Create a new Account buttonuna tiklar")
    public void kullanici_Create_a_new_Account_buttonuna_tiklar() {
        zeynep_pages_us_08_14.newaccount.click();
    }

    @Given("Kullanici Create date kutusuna gecmis ay gun yil ve saat girer")
    public void kullanici_Create_date_kutusuna_gecmis_ay_gun_yil_ve_saat_girer() {
        zeynep_pages_us_08_14.createdate.sendKeys(ConfigurationReader.getProperty("Date01"));
    }

    @Given("Kullanici Closed date kutusuna gecmis ay gun yil ve saat girer")
    public void kullanici_Closed_date_kutusuna_gecmis_ay_gun_yil_ve_saat_girer() {
        zeynep_pages_us_08_14.createdate.sendKeys(ConfigurationReader.getProperty("Date02"));
    }






//String adressTextBox = us01Page.ssnTextbox.getAttribute("class");
//Assert.assertFalse(adressTextBox.contains("invalid"));









}
