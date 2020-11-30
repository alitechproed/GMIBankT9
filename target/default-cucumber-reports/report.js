$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Zubeyde_US_030.feature");
formatter.feature({
  "name": "US_30 Tüm kullanıcılar (kullanıcı, çalışan, manager veya admin) bir pdf dosyası olarak yazdırılmalıdır",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_030"
    }
  ]
});
formatter.scenario({
  "name": "Tüm kullanıcıların bilgilerini bir pdf belgesinde Ad, soyad ve rol olarak bulundurulmalı",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_030"
    }
  ]
});
formatter.step({
  "name": "REST API\u0027a bir GET isteği gönder",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "HTTP Durum Kodu 200 ve contentType JSON olmalıdır",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Ad, soyad ve rol gibi tüm kullanıcıların bilgileri bir pdf belgesinde olmalıdır",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});