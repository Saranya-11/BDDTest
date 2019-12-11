$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestFile.feature");
formatter.feature({
  "line": 2,
  "name": "Demo Automation Login Check",
  "description": "",
  "id": "demo-automation-login-check",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "demo-automation-login-check;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the demosite URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Skip Sign In button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Check Register page is displayed"
    }
  ],
  "line": 9,
  "name": "Enter the \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Emailaddress as \"\u003cEmailaddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the Phone as \"\u003cPhone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the Gender as \"\u003cGender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select the Country as \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 14,
      "value": "#Then Select The DOB as \u003cYear\u003e and \u003cMonth\u003e and \u003cDay\u003e"
    },
    {
      "line": 15,
      "value": "#Then Enter the Password as \"\u003cPassword\u003e\" and \"\u003cConfirm Password\u003e\""
    },
    {
      "line": 16,
      "value": "#Then Click on Submit"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "demo-automation-login-check;login;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Emailaddress",
        "Phone",
        "Gender",
        "Country",
        "Year",
        "Month",
        "Day",
        "Password",
        "Confirm Password"
      ],
      "line": 18,
      "id": "demo-automation-login-check;login;;1"
    },
    {
      "cells": [
        "Annie",
        "Ray",
        "Annie_R@gmail.com",
        "2125458787",
        "FeMale",
        "India",
        "1960",
        "November",
        "30",
        "Annie_Ray",
        "Annie_Ray"
      ],
      "line": 19,
      "id": "demo-automation-login-check;login;;2"
    },
    {
      "cells": [
        "Mark",
        "Steven",
        "Mark_S@gmail.com",
        "2125458989",
        "Male",
        "India",
        "1987",
        "January",
        "6",
        "Mark_Steven",
        "Mark_Steven"
      ],
      "line": 20,
      "id": "demo-automation-login-check;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login",
  "description": "",
  "id": "demo-automation-login-check;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    },
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the demosite URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Skip Sign In button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Check Register page is displayed"
    }
  ],
  "line": 9,
  "name": "Enter the \"Annie\" and \"Ray\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Emailaddress as \"Annie_R@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the Phone as \"2125458787\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the Gender as \"FeMale\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select the Country as \"India\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Launch()"
});
formatter.result({
  "duration": 15808307258,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.Skip()"
});
formatter.result({
  "duration": 16960331279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annie",
      "offset": 11
    },
    {
      "val": "Ray",
      "offset": 23
    }
  ],
  "location": "stepdef.name(String,String)"
});
formatter.result({
  "duration": 11567925643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annie_R@gmail.com",
      "offset": 27
    }
  ],
  "location": "stepdef.email(String)"
});
formatter.result({
  "duration": 569003105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2125458787",
      "offset": 20
    }
  ],
  "location": "stepdef.phone(String)"
});
formatter.result({
  "duration": 297807909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FeMale",
      "offset": 22
    }
  ],
  "location": "stepdef.gender(String)"
});
formatter.result({
  "duration": 5547775651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 23
    }
  ],
  "location": "stepdef.country(String)"
});
formatter.result({
  "duration": 815108227,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login",
  "description": "",
  "id": "demo-automation-login-check;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    },
    {
      "line": 4,
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the demosite URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Skip Sign In button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then Check Register page is displayed"
    }
  ],
  "line": 9,
  "name": "Enter the \"Mark\" and \"Steven\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the Emailaddress as \"Mark_S@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the Phone as \"2125458989\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select the Gender as \"Male\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select the Country as \"India\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.Launch()"
});
formatter.result({
  "duration": 7185248528,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.Skip()"
});
formatter.result({
  "duration": 22515503177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 11
    },
    {
      "val": "Steven",
      "offset": 22
    }
  ],
  "location": "stepdef.name(String,String)"
});
formatter.result({
  "duration": 10630283281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark_S@gmail.com",
      "offset": 27
    }
  ],
  "location": "stepdef.email(String)"
});
formatter.result({
  "duration": 595043158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2125458989",
      "offset": 20
    }
  ],
  "location": "stepdef.phone(String)"
});
formatter.result({
  "duration": 524285320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 22
    }
  ],
  "location": "stepdef.gender(String)"
});
formatter.result({
  "duration": 5746338246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 23
    }
  ],
  "location": "stepdef.country(String)"
});
formatter.result({
  "duration": 502092468,
  "status": "passed"
});
});