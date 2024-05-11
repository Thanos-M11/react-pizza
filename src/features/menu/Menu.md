## Menu.jsx

### function loader()

> a loader function

- calls the `getMenu()` function from the `apiRestaurant.jsx` file and stores the promise in a variable `menu`.
  - `getMenu()`
    - fetches the menu data from an API
    - returns a promise
- returns the `menu` data.

### Component Menu()

- uses the [useLoaderData()](https://reactrouter.com/en/main/hooks/use-loader-data) hook to provide the values that is returned from the route loader property within the `App.jsx` and stores it in `menu` variable.

### JSX

> Renders a list of `MenuItem ` components

So the idea behind a loader is that somewhere in our code
we create a function that fetches some data from an API.
We then provide that loader function to one of our routes
and that route will then fetch that data
as soon as the application goes to that route.
And then in the end, once the data has arrived,

And so that function,
