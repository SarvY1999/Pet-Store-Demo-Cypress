Feature: Order Fish Feature

    Allows user to Order Fish

    Scenario: Go to Pet Store Login Using the Account created earlier

    Given Go to pet store and Enter the store
    Then Login to the Pet store
    Then Click on Fish Section and Select any fish and add it to cart and proceed to checkout
    Then Verify order details
    Then go to my Account and Verify if order is reflected in My orders or not 