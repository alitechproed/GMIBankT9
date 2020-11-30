<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Ali_US_01_02_03.feature");
formatter.feature({
  "name": "System should allow any user to register with valid credentials validating the success message",
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Zubeyde_US_030.feature");
formatter.feature({
  "name": "US_30 Tüm kullanıcılar (kullanıcı, çalışan, manager veya admin) bir pdf dosyası olarak yazdırılmalıdır",
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Zeynep_US_08_14.feature");
formatter.feature({
  "name": "kullanici eski sifre ile giris yapamaz",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Gulser_US_04_05.feature");
formatter.feature({
  "name": "gmibank Login test",
>>>>>>> master
>>>>>>> master
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@all"
=======
<<<<<<< HEAD
      "name": "@US_030"
=======
<<<<<<< HEAD
      "name": "@feature"
=======
      "name": "@gmaiLogin_US_004_005"
>>>>>>> master
>>>>>>> master
>>>>>>> master
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US01TC01 gecerli SSN test",
=======
<<<<<<< HEAD
  "name": "Tüm kullanıcıların bilgilerini bir pdf belgesinde Ad, soyad ve rol olarak bulundurulmalı",
=======
<<<<<<< HEAD
  "name": "TC01_Create password",
=======
  "name": "Login Pozitive test",
>>>>>>> master
>>>>>>> master
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@all"
    },
    {
      "name": "@US01TC01"
    },
    {
      "name": "@US01"
=======
<<<<<<< HEAD
      "name": "@US_030"
=======
<<<<<<< HEAD
      "name": "@feature"
    },
    {
      "name": "@US08TC01"
=======
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmibankLoginTC_001"
>>>>>>> master
>>>>>>> master
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
<<<<<<< HEAD
  "name": "REST API\u0027a bir GET isteği gönder",
  "keyword": "Given "
});
formatter.match({});
=======
<<<<<<< HEAD
  "name": "Kullanici gmibank adresine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_gmibank_adresine_gider()"
=======
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici sag ust kosedeki ok\u0027a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_ok_a_tiklar()"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
>>>>>>> master
});
>>>>>>> master
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
<<<<<<< HEAD
  "name": "HTTP Durum Kodu 200 ve contentType JSON olmalıdır",
  "keyword": "And "
});
formatter.match({});
=======
<<<<<<< HEAD
  "name": "Kullanici acilan menude Sign in\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Sign_in_e_tiklar()"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak SSN textboxina gecerli ssn numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_textboxina_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxinin bir hata uyarisi vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC02 gecersiz SSN test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC02"
    },
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
<<<<<<< HEAD
  "name": "Kullanici  username ve passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_username_ve_passwordu_girer()"
=======
  "name": "User should be valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_username()"
>>>>>>> master
>>>>>>> master
});
>>>>>>> master
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Ad, soyad ve rol gibi tüm kullanıcıların bilgileri bir pdf belgesinde olmalıdır",
  "keyword": "Then "
});
formatter.match({});
=======
<<<<<<< HEAD
  "name": "kullanici Sign in\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Sign_in_e_tiklar()"
=======
  "name": "User should be valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
=======
<<<<<<< HEAD
  "name": "Kullanici  sag ust kosedeki isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar()"
=======
  "name": "User click sing in button",
>>>>>>> master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN hata mesajini goruntuler",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_hata_mesajini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_hata_mesajini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC03 gecerli first name positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC03"
    },
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici acilan menude Password\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Password_e_tiklar()"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici Current password kutusuna simdiki passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Current_password_kutusuna_simdiki_passwordu_girer()"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak First Name textboxina Ali ismini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_First_Name_textboxina_Ali_ismini_girer()"
=======
<<<<<<< HEAD
  "name": "New password kutusuna en az bir buyuk harf kullanarak yeni password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.new_password_kutusuna_en_az_bir_buyuk_harf_kullanarak_yeni_password_girer()"
=======
  "name": "Click on the cancel",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_cancel()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak First Name textboxinin bir hata uyarisi vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler()"
=======
<<<<<<< HEAD
  "name": "Kullanici Password strenght\u0027teki turuncu rengi gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Password_strenght_teki_turuncu_rengi_gorur()"
=======
  "name": "User should be see Home",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_see_Home()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US01TC04 Bos first name negative test",
=======
<<<<<<< HEAD
  "name": "TC02_Create password",
=======
  "name": "Negative  username test",
>>>>>>> master
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@all"
    },
    {
      "name": "@US01TC04"
    },
    {
      "name": "@US01"
=======
<<<<<<< HEAD
      "name": "@feature"
    },
    {
      "name": "@US08TC02"
=======
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmiBankLoginTC_003"
>>>>>>> master
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici  sag ust kosedeki isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar()"
=======
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici acilan menude Password\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Password_e_tiklar()"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak First Name textboxini bos birakir",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_First_Name_textboxini_bos_birakir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Your First Name is required First Name hata uyarisini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Your_First_Name_is_required_First_Name_hata_uyarisini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC05 gecerli last name positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC05"
    },
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
<<<<<<< HEAD
  "name": "Kullanici Current password kutusuna simdiki passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Current_password_kutusuna_simdiki_passwordu_girer()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
  "name": "New password kutusuna en az bir rakam kullanarak yeni password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.new_password_kutusuna_en_az_bir_rakam_kullanarak_yeni_password_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Password strenght\u0027teki yesil rengi gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Password_strenght_teki_yesil_rengi_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_Create password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature"
    },
    {
      "name": "@US08TC03"
    }
  ]
});
formatter.step({
  "name": "Kullanici  sag ust kosedeki isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar()"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxina Can soyismini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Last_Name_textboxina_Can_soyismini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Last_Name_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC06 bos last name negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC06"
    },
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
<<<<<<< HEAD
  "name": "Kullanici acilan menude Password\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Password_e_tiklar()"
=======
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_invalid_username()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici Current password kutusuna simdiki passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Current_password_kutusuna_simdiki_passwordu_girer()"
=======
  "name": "User should be valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxini bos birakir",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Last_Name_textboxini_bos_birakir()"
=======
<<<<<<< HEAD
  "name": "New password kutusuna en az bir ozel karakter kullanarak yeni password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.new_password_kutusuna_en_az_bir_ozel_karakter_kullanarak_yeni_password_girer()"
=======
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_click_sing_in_button()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Your Last Name is required   Last Name hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Your_Last_Name_is_required_Last_Name_hata_mesajini_goruntuler()"
=======
<<<<<<< HEAD
  "name": "Kullanici Password strenght\u0027teki renk degisimini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Password_strenght_teki_renk_degisimini_gorur()"
=======
  "name": "Then i should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.then_i_should_see_the_error_message()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US01TC07 gecerli Adress test",
=======
<<<<<<< HEAD
  "name": "TC04_Create password",
=======
  "name": "Negative password test",
>>>>>>> master
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@all"
    },
    {
      "name": "@US01TC07"
=======
<<<<<<< HEAD
      "name": "@feature"
    },
    {
      "name": "@US08TC04"
=======
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmiBankLoginTC_004"
>>>>>>> master
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
=======
<<<<<<< HEAD
  "name": "Kullanici  sag ust kosedeki isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar()"
=======
  "name": "user is on the gmiBank page",
>>>>>>> master
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici acilan menude Password\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Password_e_tiklar()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxina  Ali mah. Can cad. No:12. Istanbul Tuzla  adresini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Address_textboxina_Ali_mah_Can_cad_No_Istanbul_Tuzla_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Address_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC08 gecerli mobile phone number test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC08"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
  "name": "Kullanici Current password kutusuna simdiki passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Current_password_kutusuna_simdiki_passwordu_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New password kutusuna en az 7 karakter kullanarak yeni password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.new_password_kutusuna_en_az_karakter_kullanarak_yeni_password_girer(java.lang.Integer)"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici Password strenght\u0027teki degisimi gorur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Password_strenght_teki_degisimi_gorur()"
=======
  "name": "User should be valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_valid_username()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
<<<<<<< HEAD
  "name": "kullanici save butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_save_butonuna_tiklar()"
=======
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_invalid_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina istenilen formatta cep telefonu numarasini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_cep_telefonu_numarasini_girer()"
=======
<<<<<<< HEAD
  "name": "Yeni password onaylanir",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.yeni_password_onaylanir()"
=======
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_click_sing_in_button()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Mobile Phone Number textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
=======
<<<<<<< HEAD
  "name": "Kullanici tekrar sag ustte isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_tekrar_sag_ustte_isim_soyisim_e_tiklar()"
=======
  "name": "Then I should see the error message1",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.then_I_should_see_the_error_message1()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "Kullanici acilan menude Sign out\u0027a  tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Sign_out_a_tiklar()"
=======
formatter.scenario({
  "name": "US01TC09 gecersiz mobile phone number Negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC09"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici acilan sayfada SIGN IN AGAIN butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_sayfada_SIGN_IN_AGAIN_butonuna_tiklar()"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Usernam\u0027i girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.usernam_i_girer()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
  "name": "Kullanici Eski password\u0027u girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Eski_password_u_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici eski password ile giris yaptiginda Failed to sign in! mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_eski_password_ile_giris_yaptiginda_Failed_to_sign_in_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_Create date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@feature"
    },
    {
      "name": "@US14TC01"
    }
  ]
});
formatter.step({
  "name": "Kullanici GMIBANK adresine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_GMIBANK_adresine_gider()"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan cep telefonu numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_tire_olmadan_cep_telefonu_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your mobile phone number is invalid\" mobile phone number hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_mobile_phone_number_hata_mesajini_goruntuler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC10 gecerli kullanici adi test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
<<<<<<< HEAD
  "name": "Kullanici sag ust kosedeki ikon\u0027a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_ikon_a_tiklar()"
=======
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_invalid_username()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
=======
<<<<<<< HEAD
  "name": "Kullanici  SignIN\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_SignIN_e_tiklar()"
=======
  "name": "User should be invalid password",
>>>>>>> master
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina  Elliyedi  kullanici adini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxina_Elliyedi_kullanici_adini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC11 gecersiz kullanici adi test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC11"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "Kullanici  Username ve Passwordu girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Username_ve_Passwordu_girer()"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
<<<<<<< HEAD
  "name": "kullanici SignIn\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_SignIn_e_tiklar()"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici My Operations secenegine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_My_Operations_secenegine_tiklar()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Username textboxina  sadece sayilardan ve karakterden olusan kullanici adini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxina_sadece_sayilardan_olusan_kullanici_adini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxinin cerceve renginin kirmizi oldugunu goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxinin_cerceve_renginin_kirmizi_oldugunu_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US01TC12 gecerli email test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US01TC12"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
=======
  "name": "Kullanici acilan menuden Manage Accounts\u0027a tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menuden_Manage_Accounts_a_tiklar()"
=======
  "name": "Click on the Did you forget your password?",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_Did_you_forget_your_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
=======
<<<<<<< HEAD
  "name": "kullanici sag ust kosedeki Create a new Account butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_Create_a_new_Account_butonuna_tiklar()"
=======
  "name": "provide email to checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.provide_email_to_checkbox()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici Create date kutusuna ay gun yil ve saat girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Create_date_kutusuna_ay_gun_yil_ve_saat_girer()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina foreachloop2022@gmail.com mail adresini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxina_foreachloop2022_gmail_com_mail_adresini_girer()"
=======
  "name": "Kullanici  Closed Date kutusuna ay gun yil ve saat girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Closed_Date_kutusuna_ay_gun_yil_ve_saat_girer()"
=======
  "name": "Click on the Reset password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_Reset_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak Email textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
=======
<<<<<<< HEAD
  "name": "Kullanici Back butonuna tiklar",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Back_butonuna_tiklar()"
=======
  "name": "I should see the message reset your password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.i_should_see_the_message_reset_your_password()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US02TC01 Basarili Kayit olma",
=======
<<<<<<< HEAD
  "name": "TC02_Create date",
=======
  "name": "New Registration",
>>>>>>> master
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@all"
    },
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina dogru ssn numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_textboxina_dogru_ssn_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxina ismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_First_Name_textboxina_ismini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxina soyismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxina adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Address_textboxina_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina cep telefonu numarasini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_dogru_cep_telefonu_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina kullanici adini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina mail adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_57Elliyedi_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password confirmation sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_confirmation_57Elliyedi_techpreod_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Register butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Register_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak basarili bir kayit olusturulduguna dair mesaj goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_basarili_bir_kayit_olusturulduguna_dair_mesaj_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 Basarisiz Kayit olma",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina dogru ssn numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_textboxina_dogru_ssn_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxina herhangi bir sey girmez",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_First_Name_textboxina_herhangi_bir_sey_girmez()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxina soyismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxina adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Address_textboxina_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina cep telefonu numarasini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_dogru_cep_telefonu_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina kullanici adini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina mail adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_57Elliyedi_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password confirmation sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_confirmation_57Elliyedi_techpreod_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Register butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Register_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak basarisiz bir kayit olusturulduguna dair mesaj goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_basarisiz_bir_kayit_olusturulduguna_dair_mesaj_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC03 gecersiz SSN test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US02TC03"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN hata mesajini goruntuler",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_hata_mesajini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_SSN_hata_mesajini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC04 gecersiz mobile phone number Negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US02TC04"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan cep telefonu numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_tire_olmadan_cep_telefonu_numarasini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your mobile phone number is invalid\" mobile phone number hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_mobile_phone_number_hata_mesajini_goruntuler(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC05 gecersiz email test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina yanlis mail adresini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxina_yanlis_mail_adresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxinin bir hata mesaji goruntulenir",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_goruntulenir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US03TC01 Guclu password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03TC01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"\u003cpassword\u003e\" sifresini girer (bir buyuk harf, en az yedi karakter, bir ozel karakter ve bir rakamdan olusan)",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici sifrenin guclu oldugunu yesil checkbox tan gorur.",
  "keyword": "Then "
});
formatter.examples({
  "name": "user datas",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "Deneme1+"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US03TC01 Guclu password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US03TC01"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"Deneme1+\" sifresini girer (bir buyuk harf, en az yedi karakter, bir ozel karakter ve bir rakamdan olusan)",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_buyuk_harf_en_az_yedi_karakter_bir_ozel_karakter_ve_bir_rakamdan_olusan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sifrenin guclu oldugunu yesil checkbox tan gorur.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_sifrenin_guclu_oldugunu_yesil_checkbox_tan_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US03TC02 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03TC02"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"\u003cpassword\u003e\" sifresini girer. bir buyuk harf",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.examples({
  "name": "user datas",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "Denemek"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US03TC02 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US03TC02"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"Denemek\" sifresini girer. bir buyuk harf",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_buyuk_harf(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_sifrenin_zayif_oldugunu_turuncu_checkbox_tan_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US03TC03 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03TC03"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"\u003cpassword\u003e\" sifresini girer, tek rakam",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.examples({
  "name": "user datas",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "deneme1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US03TC03 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US03TC03"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"deneme1\" sifresini girer, tek rakam",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_tek_rakam(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_sifrenin_zayif_oldugunu_turuncu_checkbox_tan_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US03TC04 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03TC04"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"\u003cpassword\u003e\" sifresini girer. bir ozel karakter",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.examples({
  "name": "user datas",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "deneme+"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US03TC04 Zayif password olusturma",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@US03TC04"
=======
<<<<<<< HEAD
      "name": "@feature"
    },
    {
      "name": "@US14TC02"
=======
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmiBankLoginTC_007"
>>>>>>> master
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
=======
<<<<<<< HEAD
  "name": "Kullanici Create a new Account buttonuna tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Create_a_new_Account_buttonuna_tiklar()"
=======
  "name": "user is on the gmiBank page",
>>>>>>> master
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.toBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
=======
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_sign_in()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici bir user olarak New password textboxina kucuk harflerle \"deneme+\" sifresini girer. bir ozel karakter",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_bir_user_olarak_New_password_textboxina_kucuk_harflerle_sifresini_girer_bir_ozel_karakter(java.lang.String)"
=======
<<<<<<< HEAD
  "name": "Kullanici Create date kutusuna gecmis ay gun yil ve saat girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Create_date_kutusuna_gecmis_ay_gun_yil_ve_saat_girer()"
=======
  "name": "Click on the You don\u0027t have an account yet? Register a new account",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_You_don_t_have_an_account_yet_Register_a_new_account()"
>>>>>>> master
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali_Step_US_01_02_03.kullanici_sifrenin_zayif_oldugunu_turuncu_checkbox_tan_gorur()"
=======
<<<<<<< HEAD
  "name": "Kullanici Closed date kutusuna gecmis ay gun yil ve saat girer",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Closed_date_kutusuna_gecmis_ay_gun_yil_ve_saat_girer()"
=======
  "name": "User should be see Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_see_Registration()"
>>>>>>> master
>>>>>>> master
});
>>>>>>> master
formatter.result({
  "status": "undefined"
});
});