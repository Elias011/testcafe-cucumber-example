@orderItem @t 

Feature: testing order item
  As a user I want to be able to order item

  Background: got to Coolblue home page
    Given navigate to coolblue home page

@order01
  Scenario: navigate to the item page
    When the user click on item
    Then the user should navigate to item page

@order02 
  Scenario: add to shopping cart
  When the user click on item
  And the user add the item to the shopping cart
  Then the user should see a modle dialog

@order03 
Scenario: user remove order 
When the user add item in the cart 
And the user navigate to the shopping cart page
Then the user should be able to remove the item from the cart


