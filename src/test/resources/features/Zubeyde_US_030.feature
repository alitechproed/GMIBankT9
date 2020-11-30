@US_030
Feature: US_30 Tüm kullanıcılar (kullanıcı, çalışan, manager veya admin) bir pdf dosyası olarak yazdırılmalıdır

  Scenario: Tüm kullanıcıların bilgilerini bir pdf belgesinde Ad, soyad ve rol olarak bulundurulmalı

    Given REST API'a bir GET isteği gönder
    And  HTTP Durum Kodu 200 ve contentType JSON olmalıdır
    Then Ad, soyad ve rol gibi tüm kullanıcıların bilgileri bir pdf belgesinde olmalıdır


