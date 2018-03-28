Feature: Free CRM Login Feature

#Without Examples keyword
#Scenario: Free CRM Login Test Scenario
#Given user is already on login page
#When title of the page is Free CRM
#Then user enters "naveenk" and "test@123"
#Then user clicks on login button
#Then user is on home page


#With Examples keyword
Scenario Outline: Free CRM Login Test Scenario
Given user is already on login page
When title of the page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page

Examples:
		|  username	|  password |
		|  naveenk  |  test@123 |
		|  tom      |  test456  |