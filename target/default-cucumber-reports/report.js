$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Zubeyde_US_06_07.feature");
formatter.feature({
  "name": "UserInfo bolumu",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UserInfo"
    }
  ]
});
formatter.scenario({
  "name": "Kullanici kayit ayar formunda kayit bilgilerini gormeli",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_01"
    }
  ]
});
formatter.step({
  "name": "GMIBank sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.gmibank_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana sayfada sag ustte ikona tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.ana_sayfada_sag_ustte_ikona_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SignInText buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.signintext_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UserName ve password girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.username_ve_password_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SignIn buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.signin_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User user buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.user_user_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User info secenegini tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.user_info_secenegini_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "FirstName \"User\" oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.firstname_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LastName \"user\" oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.lastname_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email \"user9@gmail.com\" oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Language \"English\" secilmis oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.language_secilmis_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Dil secenegini dogrulama",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_06_TC_02"
    }
  ]
});
formatter.step({
  "name": "ingilizce \u0026\u0026 Turkce dilllerinin \"\u003cLanguages\u003e\" var oldugunu dogrular",
  "keyword": "Then "
});
formatter.examples({
  "name": "Langue",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Languages"
      ]
    },
    {
      "cells": [
        "English"
      ]
    },
    {
      "cells": [
        "Türkçe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Dil secenegini dogrulama",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_02"
    }
  ]
});
formatter.step({
  "name": "ingilizce \u0026\u0026 Turkce dilllerinin \"English\" var oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.ingilizce_Turkce_dilllerinin_var_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Dil secenegini dogrulama",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_02"
    }
  ]
});
formatter.step({
  "name": "ingilizce \u0026\u0026 Turkce dilllerinin \"Türkçe\" var oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.ingilizce_Turkce_dilllerinin_var_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Firstname Update",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_03"
    }
  ]
});
formatter.step({
  "name": "FirstName textboxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.firstname_textboxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "FirstName textboxini siler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.firstname_textboxini_siler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "FirstName textboxina girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.firstname_textboxina_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "FirstName\u0027in \"Isim\" oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.firstname_in_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LastName Update",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_04"
    }
  ]
});
formatter.step({
  "name": "LastName textboxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.lastname_textboxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LastName textboxini siler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.lastname_textboxini_siler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LastName textboxina girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.lastname_textboxina_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LastName\u0027in \"SoyIsim\" oldugunu dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.lastname_in_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Email Update",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_06_TC_05"
    }
  ]
});
formatter.step({
  "name": "Email textboxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email textboxini siler",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxini_siler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email textboxina \"@\" karakteri ve \".com\" uzantisi ile yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxina_karakteri_ve_uzantisi_ile_yazar(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save buttonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.save_buttonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Email Negative Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_07_TC_01"
    }
  ]
});
formatter.step({
  "name": "Email textboxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email texboxina sadece rakam ve harf girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_texboxina_sadece_rakam_ve_harf_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"This field is invalid\" mesaji gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.mesaji_gorur(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email textboxina \"@\"  karakteri girilmeyince",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxina_karakteri_girilmeyince(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email textboxina \".com\" uzantisi girilmeyince",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.email_textboxina_uzantisi_girilmeyince(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"This field is invalid\" mesaji gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.mesaji_gorur(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Language Dropdown Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_07_TC_02"
    }
  ]
});
formatter.step({
  "name": "Sadece Ingilizce ve Turkce dil \"\u003cLanguages\u003e\" secenekleri gorulur",
  "keyword": "Then "
});
formatter.examples({
  "name": "2 Langue",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Languages"
      ]
    },
    {
      "cells": [
        "Türkçe"
      ]
    },
    {
      "cells": [
        "English"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Language Dropdown Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_07_TC_02"
    }
  ]
});
formatter.step({
  "name": "Sadece Ingilizce ve Turkce dil \"Türkçe\" secenekleri gorulur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.sadece_Ingilizce_ve_Turkce_dil_secenekleri_gorulur(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Language Dropdown Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UserInfo"
    },
    {
      "name": "@US_07_TC_02"
    }
  ]
});
formatter.step({
  "name": "Sadece Ingilizce ve Turkce dil \"English\" secenekleri gorulur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Zubeyde_Step_US_06_07.sadece_Ingilizce_ve_Turkce_dil_secenekleri_gorulur(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});