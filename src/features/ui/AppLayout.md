### AppLayout.jsx

> Splits the page into three vertical sections (header, main and footer) as per below:

- a header with the name of the company and a link to the homepage
- a main part of the page that will render according to the user's choice
- a footer with an overview of the cart that will display how many items are in the cart and a link to that cart.
- Both the header and the footer will always be visible on all pages and accessible from everywhere.
- The part of the application that changes is the main part in the middle which can be the menu, or the cart, or the form to create a new order.

We declare a boolean variable `isLoading` in which we pass in the `navigation.state` to conditionally render the `Loader` component. To get the `navigation.state` we use the `useNavigation()` hook.

To render the content of the nested routes within the `AppLayout` route we use the [Outlet](https://reactrouter.com/en/main/components/outlet) component provided by the [react-router-dom](https://www.npmjs.com/package/react-router-dom)

#### Hooks in use:

- [useNavigation()](https://reactrouter.com/en/main/hooks/use-navigation) to check the `navigation.state`

#### JSX components:

- `Loader` -> renderes conditionally if `isLoading === true`
- `Header` -> Header UI
- `Outlet` -> renders all nested routes under the `AppLayout` route in `App.jsx` file
- `CartOverview` -> cart overview UI
