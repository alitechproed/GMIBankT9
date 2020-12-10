@uS15
Feature: uS_15
  @tc01
  Scenario: US_15_TC_01_Balance nin gorunurlugunu kontrol
<<<<<<< HEAD
    Given Kullanici gmibanka adresine gider
=======
    Given Kullanici gmibank adresine gider1
>>>>>>> master
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici “Sign in” butonuna tiklar
    And Kullanici “Username” username girer,“Password” kutusuna password girer,“Sign in” butonuna tiklar
    And Kullanici “My Operations” a tiklar
    And Kullanici acilan menuden Manage Accounts linkine tiklar
    Then Balance nin gorunurlugunu kontrol eder.
  @tc02
  Scenario: US_15_TC_02_Account Types nin gorunurlugunu kontrol

    And Kullanici “My Operations” a tiklar
    And Kullanici acilan menuden Manage Accounts linkine tiklar
    Then Account Types nin gorunurlugunu kontrol eder.
  @tc03
  Scenario: US_15_TC_03_Account Types nin gorunurlugunu kontrol

    And Kullanici “My Operations” a tiklar
    And Kullanici acilan menuden Manage Accounts linkine tiklar
    And Kullanici “View” a tiklar
    Then Islemin gorundugunu kontrol eder
