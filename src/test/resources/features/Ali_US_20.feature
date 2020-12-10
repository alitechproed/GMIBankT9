@all @US20
  Feature:System should allow to read all customers info using api end point

    Background: US20 background
      Given verilen endpointi kullan "https://www.gmibank.com/api/tp-customers"
      And Customer bilgilerini java formatinda al

    @US20_TC01
      Scenario: TC_2001 Olusturulan tum Customer bilgilerini al ve dogrula
      And Onaylanmis 20 tane Customer oldugunu dogrula
      And ikinci Customer in tum bilgilerini al
      Then ikinci Customer in ssn numarasinin "321-54-9800" oldugunu dogrula

    @US20_TC02
    Scenario: TC_2002 Tum Customer lari bilgilerini goster ve bire bir dogrula.
      And besinci Customer in firstname inin "John" oldugunu dogrula
      And besinci Customer in email inin "globaluser120101010@gmail.com" oldugunu dogrula
      And ikinci Customer in ID sinin 22175 oldugunu dogrula
      And Son Customer in Soyismini al ve dogrula
