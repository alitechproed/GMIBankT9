@hepsi

Feature: Creat a new Customer

  @US09TC01 @US09

  Scenario: US09TC01 Kullanici gecerli datalar ile Sign in yapabilmeli
    Given Kullanici gmibank anasayfasina gider
    And Kullanici sag ust kosede bulunan insan simgesine tiklar
    And Kullanici Sign In butonuna tiklar
    And Kullanici User Name kutusuna bir "User Name" girer
    And Kullanici Password kutusuna bir "Password" girer
    And Kullanici Sign In butonuna tiklar
    Then Kullanici "My Operations" mesajini gorur.

  @US09TC02 @US09

  Scenario: US09TC02 Kullanici gecerli bir SSN ile erisim yapabilmeli
    Given Kullanici My Operations butonuna tiklar
    And Kullanici Manage Customer yazisina tiklar
    And Kullanici Create a new Customer butonuna tiklar
    And Kullanici gecerli bir SSN numarasi girer ve tiklar
    Then Kullanici pop-up olarak "translation-not-found[gmiBankBackendApp.tPAccountRegistration.updated]" gorur

  @US09TC03 @US09

  Scenario: US09TC03 Kullanici gecerli bilgiler ile Customer bilgilerini girer
    Given Kullanici First Name kutusuna "ilk isim" girer
    And Kullanici Last Name kutusuna "son isim" girer
    And Kullanici Middle Initial kutusuna "orta isim basharfi" girer
    And Kullanici Email kutusuna "e-mail" girer
    And Kullanici  Mobile Phone Number kutusuna  "Mobile Phone Number" girer
    And Kullanici Phone Number kutusuna  "Phone Number" girer
    And Kullanici  Zip Code kutusuna  "Posta kodu" girer
    And Kullanici Address kutusuna "adres"
    And Kullanici City kutusuna "sehir" girer
    And Kullanici SSN kutusuna "SSN" girer
    And Kullanici Create Date kutusuna "olusturma tarihi" girer
    And Kullanici Country kutusuna "Ulke" girer
    And Kullanici State kutusuna "Eyalet" girer
    And Kullanici State kutusuna "Eyalet" girer
    And Kullanici User kutusundan "kullanici" secer
    And Kullanici "Account" dropdown icerisindeki hesaplardan bir "hesap" secer
    And Kullanici Zelle Enrolled kutucugunu isaretler
    Then Kullanici Save butonu ile kayit yapar.

    @US10TC01 @US10
      Scenario: US10TC1 Adres city country ve state kutucuklari bos birakilmamali
      Given Kullanici adres kutucuguna "adres" girer
      And Adres kutucugunun bos olmadigini gorur
      And Kullanici city kutucuguna "city" girer
      And City kutucugunun bos olmadigini gorur
      And Kullanici country kutucuguna "country" girer
      And Country kutucugunun bos olmadigini gorur
      And Kullanici state kutucugunda bir "state" secer
      And State kutucugunun bos olmadigini gorur

  @US11TC01  @US11
  Scenario: US11TC01 Date negatif senaryo ile kontrol edilmeli
    Given Date kismina customer creat date den "once bir tarih" girilmeli
    And  Acilan pop-up da "Date can not be created" yazisi gorulur
    And Creat Date kismi "mm-dd-yyyy" olarak girilir
    Then Pop Up olatrak "Date can not created" mesaji gorulmeli

  @US11TC02  @US11
  Scenario: US11TC02 Hour and minutes negatif senaryo ile kontrol edilmeli
    Given Creat Date kismina "saat" ve "dakika" olarak girilmeli
    Then 'Hour and minutes can not created' mesaji gorulmeli


  @US11TC03  @US11
  Scenario: US11TC03 User Account ve Zelle Enrolled kutucugu kontrol edilmeli
    Given Kullanici User kutucugun gider
    And Kullanici User kutucugunun bos olmadigini gorur
    And Kullanici Account kutucugundaki accountlardan birini secer
    And Kullanici Zelle Enrolled kutucugunu isaretler
    Then Kullanici Zelle Enrolled kutucuguna tikladigini gorur.