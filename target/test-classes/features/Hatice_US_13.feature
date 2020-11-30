@US13
Feature: An Employee can create a new Account
  @US13TC01
  Scenario: Description positive test
    Given Kullanici gmibank sayfasina gider.
    And Kullanici  insan simgesine tiklar.
    And Kullanici  sign in text'ine tiklar.
    And Kullanici gecerli username'i girer
    And Kullanici gecerli Password'u girer.
    And Kullanici Sign in butonuna tiklar.
    And Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    And Kullanici Description textboxuna Önemli musteri aciklamasini girer.
    Then Kullanici Description'in  hata uyarisi vermedigini goruntuler.
  @US13TC02
  Scenario: Description negative test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    And Kullanici Description textboxunu bos bırakır.
    Then Kullanici This field is required hata uyarisini goruntuler.
  @US13TC03
  Scenario: Balance positive test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    And Kullanici Balance textboxuna bakiye  girer.
    Then Kullanici Balance'in hata uyarisi vermedigini görüntüler.
  @US13TC04
  Scenario: Balance negative test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    And Kullanici Balance textboxunu boş bırakır.
    Then Kullanici This field is required hata uyarısını goruntuler.
  @US13TC05
  Scenario: Account Type test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    Then Kullanici Account Type Dropdownindan bir hesap durumunu secer.

  @US13TC06
  Scenario:Account Status Type test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    Then Kullanici Account Status Type Dropdownindan bir hesap durumunu secer.

  @US13TC07
  Scenario:Employee test
    Given Kullanici   My Operations'a tiklar.
    And Kullanici  Manage Accounts'a tiklar.
    And Kullanici  +Create a new Account'a  tiklar.
    And Kullanici Employee Dropdownindan bir Employee secer.
    Then Kullanici SAVE butonuna tiklar.