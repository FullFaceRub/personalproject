## Audiophile

In my time with DevMountain we had to create a full-stack web application as a personal project with a little bit of help from mentors. I chose to build a fully functioning eCommerce site with products coming from one of my favorite companies Bowers & Wilkins. The technologies that I used were mainly Reactjs, PostgreSQL, and Nodejs. There are other technologies that I used as well that will be detailed in the body of this ReadMe.

Live URL: [Audiophile](https://audiophile.dan-bury.com/)

## Table of Contents

- [Learning](#learning)
- [FrontEnd Views](#frontend-views)
  - [Home](#home)
  - [Navigation](#navigation)
  - [Auth0 Login](#auth0-login)
  - [Search Input](#search-input)
  - [Search Results](#search-results)
  - [About](#about)
  - [Inspiration](#inspiration)
  - [Product Category](#product-category)
  - [Product List](#product-list)
  - [Single Product](#single-product)
  - [Car Audio](#car-audio)
  - [Product Tabs](#product-tabs)
  - [Account](#account)
  - [Cart](#cart)
  - [Checkout](#checkout)
- [Payment Controller Endpoints](#payment-controller-endpoints)
  - [Payment](#payment)
- [BW Controller Endpoints](#bw-controller-endpoints)
  - [Get Category](#get-category)
  - [Get Product](#get-product)
  - [Search Product](#search-product)
  - [Add to Cart](#add-to-cart)
  - [Get Cart](#get-cart)
  - [Get Cart Total](#get-cart-total)
  - [Change Quantity](#change-quantity)
  - [Remove from Cart](#remove-from-cart)
  - [Get Orders](#get-orders)
- [Database Queries](#database-queries)
  - [addcustomer](#addcustomer)
  - [addtocart](#addtocart)
  - [buildcartstable](#buildcartstable)
  - [buildcategoriestable](#buildcategoriestable)
  - [buildproductdatabase](#buildproductdatabase)
  - [changequantity](#changequantity)
  - [clearcart](#clearcart)
  - [createcart](#createcart)
  - [createcustomerdb](#createcustomerdb)
  - [createinvoice](#createinvoice)
  - [createinvoiceline](#createinvoiceline)
  - [getcart](#getcart)
  - [getcarttotal](#getcarttotal)
  - [getinvoices](#getinvoices)
  - [getproductprice](#getproductprice)
  - [readcustomer](#readcustomer)
  - [readproductcategory](#readproductcategory)
  - [readsessioncustomer](#readsessioncustomer)
  - [readsingleproduct](#readsingleproduct)
  - [removefromcart](#removefromcart)
  - [searchreadproduct](#searchreadproduct)
  - [updatecart](#updatecart)

## Learning

Before starting this project, I did not know how to do anything really besides write functions and declare variables. I knew a little bit about passing props from parent components to child components with the flux pattern. Building this project made me fall in love with coding and web development because I was finally solving problems that I created or coming up to solutions for something that I wanted to build. One of the biggest pieces of technology that I absolutely had to learn for this project to work how I wanted it to work was [Redux](#redux). Without [Redux](#redux) the project would have taken so much more time and would not have worked as smoothly as it does now.

The `Array.map` prototype function is used throughout the entire project and it results in the site being very dynamic no matter how many products are in the database.

I also learned a lot about organization and as I look back through my code and write this ReadMe I realize that I had no organization at the start of it but I hope you look past it and find the way that I learned.

## FrontEnd Views

The design aspects of the website are greatly inspired by the products of Bowers and Wilkins. I have also added quite a bit of small animations in order to give the customer feedback as they interact with the site.

### Home

The home page is simply a display of a company slogan that I unofficially wrote for Bowers and Wilkins and it is actually a line that I used while selling these speakers in my previous career as a home theater designer.

The background is an image of the [800 D3](audiophile.dan-bury.com/#/product/2). I used a radial gradient in the form of an ellipse in CSS to give the effect that it has on the screen.

### Navigation

The navbar at the top of the screen is fixed to show at all times. The logo is a link to the home page along with the actual Home link. The links navigate to each of the respective pages through `HashRouter` and the library `react-router-dom`.

When you hover over each of the links, a line will grow to the length of the link to give feedback that it is in fact a link. 

### Auth0 Login

Upon clicking the link labeled `Login`, you will be prompted to login through Auth0. The link redirects you to Auth0 for the login process. This was a more secure approach for us to learn during DevMountain because encryption and user security is something that could be taught for an entire 12 weeks course by itself.

The Navigation bar uses conditional rendering to show if a user is logged in or not by switching the `Login` link with an `Account` link. The `Account` link obivously will take you to the account page. It also has cart icon with a chip that updates as you add/remove products to/from your cart. This is one of the components that requires [Redux](#redux) to work. Clicking on the cart icon with take you to the [Cart](#cart).

### Search Input

The `Search Input` is ever present at the top of the screen. Using the [Search Product](#search-product) endpoint, you are able to search through the product database on the backend. Search parameters can include anything within the product name, description, or features. I encourage you to type in `diamond` and click the search icon to find all of the products that have diamonds in them.

### Search Results

Upon clicking the search icon, the app routes the customer to a Search Results page.

During the `componentDidMount` lifecycle method, the component fires an HTTP request through [Redux](#redux) to `get` the search results from the `req.params` that are sent from the search input box. The search results come back from the backend in the form of an array. That array is mapped through in the `render` method to display the requested results. 

If another product search happens while on the search results page, the `compenentWillReceiveProps` lifecycle updates the response array with another HTTP request. The `render` method then maps through the array again to display the new information. 

CSS styling was used to give customer feedback on what they are hovering over with their cursor. 

### About

The About page is my favorite design page. 

First, it has a subnav that allows you to click between the company history and contact information. That isn't the exciting part.

The exciting part is when you scroll down on the About page. The content is an animated timeline of the company history. I was able to do this with an outside library called `animate-on-scroll`. The years fade in to view while each specific event slides in.

### Inspiration

I built this page because I wanted to learn about `masonry` in CSS. To get the images, the component maps through an array of image file paths that it receives from state. I originally had it build to `get` the file paths from the database on the backend but it slowed down the page to a crawl so it isn't dynamic when compared to the rest of the site.

Something else that I really like about the page that is a little easter egg is the background of the masonry pictures. That is a repeating image of a white marble surface with a slightly opaque gray color over the top of it. 

### Product Category

This page is a simple product category selection page for the user to be able to browse through products on the site.

### Product List

Much like the [Search Results](#search-results) page, the product list will use HTTP requests, [Redux](#redux) and a mapping function to display a list of products on the page with summary information of each product. This information is populated dynamically from the database based on the product category. All prices were formatted with regular expressions to show as a readable currency figure.

If the Car Audio page is the one selected from the product category page, the resulting information is slightly different because the link routes to a different component. The reason for this is, Bowers and Wilkins does not sell cars but still wants customers to know about the cars that have their speakers installed.

CSS styling animations were implemented to give customer feedback on what they are hovering over with their cursor. 

### Single Product

Depending on which product is selected from the [Product List](#product-list) page, the customer will be routed to that single product page. This is done through accessing `this.props.match.params` in React and `react-router-dom`. 

During the `componentDidMount` lifecycle method, the component sends `this.props.match.params.product` to the backend through an HTTP request and [Redux](#redux) to `get` the specific product object.

The `render` method maps through the object to display the information specific to the product.

The `Add to Cart` button on the product page checks to see if there is a user logged in. If there isn't a user logged in, it sends the current user to [Auth0 Login](#auth0-login). If it does see that there is a logged in user, it checks the database to see if the product already exists in the user's cart. If it does, it `updates` the quantity of that item in the cart. Otherwise, it `posts` the new item and quantity to the cart. If there is no quantity in the quantity field, the user is prompted to enter a quantity before adding to cart.

The table on the bottom right of the page is referred to as [Product Tabs](#product-tabs) below.

### Car Audio

A different product page is the Car Audio page. It simply shows a description of the Bowers and Wilkins audio system in the car and has a button the assigns the `window.location` to a google search for a car dealership with that car model near the user.

### Product Tabs

The Product Tabs are conditionally rendered based on state in the [Single Product](#single-product) page/component. It receives information dynamically from the database through [Redux](#redux) and the parent component through a flux pattern of passing props as state changes.

### Account

The Account page displays past orders for the user that is logged in. This page is not accessible unless a user is logged in because of the endpoint on the backend. This was a fun page to build because of the data structure coming from the backend. Please refer to the [Get Orders](#get-orders) endpoint to see that function.

Data Structure example:

```
[
  {
  invoiceDate:"2018-01-18T07:00:00.000Z",
  invoiceNumber:11,
  invoicelines:[
      {
          image:"/images/2.png",
          invoiceLine:29,
          price:null,
          product:"800 D3",
          quantity:2
      },
      {
          image:"/images/17.jpg",
          invoiceLine:30,
          price:null,
          product:"HTM72 S2",
          quantity:1
      },
      {
          image:"/images/15.jpg",
          invoiceLine:31,
          price:null,
          product:"707 S2",
          quantity:1
      }
  ],
  total:"31999.96"
  },
  {},
  ...
]
```

This page is unique because I had to use two mapping functions to display the invoices and then the invoice lines underneath each respective invoice.

### Cart

The Cart updates dynamically as the user adds and removes products from the cart. As you click the `Remove` button, it checks to see if the quantity would be 0 and `deletes` it from the database if so. The total on the screen updates dynamically based on the products and their quantities in the database. 

The [Checkout](#checkout) button is only displayed if there are items in the cart.

### Checkout

The Checkout button launches a modal through the library `react-modal`. The modal shows a shipping information form as well as the order total that is received through props from the Cart and [Redux](#redux). At the bottom of the form, a button `Pay with Card` is shown that launches the `onToken` method for `-react-stripe-checkout`. It is disabled until all shipping information fields are filled in. Once payment information is entered and the pay button on the Stripe Token is clicked, a progress modal opens while the payment is processed. Upon successful payment, a new success modal opens thanking the user for the order and the cart is cleared.

If you would like to test this process, please fill in the shipping information with anything that you would like. For the email field for stripe enter in `d@d.com`. Card number `4242 4242 4242 4242`. Expiration can be any future date and and 3 digit code for the security number.

## Payment Controller Endpoints

### `Payment`

This endpoint receives shipping information, customer cart and order total from `req.body`. It generates a date for the order, converts the total to pennies,  and sends the amount of pennies to my `Stripe` account. It will also invoke a few database functions:

* [createinvoice](#createinvoice)
* [createinvoiceline](#createinvoiceline)
* [clearcart](#clearcart)
* [getcart](#getcart)
* [getcarttotal](#getcarttotal)

## BW Controller Endpoints

### `Get Category`

Receives `category id` from `req.params` and returns an array of products through invoking a database function:

* [readproductcategory](#readproductcategory)

### `Get Product`

Receives `product id` from `req.params` and returns a product object through invoking a database function:

* [readsingleproduct](#readsingleproduct)

### `Search Product`

Receives a query from `req.params`, standardizes capitalization and returns an array of products through invoking a database function:

* [searchreadproduct](#searchreadproduct)

### `Get Cart`

Receives `user id` from `req.params` and returns a cart array of product objects through invoking a database function:

* [getcart](#getcart)

### `Get Cart Total`

Receives `user id` from `req.params` and returns a total through invoking a database function:

* [getcarttotal](#getcarttotal)

### `Add to Cart`

Receives `user id`, `product id`, and `quantity` from `req.params`. It first invokes [getcart](#getcart) from the database to see if the `product id` is in the cart. If it is, it invokes [changequantity](#changequantity) on the database. Otherwise, it invokes [addtocart](#addtocart) as a database function.

### `Change Quantity`

Receives `user id`, `product id`, and `quantity` from `req.params`. It updates the quantity of a certain product in a user's cart and returns the cart from the database by invoking the following database functions:

* [changequantity](#changequantity)
* [getcart](#getcart)
* [getcarttotal](#getcarttotal)

### `Remove from Cart`

Receives `user id` and `product id` from `req.params`. It returns a new cart after removing an item from the cart by invoking database functions:

* [removefromcart](#removefromcart)
* [getcart](#getcart)
* [getcarttotal](#getcarttotal)

### `Get Orders`

Receives `user id` from `req.params` and returns that user's past orders.

First it invokes a database function [getinvoices](#getinvoices) that returns and array of invoicelines. The function loops through the array. With each instance, it groups all invoicelines based on `invoice id`, creates a new invoice object, and pushes each invoiceline to that invoice object under the key invoicelines. It then pushes the invoice object with the invoicelines array inside of it to a results array and returns that to the frontend. The resulting data structure is:

```
[
  {
  invoiceDate:"2018-01-18T07:00:00.000Z",
  invoiceNumber:11,
  invoicelines:[
      {
          image:"/images/2.png",
          invoiceLine:29,
          price:null,
          product:"800 D3",
          quantity:2
      },
      {
          image:"/images/17.jpg",
          invoiceLine:30,
          price:null,
          product:"HTM72 S2",
          quantity:1
      },
      {
          image:"/images/15.jpg",
          invoiceLine:31,
          price:null,
          product:"707 S2",
          quantity:1
      }
  ],
  total:"31999.96"
  },
  {},
  ...
]
``` 

## Database Queries

#### `addtocart`

Inserts into the carts table the `user id`, `product id` and `quantity`.

#### `buildcartstable`

Seed file for carts table.

#### `buildcategories`

Seed file for categories table.

#### `buildproductdatabase`

Seed file for products table.

#### `changequantity`

Updates `quantity` of carts table where the `user id` and `product id` match the variables passed into the function.

#### `createinvoice`

Inserts into the invoices table the customer, shipping information, date, and total. The `.then` of this function loops through the cart and invokes other database functions for each line to create invoice lines, clear the cart, and get the cart again to display on the front end.

#### `createinvoiceline`

For each cart line, this database function inserts a new line into the invoicelines table. It ties each line to the `invoice id` from the previous `createinvoice` function and inserts the `product id` and `quantity` from the cart.

#### `clearcart`

Deletes from carts table based on `customer id`.

#### `getcart`

Selects from carts table based on `customer id` and joins with products table on `product id`.

#### `getcarttotal`

Joins products table and carts table on `product id`.
Sums the product of `product price` and `quantity`  based on  `product id`. Returns result based on `user id`.

#### `getinvoices`

Joins products table and invoicelines table on `product id`.
Joins invoicelines table and invoices table on `invoice id`.
Returns result based on `user id`.

#### `readproductcategory`

Selects from products table based on `category id`

#### `readsingleproduct`

Selects from products table based on `product id`

#### `removefromcart`

Deletes item from carts table based on `user id` and `product id`

#### `searchreadproduct`

Selects from products table where `product name` or `product description` are like the variables passed in to function.