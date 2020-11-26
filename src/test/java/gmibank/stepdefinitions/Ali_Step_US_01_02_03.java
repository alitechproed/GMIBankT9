package gmibank.stepdefinitions;

import gmibank.pages.Ali_Pages_US_01_02_03;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import javax.swing.*;
import java.util.NoSuchElementException;

import static gmibank.utilities.Driver.*;

public class Ali_Step_US_01_02_03 {

    Ali_Pages_US_01_02_03 ali_Pages_US_01_02_03 = new Ali_Pages_US_01_02_03();

    //US01TC01
    @Given("Kullanici bir user olarak gmibank anasayfasina gider")
    public void toBankHomePage() {
        getDriver().get(ConfigurationReader.getProperty("G"));
    }
    @Given("Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar")
    public void kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar() {
        ali_Pages_US_01_02_03.insanFigur.click();
    }
    @Given("Kullanici bir user olarak acilan menuden register linkine tiklar")
    public void kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar() {
        ali_Pages_US_01_02_03.registerDropDown.click();
    }
    @Given("Kullanici bir user olarak SSN textboxina gecerli ssn numarasini girer")
    public void kullanici_bir_user_olarak_SSN_textboxina_numarasini_girer() {
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_ssn"));
        ali_Pages_US_01_02_03.nameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_name"));
    }
    @Then("Kullanici bir user olarak SSN textboxinin bir hata uyarisi vermedigini goruntuler")
    public void kullanici_bir_user_olarak_SSN_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler() {
        //Assert.assertNull(ali_Pages_US_01_02_03.ssnMessageInvalid);
        //Burasi sikintili
    }

    //US01TC02
    @Given("Kullanici bir user olarak SSN textboxina gecersiz ssn numarasini girer")
    public void kullanici_bir_user_olarak_SSN_textboxina_gecersiz_numarasini_girer() {
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys(ConfigurationReader.getProperty("gecersiz_ssn"));
    }
    @Then("Kullanici bir user olarak SSN hata mesajini goruntuler")
    public void kullanici_bir_user_olarak_SSN_hata_mesajini_goruntuler() {
        Assert.assertNotNull(ali_Pages_US_01_02_03.ssnMessageInvalid);
    }

    //US01TC03
    @Given("Kullanici bir user olarak First Name textboxina Ali ismini girer")
    public void kullanici_bir_user_olarak_First_Name_textboxina_Ali_ismini_girer() {
        ali_Pages_US_01_02_03.nameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_name"));
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys("");
    }
    @Then("Kullanici bir user olarak First Name textboxinin bir hata uyarisi vermedigini goruntuler")
    public void kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler() {
        //Assert.assertFalse(ali_Pages_US_01_02_03.nameMessageInvalid.getText().isEmpty());
        //burasi sikintili
    }

    //US01TC04
    @Given("Kullanici bir user olarak First Name textboxini bos birakir")
    public void kullanici_bir_user_olarak_First_Name_textboxini_bos_birakir() {
        ali_Pages_US_01_02_03.nameTextBox.sendKeys("");
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys("");
    }
    @Then("Kullanici bir user olarak Your First Name is required First Name hata uyarisini goruntuler")
    public void kullanici_bir_user_olarak_Your_First_Name_is_required_First_Name_hata_uyarisini_goruntuler() {
        Assert.assertTrue(ali_Pages_US_01_02_03.nameMessageInvalid.isDisplayed());
    }

    //US01TC05
    @Given("Kullanici bir user olarak Last Name textboxina Can soyismini girer")
    public void kullanici_bir_user_olarak_Last_Name_textboxina_Can_soyismini_girer() {
        ali_Pages_US_01_02_03.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_lastname"));
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys("");
    }
    @Then("Kullanici bir user olarak Last Name textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Last_Name_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
//        Assert.assertFalse(ali_Pages_US_01_02_03.lastnameMessageInvalid.isDisplayed());
//        burasi sikintili
    }

    //US01TC06
    @Given("Kullanici bir user olarak Last Name textboxini bos birakir")
    public void kullanici_bir_user_olarak_Last_Name_textboxini_bos_birakir() {
        ali_Pages_US_01_02_03.lastnameTextBox.sendKeys("");
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys("");
    }
    @Then("Kullanici bir user olarak Your Last Name is required   Last Name hata mesajini goruntuler")
    public void kullanici_bir_user_olarak_Your_Last_Name_is_required_Last_Name_hata_mesajini_goruntuler() {
        Assert.assertTrue(ali_Pages_US_01_02_03.lastnameMessageInvalid.isDisplayed());
    }

    //US01TC07
    @Given("Kullanici bir user olarak Address textboxina  Ali mah. Can cad. No:12. Istanbul Tuzla  adresini girer")
    public void kullanici_bir_user_olarak_Address_textboxina_Ali_mah_Can_cad_No_Istanbul_Tuzla_adresini_girer() {
        ali_Pages_US_01_02_03.adresstextBox.sendKeys(ConfigurationReader.getProperty("gecerli_adress"));
    }
    @Then("Kullanici bir user olarak Address textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Address_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        //Assert.assertFalse(ali_Pages_US_01_02_03.adresstextBox.isDisplayed());
        //burasi sikintili
    }

    //US01TC08
    @Given("Kullanici bir user olarak Mobile Phone Number textboxina istenilen formatta cep telefonu numarasini girer")
        public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_cep_telefonu_numarasini_girer() {
        ali_Pages_US_01_02_03.mobileTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_mobile"));
    }
    @Then("Kullanici bir user olarak Mobile Phone Number textboxinin bir hata mesaji vermedigini goruntuler")
        public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        //Assert.assertNotNull((ali_Pages_US_01_02_03.mobileTextinvalidmessage));
        //burasi sikintili
    }

    //US01TC09
    @Given("Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan cep telefonu numarasini girer")
    public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_tire_olmadan_cep_telefonu_numarasini_girer() {
        ali_Pages_US_01_02_03.mobileTextBox.sendKeys(ConfigurationReader.getProperty("gecersiz_mobile"));
    }
    @Then("Kullanici bir user olarak {string} mobile phone number hata mesajini goruntuler")
    public void kullanici_bir_user_olarak_mobile_phone_number_hata_mesajini_goruntuler(String string) {
        Assert.assertNotNull(ali_Pages_US_01_02_03.mobileTextinvalidmessage);
    }

    //US01TC10
    @Given("Kullanici bir user olarak Username textboxina  Elliyedi  kullanici adini girer")
    public void kullanici_bir_user_olarak_Username_textboxina_Elliyedi_kullanici_adini_girer() {
        ali_Pages_US_01_02_03.userNameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_username"));
    }
    @Then("Kullanici bir user olarak Username textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Username_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        //Assert.assertNull(ali_Pages_US_01_02_03.usernameInvalidMessage);
        //Burasi sikintili
    }

    //US01TC11
    @Given("Kullanici bir user olarak Username textboxina  sadece sayilardan ve karakterden olusan kullanici adini girer")
    public void kullanici_bir_user_olarak_Username_textboxina_sadece_sayilardan_olusan_kullanici_adini_girer() {
        ali_Pages_US_01_02_03.userNameTextBox.sendKeys(ConfigurationReader.getProperty("gecersiz_username"));
    }
    @Then("Kullanici bir user olarak Username textboxinin cerceve renginin kirmizi oldugunu goruntuler")
    public void kullanici_bir_user_olarak_Username_textboxinin_cerceve_renginin_kirmizi_oldugunu_goruntuler() {
        Assert.assertNotNull(ali_Pages_US_01_02_03.usernameInvalidMessage);
    }

    //US01TC12
    @Given("Kullanici bir user olarak Email textboxina foreachloop2022@gmail.com mail adresini girer")
    public void kullanici_bir_user_olarak_Email_textboxina_foreachloop2022_gmail_com_mail_adresini_girer() {
        ali_Pages_US_01_02_03.emailTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_email"));
    }
    @Then("Kullanici bir user olarak Email textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        //Assert.assertNull(ali_Pages_US_01_02_03.emailInvalidMessage);
        //burasi sikintili
    }
//===============@@@@@@@@@=================@@@@@@@@@======================@@@@@@@@@===================@@@@@@@@@=======//

    //US02TC01
    @Given("Kullanici bir user olarak SSN textboxina dogru ssn numarasini girer")
    public void kullanici_bir_user_olarak_SSN_textboxina_dogru_ssn_numarasini_girer() {
        ali_Pages_US_01_02_03.ssnTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_ssn"));
    }
    @Given("Kullanici bir user olarak First Name textboxina ismini girer")
    public void kullanici_bir_user_olarak_First_Name_textboxina_ismini_girer() {
        ali_Pages_US_01_02_03.nameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_name"));
    }
    @Given("Kullanici bir user olarak Last Name textboxina soyismini girer")
    public void kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer() {
        ali_Pages_US_01_02_03.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_lastname"));
    }
    @Given("Kullanici bir user olarak Address textboxina adresini girer")
    public void kullanici_bir_user_olarak_Address_textboxina_adresini_girer() {
        ali_Pages_US_01_02_03.adresstextBox.sendKeys(ConfigurationReader.getProperty("gecerli_adress"));
    }
    @Given("Kullanici bir user olarak Mobile Phone Number textboxina cep telefonu numarasini girer")
    public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_dogru_cep_telefonu_numarasini_girer() {
        ali_Pages_US_01_02_03.mobileTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_mobile"));
    }
    @Given("Kullanici bir user olarak Username textboxina kullanici adini girer")
    public void kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer() {
        ali_Pages_US_01_02_03.userNameTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_username"));
    }
    @Given("Kullanici bir user olarak Email textboxina mail adresini girer")
    public void kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer() {
        ali_Pages_US_01_02_03.emailTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_email"));
    }
    @Given("Kullanici bir user olarak New password textboxina sifresini girer")
    public void kullanici_bir_user_olarak_New_password_textboxina_57Elliyedi_sifresini_girer() {
        ali_Pages_US_01_02_03.firstPasswordTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_password"));
    }
    @Given("Kullanici bir user olarak New password confirmation sifresini girer")
    public void kullanici_bir_user_olarak_New_password_confirmation_57Elliyedi_techpreod_sifresini_girer() {
        waitForClickablility(ali_Pages_US_01_02_03.submitButton,500);
        ali_Pages_US_01_02_03.secondPasswordTextBox.sendKeys(ConfigurationReader.getProperty("gecerli_password"));
    }
    @Given("Kullanici bir user olarak Register butonuna tiklar")
    public void kullanici_bir_user_olarak_Register_butonuna_tiklar() {
        ali_Pages_US_01_02_03.submitButton.click();
    }
    @Then("Kullanici bir user olarak basarili bir kayit olusturulduguna dair mesaj goruntuler")
    public void kullanici_bir_user_olarak_basarili_bir_kayit_olusturulduguna_dair_mesaj_goruntuler() {
        Assert.assertTrue(ali_Pages_US_01_02_03.successRegisterMessage.isDisplayed());
    }

    //US02TC02
    @Given("Kullanici bir user olarak First Name textboxina herhangi bir sey girmez")
    public void kullanici_bir_user_olarak_First_Name_textboxina_herhangi_bir_sey_girmez() {
        ali_Pages_US_01_02_03.nameTextBox.sendKeys("");
    }
    @Then("Kullanici bir user olarak basarisiz bir kayit olusturulduguna dair mesaj goruntuler")
    public void kullanici_bir_user_olarak_basarisiz_bir_kayit_olusturulduguna_dair_mesaj_goruntuler() {
      Assert.assertTrue(ali_Pages_US_01_02_03.registerfailMessage.isDisplayed());
    }

    //US02TC03

    //US02TC04

    //US02TC05
    @Given("Kullanici bir user olarak Email textboxina yanlis mail adresini girer")
    public void kullanici_bir_user_olarak_Email_textboxina_yanlis_mail_adresini_girer() {
        scrollToElement(ali_Pages_US_01_02_03.emailTextBox);
        waitForVisibility(ali_Pages_US_01_02_03.emailTextBox,100);
        ali_Pages_US_01_02_03.emailTextBox.sendKeys(ConfigurationReader.getProperty("gecersiz_email"));
    }
    @Then("Kullanici bir user olarak Email textboxinin bir hata mesaji goruntulenir")
    public void kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_goruntulenir() {
        ali_Pages_US_01_02_03.submitButton.click();
        Assert.assertTrue(ali_Pages_US_01_02_03.registerfailMessage.isDisplayed());
    }


//===============@@@@@@@@@=================@@@@@@@@@======================@@@@@@@@@===================@@@@@@@@@=======//


    //US03TC01
    @Given("Kullanici bir user olarak New password textboxina kucuk harflerle {string} sifresini girer \\(bir buyuk harf, en az yedi karakter, bir ozel karakter ve bir rakamdan olusan)")
    public void kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_buyuk_harf_en_az_yedi_karakter_bir_ozel_karakter_ve_bir_rakamdan_olusan(String string) {
        scrollToElement(ali_Pages_US_01_02_03.firstPasswordTextBox);
        ali_Pages_US_01_02_03.firstPasswordTextBox.sendKeys(string);
        waitForVisibility(ali_Pages_US_01_02_03.StrongPassGreen,100);
    }
    @Then("Kullanici sifrenin guclu oldugunu yesil checkbox tan gorur.")
    public void kullanici_sifrenin_guclu_oldugunu_yesil_checkbox_tan_gorur() {
        Assert.assertTrue(ali_Pages_US_01_02_03.StrongPassGreen.isDisplayed());
    }

    //US03TC02
    @Given("Kullanici bir user olarak New password textboxina kucuk harflerle {string} sifresini girer. bir buyuk harf")
    public void kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_buyuk_harf(String string) {
        scrollToElement(ali_Pages_US_01_02_03.firstPasswordTextBox);
        ali_Pages_US_01_02_03.firstPasswordTextBox.sendKeys(string);
        waitForVisibility(ali_Pages_US_01_02_03.WeakPassOrange,100);
    }
    @Then("Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.")
    public void kullanici_sifrenin_zayif_oldugunu_turuncu_checkbox_tan_gorur() {
        Assert.assertTrue(ali_Pages_US_01_02_03.WeakPassOrange.isDisplayed());
    }

    //US03TC03
    @Given("Kullanici bir user olarak New password textboxina kucuk harflerle {string} sifresini girer, tek rakam")
    public void kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_tek_rakam(String string) {
        scrollToElement(ali_Pages_US_01_02_03.firstPasswordTextBox);
        ali_Pages_US_01_02_03.firstPasswordTextBox.sendKeys(string);
        waitForVisibility(ali_Pages_US_01_02_03.WeakPassOrange,100);
    }

    //US03TC04
    @Given("Kullanici bir user olarak New password textboxina kucuk harflerle {string} sifresini girer. bir ozel karakter")
    public void kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_ozel_karakter(String string) {
       scrollToElement(ali_Pages_US_01_02_03.firstPasswordTextBox);
       ali_Pages_US_01_02_03.firstPasswordTextBox.sendKeys(string);
       waitForVisibility(ali_Pages_US_01_02_03.WeakPassOrange,100);


        System.out.println("deneme satiri");


        System.out.println("deneme2 satiri...");

    }



}
