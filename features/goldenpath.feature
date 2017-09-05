@sanity
Feature: Sanity Test

@goldenpath
Scenario: Golden Path sanity test for a single delivery order
Given I have logged in with valid credentials
When I have booked the 1st available delivery slot
Then I should see the slot details on the context card
When I search for cola
And I add the first avaialble item on search results page
Then correct item should be added to the trolley
When I checkout the order and continue to payment page
And I provide the valid card details to confirm the order
Then I should see the order confirmation page
When I am on the my orders page
And I cancel the pending order and confirm confirmation
Then the order should be cancelled
When I navigate to the home page
And I sign out
Then I am signed out
