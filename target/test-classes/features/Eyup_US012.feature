@GmiBankAll
Feature: GmiBank Edit Test

  @US12_TC01
    Scenario: US12_TC01 Kullanici GmiBank sayfasindaki bilgileri kontrol eder
      Given Kullanici GmiBank sayfasina baglanir
      And kullanici Sag uste bulunan insan simgesine tiklar
      And kullanici Acilan menude sign in text ine tiklar
      And kullanici acilan menude User Name textbox'a User Name yazilacak
      And kullanici Password  textbox'a Password yazilacak
      And Sign in butonu tiklanacak
      And Ana sayfada Menu seceneklerinde My Operation tiklanacak
      And Acilan menude Manage Customer tiklanacak
      Then Acilan menude musteri bilgilerini goruntuler

  @US12_TC02
    Scenario: US12_TC02 Edit ve Delete buttonu kontrolu

      Given musterilere ait View butonu goruntulenecek
      Then musterilere ait Edit butonu goruntulenecek

  @US12_TC03
    Scenario:US12_TC03 Edit buttonuna tiklanacak

    Then musterilere ait Edit butonuna tiklayacak

  @US12_TC04
    Scenario:US12_TC04 Bilgiler Edit edilecek
      Given Acilan menude ID goruntulenecek
      And First Name girilecek
      And Last Name girilecek
      And Middle Initial girilecek
      And E-Mail girilecek
      And Mobile Phone Number girilecek
      And Phone Number girilecek
      And Zip Code girilecek
      And Address girilecek
    And City girilecek
    And Ssn numarasi girilecek
    And Create Date girilecek
    And Country secilecek
    And State girilecek
      And User secilecek
      And Account secilecek
      And Zelle Enrolled checkbox secilecek
      Then Save butonuna basilacak

  @US12_TC05
  Scenario: US12_TC05 Delete islemi kontrolu

   // Given Ana sayfada Menu seceneklerinde My Operation tiklanacak
   // And Acilan menude Manage Customer tiklanacak
    Given musterilere ait Delete butonuna goruntulenecek ve tiklanacak
    And Uyari mesaji goruntulenecek
    And Kullanici emin ise Delete butonuna tiklanacak
    Then Userin silindigi mesaj goruntulenecek

