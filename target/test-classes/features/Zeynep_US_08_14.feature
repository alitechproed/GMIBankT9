@feature
Feature: kullanici eski sifre ile giris yapamaz
@US08TC01
Scenario: TC01_Create password
    Given Kullanici gmibank adresine gider
    And  Kullanici sag ust kosedeki ok'a tiklar
    And    Kullanici acilan menude Sign in'e tiklar
  And  Kullanici  username ve passwordu girer
  And  kullanici Sign in'e tiklar
  And  Kullanici  sag ust kosedeki isim soyisim'e tiklar
  And    Kullanici acilan menude Password'e tiklar
  And    Kullanici Current password kutusuna simdiki passwordu girer
    And    New password kutusuna en az bir buyuk harf kullanarak yeni password girer
    Then   Kullanici Password strenght'teki turuncu rengi gorur

@US08TC02
  Scenario: TC02_Create password
  And  Kullanici  sag ust kosedeki isim soyisim'e tiklar
  And    Kullanici acilan menude Password'e tiklar
  And    Kullanici Current password kutusuna simdiki passwordu girer
  And    New password kutusuna en az bir rakam kullanarak yeni password girer
  Then    Kullanici Password strenght'teki yesil rengi gorur

@US08TC03
  Scenario: TC03_Create password
  And    Kullanici  sag ust kosedeki isim soyisim'e tiklar
  And    Kullanici acilan menude Password'e tiklar
  And    Kullanici Current password kutusuna simdiki passwordu girer
  And     New password kutusuna en az bir ozel karakter kullanarak yeni password girer
  Then    Kullanici Password strenght'teki renk degisimini gorur

@US08TC04
 Scenario: TC04_Create password
  And    Kullanici  sag ust kosedeki isim soyisim'e tiklar
  And    Kullanici acilan menude Password'e tiklar
  And    Kullanici Current password kutusuna simdiki passwordu girer
  And     New password kutusuna en az 7 karakter kullanarak yeni password girer
  And   Kullanici Password strenght'teki degisimi gorur
  And   kullanici save butonuna tiklar
  And   Yeni password onaylanir
  And    Kullanici tekrar sag ustte isim soyisim'e tiklar
  And    Kullanici acilan menude Sign out'a  tiklar
  And    Kullanici acilan sayfada SIGN IN AGAIN butonuna tiklar
  And    Usernam'i girer
  And    Kullanici Eski password'u girer
  Then    Kullanici eski password ile giris yaptiginda Failed to sign in! mesajini gorur


 # //=============================================================================

@US14TC01
 Scenario: TC01_Create date
  Given  Kullanici GMIBANK adresine gider
  And     Kullanici sag ust kosedeki ikon'a tiklar
  And     Kullanici  SignIN'e tiklar
  And  Kullanici  Username ve Passwordu girer
  And     kullanici SignIn'e tiklar
  And    Kullanici My Operations secenegine tiklar
  And    Kullanici acilan menuden Manage Accounts'a tiklar
 And   kullanici sag ust kosedeki Create a new Account butonuna tiklar
  And   Kullanici Create date kutusuna ay gun yil ve saat girer
  And Kullanici  Closed Date kutusuna ay gun yil ve saat girer
  Then Kullanici Back butonuna tiklar

@US14TC02
  Scenario: TC02_Create date
    Given Kullanici Create a new Account buttonuna tiklar
    And   Kullanici Create date kutusuna gecmis ay gun yil ve saat girer
    Then  Kullanici Closed date kutusuna gecmis ay gun yil ve saat girer



























