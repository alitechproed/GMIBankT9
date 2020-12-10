@US_27
  Feature: US_27 Sistemin State silmeye musaade etmesi

    @US27_TC01
    Scenario: Silecegimiz State i silmeden once GET ile gosterme
      Given Api adresine GET request gonder "https://www.gmibank.com/api/tp-states/25386"
      Then StatusCode u 200 olup olmadigini kontrol et
      Then response formatinin JSON oldugunu kontrol et
      Then id nin 25386 oldugunu dogrula
      Then response name inin "Centre" oldugunu dogrula

    @US27_TC02
    Scenario: Onceki adimda gordugumuz responsu DELETE ile silme
      Given Verilen API adresine DELETE requesti gonder "https://www.gmibank.com/api/tp-states/25386"
      Then Sildikten sonra Statuscode un 404 oldugunu dogrula
