Feature: Free CRM Login Feature

#With Examples keyword
Scenario Outline: Free CRM Login Test Scenario
Given user is already on login page
When title of the page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
Then clicks on save button
Then close the browser

Examples:
		|  username	|  password | firstname | lastname | position |
		|  naveenk  |  test@123 | Tom 		| Peter    | Manager  |
		|  naveenk  |  test@123 | David 	| Warner   | Director |