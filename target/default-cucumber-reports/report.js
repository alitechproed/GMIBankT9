<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Zeynep_US_08_14.feature");
formatter.feature({
  "name": "kullanici eski sifre ile giris yapamaz",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Gulser_US_04_05.feature");
formatter.feature({
  "name": "gmibank Login test",
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@feature"
=======
      "name": "@gmaiLogin_US_004_005"
>>>>>>> master
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
  "name": "TC01_Create password",
=======
  "name": "Login Pozitive test",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
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
    }
  ]
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici  sag ust kosedeki isim soyisim\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_sag_ust_kosedeki_isim_soyisim_e_tiklar()"
=======
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_click_sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the eror message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.then_I_should_not_see_the_eror_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pozitive cancel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmibankLoginTC_002"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "TC02_Create password",
=======
  "name": "Negative  username test",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
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
    }
  ]
});
formatter.step({
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
=======
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_invalid_username()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "TC04_Create password",
=======
  "name": "Negative password test",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
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
    }
  ]
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "Kullanici acilan menude Password\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_acilan_menude_Password_e_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
  "name": "Negative username and password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmiBankTC_005"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici  SignIN\u0027e tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_SignIN_e_tiklar()"
=======
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_should_be_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_click_sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should see the error message2",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.then_I_should_see_the_error_message2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forget password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmaiLogin_US_004_005"
    },
    {
      "name": "@gmiBankTC_006"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "TC02_Create date",
=======
  "name": "New Registration",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
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
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici Create a new Account buttonuna tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zeynep_Step_US_08_14.kullanici_Create_a_new_Account_buttonuna_tiklar()"
=======
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.user_is_on_the_gmiBank_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Gulser_Step_US_04_05.click_on_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
});