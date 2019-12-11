@LoginFunctionality
Feature: Demo Automation Login Check

@Reg
Scenario Outline: Login
Given Launch the demosite URL
Then click on Skip Sign In button
#Then Check Register page is displayed
Then Enter the "<FirstName>" and "<LastName>" 
And Enter the Emailaddress as "<Emailaddress>" 
Then Enter the Phone as "<Phone>" 
Then Select the Gender as "<Gender>" 
And Select the Country as "<Country>"
#Then Select The DOB as <Year> and <Month> and <Day>
#Then Enter the Password as "<Password>" and "<Confirm Password>"
#Then Click on Submit
Examples:
|FirstName|LastName|Emailaddress|Phone|Gender|Country|Year|Month|Day|Password|Confirm Password|
|Annie|Ray|Annie_R@gmail.com|2125458787|FeMale|India|1960|November|30|Annie_Ray|Annie_Ray|
|Mark|Steven|Mark_S@gmail.com|2125458989|Male|India|1987|January|6|Mark_Steven|Mark_Steven|