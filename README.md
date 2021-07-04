# Recipes Book App

###### Design link
<hr>
https://www.figma.com/file/VQz2NrvK8lPykD91kedoKJ/e-commerce_2?node-id=43%3A2
<hr>

#### Requirements
* Based on design above.
* Using React Router to navigate between pages.
* Using database to fetch recipes and store orders.
* Main Page
    - Clicking on `Get started` navigates to menu page.
    - Navigation menu works.
    - `Get started` navigates to menu.
* Menu
    - `See more` renders an extra row of items.
    - Clicking on menu item, navigates to product page.
    - User can add and delete items in cart.
* Menu / Product page
    - `Add to basket` button works with number in basket shown and delete option.
    - basket icon is updated with quantity.
    - Adding the same product to basket increases quantity.
    - User is limited to adding 9 of same products to the cart.
* Basket
    - user can update quantity for each item.
    - user can remove items from the basket.
    - Price of order auto updates.
    - Submit button, stores orders in db with customer details and ordered items.
    - In the same time add a customer to `customers` list in DB for future mail campaigns. Make sure you don't add a customer twice(email check).
* Mobile
    - Responsive design for mobile viewing.