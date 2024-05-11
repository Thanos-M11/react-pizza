### CreateOrder.jsx

- We are using [actions](https://reactrouter.com/en/main/route/action) and [React Router's](https://reactrouter.com/en/main) form component for writing data.

- We avoid :

  - creating state variables for all the inputs in the form,
  - handling the request
  - prevent default.

- We only use the [Form](https://reactrouter.com/en/main/components/form) component of `React Router` and we submit the form.
- We wire up this action that we created to the URL as shown in `App.jsx` :

```javascript
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      ...........
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);
```

- we catch that request in the `async function action({request}){}` using the [`formData`](https://reactrouter.com/en/main/guides/form-data)

- we turn the entire formData into an object with [`Object.fromEntries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

- we remodel our data by creating a `newOrder` object and submit it with a `POST` request to the `createOrder(newOrder)` action.

- we then [redirect](https://reactrouter.com/en/main/fetch/redirect) the user to `order/newOrder.id` url.

we use [React Router's actions](https://reactrouter.com/en/main/route/action) combined with a [Form](https://reactrouter.com/en/main/components/form) component to `write` data.

in the jsx in the `Form` component we are passing the POST method as well as we path through the `action` property.
