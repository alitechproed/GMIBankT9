$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/db.feature");
formatter.feature({
  "name": "Database Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.scenario({
  "name": "TC02_ Kullanici Database baglantisini konrtrol eder/",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "Kullanici veritabanina baglanir.",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.DBStepDefinitions.kullanici_veritabanina_baglanir()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ALICAN\u0027, ip: \u0027192.168.1.21\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\alica\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50363}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 256e48ffa003188f661f1f190e943206\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat gmibank.stepdefinitions.DBStepDefinitions.kullanici_veritabanina_baglanir(DBStepDefinitions.java:25)\r\n\tat ✽.Kullanici veritabanina baglanir.(file:///C:/Users/alica/eclipse-workspace/GMIBankT9/src/test/resources/features/db.feature:4)\r\n",
  "status": "failed"
});
});