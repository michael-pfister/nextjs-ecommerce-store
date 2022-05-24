# GraphicsCart

## About
An Ecommerce Store that sells the newest Graphics Cards, typically **the ones that are sold out on release**. (right now, mainly RTX and Radeon RX 6000 Series.)

## Pages
- homepage
  - products page
    - page for each single product
  - Cart page
    - Checkout page
      - Thank You page

### Page Layout
1. header
2. main (~ Pages)
3. footer

## [Exercise](https://github.com/stracciatella27/nextjs-ecommerce-store/issues/1)
Design and develop an ecommerce store using Next.js. It should have the following:

- A Products page (where all the products are listed)
  - Minimum of 4 different products
  - The page should have a relevant `h1` element
  - Each product needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
    - This link will lead to its single product page
  - The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"`
- A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
  - The single product URL needs to contain the `id` (eg. `/products/<product id>`)
  - The product name needs to be directly inside an `h1` element (it should be the only `h1`)
  - The product image needs to be in an `img` element with the HTML attribute `data-test-id="product-image"`
  - The product price (without any currency symbol) needs to be directly inside an element with the HTML attribute `data-test-id="product-price"`
  - The quantity input needs to have the HTML attribute `data-test-id="product-quantity"`
    - The starting quantity should be `1`
  - The add to cart button needs to have the HTML attribute `data-test-id="product-add-to-cart"`
  - Negative quantity values should not be possible
- A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
  - Each product needs to be contained in an element with the HTML attribute `data-test-id="cart-product-<product id>"`
    - Inside the product element, the product name and price need to be be visible
    - Inside the product element, the quantity needs to be visible, as the only content in an element with the HTML attribute `data-test-id="cart-product-quantity-<product id>"`
    - Inside the product element, the remove button needs to have the HTML attribute `data-test-id="cart-product-remove-<product id>"`
  - The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute `data-test-id="cart-total"`
  - The checkout button needs to have the HTML attribute `data-test-id="cart-checkout"`
  - Negative quantity values should not be possible
- A Checkout page which shows the total and asks for shipping and payment information (when you click on the "Checkout" button on the Cart page it navigates to the checkout page)
  - The first name input needs to have the HTML attribute `data-test-id="checkout-first-name"`
  - The last name input needs to have the HTML attribute `data-test-id="checkout-last-name"`
  - The email input needs to have the HTML attribute `data-test-id="checkout-email"`
  - The address input needs to have the HTML attribute `data-test-id="checkout-address"`
  - The city input needs to have the HTML attribute `data-test-id="checkout-city"`
  - The postal code input needs to have the HTML attribute `data-test-id="checkout-postal-code"`
  - The country input needs to have the HTML attribute `data-test-id="checkout-country"`
  - The credit card input needs to have the HTML attribute `data-test-id="checkout-credit-card"`
  - The expiration date input needs to have the HTML attribute `data-test-id="checkout-expiration-date"`
  - The security code input needs to have the HTML attribute `data-test-id="checkout-security-code"`
  - The form should prevent submission with any of the above fields being empty
  - The Confirm Order button needs to have the HTML attribute `data-test-id="checkout-confirm-order"`
  - Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
- A Thank You page after a checkout has been completed
  - The page title should include `Thank you for your order`
- A header with a link to the Cart, showing the number of items in the cart
  - This header needs to appear on all pages
  - The header needs to use the HTML `<header>` element
  - The number of items is the sum of the quantity of all products (eg. if you have 2 apples and 3 bananas in your cart, the number of items is 5)
  - The number of items needs to update when you add or remove items from the cart
  - The link needs to have an HTML attribute `data-test-id="cart-link"`
  - The count needs to be contained in an element with the HTML attribute `data-test-id="cart-count"`

This project is to build an Ecommerce store on your own - don't use an all-in-one solution like [Next.js Commerce](https://nextjs.org/commerce).

### Cookies

- Use a cookie called `cart` to store information about what the user has added to their cart
  - Security: Prevent the user from making changes to cart data they shouldn't be able to (eg. prices). Remember: users can edit any information that is in the cookie.

### Database

- Create a PostgreSQL database and table(s)
- Connect to and query information from this database

### TypeScript / JSDoc

- Write at least 2 pages and 2 components in TypeScript or JSDoc (type the React props like in [the cheatsheet](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-typescript-jsdoc/))

### Tests

This project should also include tests written for the following functionality:

- E2E: Add to cart, change quantity and remove from cart
- E2E: Checkout flow, payment page, thank you page
- Unit: Test functions for adding and removing info from cookie
- Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
- Unit: Test cart sum function
- Set up GitHub Actions to automatically test your code

### SEO

- Add titles to all pages
- Add meta descriptions to all pages

### Deploying

- Deploy to [Heroku](https://www.heroku.com/) ([cheatsheet](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-deployment/#deploying-a-nextjs--postgresql-app-to-heroku))

### Documentation

- Create a readme with:
  - Title
  - Description
  - List of all technologies used
  - 1 or 2 screenshots
  - Setup instructions
  - Deployment instructions

### Stretch goals

- Allow changing quantity of items in the cart
- Add a unique `slug` to each product to allow for URLs like `/products/<product slug>`
  - Also change all of the `data-test-id` attributes on all pages to use the `slug` instead of the `id`, eg. on the Products page, `data-test-id="product-<product slug>"`
  - A `slug` is a URL-friendly string that is used to identify a product (eg. "apple-iphone-11-pro-max") - hyphens instead of spaces, all lowercase, no special characters
- Add validation for data entered by the user
  - Add frontend validation with error messages
  - Add server-side validation to check the information being submitted by the user and return errors
  - Write unit test for server-side validation functions
- Save the cart data to a database table in addition to a cookie (eg. using a join table)
- Add search functionality
- Make authentication system with users
- Allow admin login to edit and delete products
- Use Next.js API routes for returning information from the database
- Use GraphQL to send information between React and the backend
- Set up Stripe as a payment handler between the Checkout and Thank You page
  - Don't skip creating the full Checkout page, including all shipping and payment form fields - this is still a required part of the project
  - To add Stripe to the checkout page, a button or anchor element should be visible with the HTML attribute `data-test-id="stripe-pay"`
  - Clicking on this button should send the user to a Stripe payment form, where it accepts the credit card details (this page needs to accept the `4242 4242 4242 4242` Stripe test card number)
  - Upon submitting the Stripe payment form, the user needs to be directed to the Thank You page on your website
- Right after [creating your first (empty) Git commit](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-command-line/#4-create-and-push-an-initial-commit), create a new branch. Use this branch to [open a pull request on GitHub](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#opening-pull-requests)
- Accessibility: Fully keyboard- and screenreader-accessible
- Create a favicon that identifies your app: (see [Generating and Adding Favicons](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-design-ux/#generating-and-adding-favicons))
- Test and further improve your SEO (meta tags, performance, image optimization, sitemaps, etc)

### Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Heroku deployed website
- [ ] [Drone bot](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#writing-commit-messages))
