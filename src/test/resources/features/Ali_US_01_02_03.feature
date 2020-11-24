@all
Feature: System should allow any user to register with valid credentials validating the success message

  @US01TC01 @US01
  Scenario: US01TC01 gecerli SSN test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak SSN textboxina gecerli ssn numarasini girer
    Then Kullanici bir user olarak SSN textboxinin bir hata uyarisi vermedigini goruntuler

  @US01TC02 @US01
  Scenario: US01TC02 gecersiz SSN test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak SSN hata mesajini goruntuler
    Then Kullanici bir user olarak SSN hata mesajini goruntuler

  @US01TC03 @US01
  Scenario:US01TC03 gecerli first name positive test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak First Name textboxina Ali ismini girer
    Then Kullanici bir user olarak First Name textboxinin bir hata uyarisi vermedigini goruntuler

  @US01TC04 @US01
  Scenario:US01TC04 Bos first name negative test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak First Name textboxini bos birakir
    Then Kullanici bir user olarak Your First Name is required First Name hata uyarisini goruntuler

  @US01TC05 @US01
  Scenario:US01TC05 gecerli last name positive test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Last Name textboxina Can soyismini girer
    Then Kullanici bir user olarak Last Name textboxinin bir hata mesaji vermedigini goruntuler

  @US01TC06 @US01
  Scenario:US01TC06 bos last name negative test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Last Name textboxini bos birakir
    Then Kullanici bir user olarak Your Last Name is required   Last Name hata mesajini goruntuler

  @US01TC07
  Scenario:US01TC07 gecerli Adress test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Address textboxina  Ali mah. Can cad. No:12. Istanbul Tuzla  adresini girer
    Then Kullanici bir user olarak Address textboxinin bir hata mesaji vermedigini goruntuler

  @US01TC08
  Scenario:US01TC08 gecerli mobile phone number test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak Mobile Phone Number textboxina istenilen formatta cep telefonu numarasini girer
    Then Kullanici bir user olarak Mobile Phone Number textboxinin bir hata mesaji vermedigini goruntuler

  @US01TC09
  Scenario:US01TC09 gecersiz mobile phone number Negative test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan cep telefonu numarasini girer
    Then Kullanici bir user olarak "Your mobile phone number is invalid" mobile phone number hata mesajini goruntuler

  @US01TC10
  Scenario:US01TC10 gecerli kullanici adi test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Username textboxina  Elliyedi  kullanici adini girer
    Then Kullanici bir user olarak Username textboxinin bir hata mesaji vermedigini goruntuler

  @US01TC11
  Scenario:US01TC11 gecersiz kullanici adi test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak Username textboxina  sadece sayilardan ve karakterden olusan kullanici adini girer
    Then Kullanici bir user olarak Username textboxinin cerceve renginin kirmizi oldugunu goruntuler


  @US01TC12
  Scenario:US01TC12 gecerli email test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Email textboxina foreachloop2022@gmail.com mail adresini girer
    Then Kullanici bir user olarak Email textboxinin bir hata mesaji vermedigini goruntuler


#  //===============@@@@@@@@@=================@@@@@@@@@======================@@@@@@@@@===================@@@@@@@@@=======//


  @US02TC01
  Scenario:US02TC01 Basarili Kayit olma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak SSN textboxina dogru ssn numarasini girer
    And Kullanici bir user olarak First Name textboxina ismini girer
    And Kullanici bir user olarak Last Name textboxina soyismini girer
    And Kullanici bir user olarak Address textboxina adresini girer
    And Kullanici bir user olarak Mobile Phone Number textboxina cep telefonu numarasini girer
    And Kullanici bir user olarak Username textboxina kullanici adini girer
    And Kullanici bir user olarak Email textboxina mail adresini girer
    And Kullanici bir user olarak New password textboxina sifresini girer
    And Kullanici bir user olarak New password confirmation sifresini girer
    And Kullanici bir user olarak Register butonuna tiklar
    Then Kullanici bir user olarak basarili bir kayit olusturulduguna dair mesaj goruntuler

  @US02TC02
  Scenario:US02TC02 Basarisiz Kayit olma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak SSN textboxina dogru ssn numarasini girer
    And Kullanici bir user olarak First Name textboxina herhangi bir sey girmez
    And Kullanici bir user olarak Last Name textboxina soyismini girer
    And Kullanici bir user olarak Address textboxina adresini girer
    And Kullanici bir user olarak Mobile Phone Number textboxina cep telefonu numarasini girer
    And Kullanici bir user olarak Username textboxina kullanici adini girer
    And Kullanici bir user olarak Email textboxina mail adresini girer
    And Kullanici bir user olarak New password textboxina sifresini girer
    And Kullanici bir user olarak New password confirmation sifresini girer
    And Kullanici bir user olarak Register butonuna tiklar
    Then Kullanici bir user olarak basarisiz bir kayit olusturulduguna dair mesaj goruntuler

  @US02TC03
  Scenario:US02TC03 gecersiz SSN test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak SSN hata mesajini goruntuler
    Then Kullanici bir user olarak SSN hata mesajini goruntuler

  @US02TC04
  Scenario:US02TC04 gecersiz mobile phone number Negative test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan cep telefonu numarasini girer
    Then Kullanici bir user olarak "Your mobile phone number is invalid" mobile phone number hata mesajini goruntuler

  @US02TC05
  Scenario:US02TC05 gecersiz email test
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    Given Kullanici bir user olarak Email textboxina yanlis mail adresini girer
    Then Kullanici bir user olarak Email textboxinin bir hata mesaji goruntulenir


    #  //===============@@@@@@@@@=================@@@@@@@@@======================@@@@@@@@@===================@@@@@@@@@=======//


  @US03TC01
  Scenario Outline:US03TC01 Guclu password olusturma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak New password textboxina kucuk harflerle "<password>" sifresini girer (bir buyuk harf, en az yedi karakter, bir ozel karakter ve bir rakamdan olusan)
    Then Kullanici sifrenin guclu oldugunu yesil checkbox tan gorur.

    Examples: user datas
      | password |
      | Deneme1+ |

  @US03TC02
  Scenario Outline:US03TC02 Zayif password olusturma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak New password textboxina kucuk harflerle "<password>" sifresini girer. bir buyuk harf
    Then Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.

    Examples: user datas
      | password |
      | Denemek |

  @US03TC03
  Scenario Outline:US03TC03 Zayif password olusturma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak New password textboxina kucuk harflerle "<password>" sifresini girer, tek rakam
    Then Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.

    Examples: user datas
      | password |
      | deneme1 |

  @US03TC04
  Scenario Outline:US03TC04 Zayif password olusturma
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar
    And Kullanici bir user olarak New password textboxina kucuk harflerle "<password>" sifresini girer. bir ozel karakter
    Then Kullanici sifrenin zayif oldugunu turuncu checkbox tan gorur.

    Examples: user datas
      | password |
      | deneme+ |

