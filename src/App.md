## App.jsx

We are using [React Router](https://reactrouter.com/en/main) (third party library) for:

1. fetching data into pages with [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
2. submitting data using forms

In the `createBrowserRouter()` function we define all routes by passing in an array of objects where each object is one route.

- Basically we use one parent route without declaring any path to make this a layout route `AppLayout`:

  - ```javascript
    const router = createBrowserRouter([
      {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [],
      },
    ]);
    ```

- we then nest all the other routes under the parent route as children by defining the children property.
- we pass a new array of routes within the children property.

| path            | element     | loader      | action            | errorElement |
| :-------------- | :---------- | :---------- | :---------------- | :----------- |
| /               | Home        | -           | -                 | -            |
| /menu           | Menu        | MenuLoader  | -                 | Error        |
| /cart           | Cart        | -           | -                 | -            |
| /order/new      | CreateOrder | -           | CreateOrderAction | -            |
| /order/:orderId | Order       | OrderLoader | -                 | Error        |

We then save the result of calling the `createBrowserRouter` function into `router` variable which we declare outside the JSX.

In our `function App()` we return a new component `RouterProvider` in which all data router objects are passed to this component to render our app and enable the rest of the data APIs according to [RouterProvider documentation](<(https://reactrouter.com/en/main/routers/router-provider)>). This syntax is necessary in version 6.4 in order to enable data fetching and loading using data loaders and data actions.

The `RouterProvider` component takes a property `router` where we pass in that `router` variable that we have created as shown below:

```javascript
function App() {
  return <RouterProvider router={router} />;
}
```

### Connected Loaders

- `MenuLoader`
- `OrderLoader`

### Connected Actions

- `CreateOrderAction`
