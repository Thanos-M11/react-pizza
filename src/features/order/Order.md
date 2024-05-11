## Order.jsx

user can
look up their order based on the ID of that order.

- connected route = `/order'
- reade the order id from the url
- render the order data

### function loader()

> a loader function

- calls the `getOrder()` function from the `apiRestaurant.jsx` file and stores the promise in a variable `order`.
  - `getOrder()`
    - fetches the order data from an API
    - returns a promise
- returns the `order` data.

to get the ID from the URL we use the `params` property that the React Router passes into the loader function.

## SearchOrder.jsx

search for the order, so in which we can
input the order ID into our application.
So, basically, we want a search field
right here in the header so that we can
always access the search functionality from everywhere.
So, let's say, "SearchOrder.JSX,"
and then, here, let's just return an input.

[useNavigate()]() hook to move to /order/:orderId
[useState()](https://react.dev/reference/react/useState) hook to add the `query` state variable to our component.
