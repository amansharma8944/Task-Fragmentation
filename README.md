I have created 4 components.  

1. BurnPageContainer.ts:
                 a.>  Serves as the main layout component that wraps the entire burn page, including the dashboard layout, chain selector, and toast notifications.
                 Reason: Isolating the layout allows for easy adjustments to the page's structure without touching the business logic of individual features.

2. BurnInfoBox.ts: 
                a.> Displays information about the token burning process, including the input for the burn amount and the button to execute the burn.
                Reason: Centralizes user input and action for burning tokens, making it clear where users can interact to perform the burning operation.
3.  BurnStats.ts: 
                a.>  Shows the statistics related to the supply of the tokens, such as the original supply, burnt tokens, and circulating tokens.
                Reason: Separating statistics display helps in managing the dynamic data presentation cleanly, especially when data needs to be updated or formatted.
4.  TransactionList.ts:
                a.> Lists all the burn transactions made by the user.
                Reason: Improves the manageability of transaction data and presentation, enabling easy updates and potentially filtering or sorting features in the future.

