$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium_Hybrid_Framework/Test Scripts/cucumberFrameworkProject/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#With Examples keyword"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 17,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Warner",
        "Director"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 20308583500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 94516002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2433311666,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_buttons()"
});
formatter.result({
  "duration": 4574556257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 11814714,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 293344281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 30
    },
    {
      "val": "Peter",
      "offset": 40
    },
    {
      "val": "Manager",
      "offset": 52
    }
  ],
  "location": "LoginStepDefination.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 2305769088,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_save_button()"
});
formatter.result({
  "duration": 156193018,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browse()"
});
formatter.result({
  "duration": 1639936025,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contacts details \"David\" and \"Warner\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11315709619,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 773066375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 438149650,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_buttons()"
});
formatter.result({
  "duration": 5425445453,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 18552539,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 298228448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 30
    },
    {
      "val": "Warner",
      "offset": 42
    },
    {
      "val": "Director",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1660556040,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_save_button()"
});
formatter.result({
  "duration": 175639600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browse()"
});
formatter.result({
  "duration": 1629437289,
  "status": "passed"
});
});