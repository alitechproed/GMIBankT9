@US029AllDataBase
Feature: DataBase den bilgilerin okunmasi


  Background: create connection
    Given database baglantisi kurulur "jdbc:postgresql://157.230.48.97:5432/gmibank_db" , "techprodb_user" and "Techpro_@126"


  @US029_TC01
  Scenario: US029_TC01 Kullanicilara ait bilgilerin okunmasi ve dogrulanmasi
    Given Kullanicilara ait tum bilgileri veritabanindan alinir
    Then Kullanicilara ait bilgileri dogrular


  @US029_TC02
  Scenario: US029_TC02 Tum ulkerin bilgilerinin okunmasi ve dogrulanmasi
    Given  Tum ulkelerin bilgileri veritabanindan alinir
    Then Tum ulkelerin bilgileri dogrulanir


  @US029_TC03
  Scenario: US029_TC03 ABD ile ilgili tum eyaletlerin alinmasi ve dogrulanmasi
    Given ABD ile ilgili tum eyaletler veritabanindan alinir
    Then ABD ile ilgili tum eyaletler dogrulanir