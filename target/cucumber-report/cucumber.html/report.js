$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3147676600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User navigates saucedemo page and complete the item purchas",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I filter the products by Price \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter details firstname \"Lalita\", lastName \"Patel\" and zipPostalCode \"740011\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseSteps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 92977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "PurchaseSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 202303200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 110713400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 32
    }
  ],
  "location": "PurchaseSteps.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 175503700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 127000500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 57696700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 58987800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalita",
      "offset": 27
    },
    {
      "val": "Patel",
      "offset": 46
    },
    {
      "val": "740011",
      "offset": 72
    }
  ],
  "location": "PurchaseSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 207629400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 55731000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 48648900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iShouldBeAbleToSeeMessageThankYouForYourOrder()"
});
formatter.result({
  "duration": 27696800,
  "status": "passed"
});
formatter.after({
  "duration": 698497800,
  "status": "passed"
});
});