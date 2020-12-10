$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Ali_US_27_delete.feature");
formatter.feature({
  "name": "US_27 Sistemin State silmeye musaade etmesi",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_27"
    }
  ]
});
formatter.scenario({
  "name": "Silecegimiz State i silmeden once GET ile gosterme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@US27_TC01"
    }
  ]
});
formatter.step({
  "name": "Api adresine GET request gonder \"https://www.gmibank.com/api/tp-states/25386\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.api_adresine_GET_request_gonder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StatusCode u 200 olup olmadigini kontrol et",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.statuscode_u_olup_olmadigini_kontrol_et(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response formatinin JSON oldugunu kontrol et",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.response_formatinin_JSON_oldugunu_kontrol_et()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "id nin 25386 oldugunu dogrula",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.id_nin_oldugunu_dogrula(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response name inin \"Centre\" oldugunu dogrula",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.response_name_inin_oldugunu_dogrula(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Onceki adimda gordugumuz responsu DELETE ile silme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@US27_TC02"
    }
  ]
});
formatter.step({
  "name": "Verilen API adresine DELETE requesti gonder \"https://www.gmibank.com/api/tp-states/25386\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.verilen_API_adresine_DELETE_requesti_gonder(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sildikten sonra Statuscode un 404 oldugunu dogrula",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Ali27.sildikten_sonra_Statuscode_un_oldugunu_dogrula(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank.stepdefinitions.Ali27.sildikten_sonra_Statuscode_un_oldugunu_dogrula(Ali27.java:78)\r\n\tat ✽.Sildikten sonra Statuscode un 404 oldugunu dogrula(file:///C:/Users/alica/eclipse-workspace/GMIBankT9/src/test/resources/features/Ali_US_27_delete.feature:15)\r\n",
  "status": "failed"
});
});