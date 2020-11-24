@UserInfo
Feature: UserInfo bolumu


  @US_06_TC_01
  Scenario: Kullanici kayit ayar formunda kayit bilgilerini gormeli
    Given GMIBank sayfasina gider
    And Ana sayfada sag ustte ikona tiklar
    And SignInText buttonuna tiklar
    And UserName ve password girer
    And SignIn buttonuna tiklar
    And User user buttonuna tiklar
    And User info secenegini tiklar
    Then FirstName "User" oldugunu dogrular
    Then LastName "user" oldugunu dogrular
    Then Email "user9@gmail.com" oldugunu dogrular
    Then Language "English" secilmis oldugunu dogrular

  @US_06_TC_02
  Scenario Outline: Dil secenegini dogrulama
    Then ingilizce && Turkce dilllerinin var oldugunu dogrular
    Examples: Langue
      | English |
      | Türkçe  |


  @US_06_TC_03
    Scenario: Firstname Update

      And  FirstName textboxina tiklar
      And  FirstName textboxini siler
      And  FirstName textboxina girer
      And  Save buttonuna tiklar
      Then FirstName'in "Isim" oldugunu dogrular


  @US_06_TC_04
  Scenario: LastName Update

    And  LastName textboxina tiklar
    And  LastName textboxini siler
    And  LastName textboxina girer
    And  Save buttonuna tiklar
    Then LastName'in "SoyIsim" oldugunu dogrular


  @US_06_TC_05
  Scenario: Email Update

    And  Email textboxina tiklar
    And  Email textboxini siler
    And  Email textboxina "@" karakteri ve ".com" uzantisi ile yazar
    And  Save buttonuna tiklar

  @US_07_TC_01
  Scenario: Email Negative Test

    And  Email textboxina tiklar
    And  Email texboxina sadece rakam ve harf girer
    Then "This field is invalid" mesaji gorur
    When Email textboxina "@"  karakteri ve ".com" uzantisi girilmeyince
    Then "This field is invalid" mesaji gorur

  @US_07_TC_02
  Scenario Outline: Language Dropdown Test
    Then  Sadece Ingilizce ve Turkce dil secenekleri gorulur
    Examples: 2 Langue
    | Türkçe  |
    | English |
