# Fast React Pizza

An application where the user can order pizza online. A project of Jonas Scmmedtmann's Ultimate React Course 2024.

## Application Requirements

1. Users can order one or more pizzas from a menu
2. Requires no user accounts and no login. Users just input their names before using the app.
3. The pizza menu can change so it should be loaded from an API.
4. User can add multiple pizzas to a cart before ordering.
5. Ordering requires just the user's name, phone and address.
6. If possible, GPS location should also be provided to make delivery easier.
7. Users can mark their order as high priority for an additional 20% of the cart price.
8. Orders are made by sending a POST request with the order data (user's data + selected pizzas) to the API.
9. Payments are made on delivery so no payment process is necessary.
10. Each order will get a unique ID that should be displayed, so the user later can look up his prder based on the id.
11. Users should be able to mark their order as priority even after it has been placed.

## Page Breakdown - UI ()

| Feature Categories | Necessary pages                              | routes                            |
| :----------------- | :------------------------------------------- | :-------------------------------- |
| User               | Homepage                                     | /                                 |
| Menu               | Pizzamenu                                    | /menu                             |
| Cart               | cart                                         | /cart                             |
| Order              | placing a new order <br> Looking up an order | /order/new <br /> /order/:orderID |

## State Domains / Slices

| Feature | State Type                                                  |
| :------ | :---------------------------------------------------------- |
| user    | Global UI state                                             |
| menu    | Global remote state (menu is fetched from an API)           |
| cart    | Global UI state                                             |
| Order   | Global remote state (order is fetched and submitted to API) |

## Technology STACK

| Section                 | Technology                                      |
| :---------------------- | :---------------------------------------------- |
| Routing                 | [React Router](https://reactrouter.com/en/main) |
| Styling                 | [Tailwindcss](https://tailwindcss.com/)         |
| Remote state management | React Router                                    |
| UI State management     | [Redux](https://redux.js.org/)                  |

## SRC File structure

> - features
>   - cart (pages, components, slices for cart)
>   - menu (pages, components, slices for menu)
>   - order (pages, components, slices for order)
>   - user (pages , components, slices for user)
>   - ui (pages, components for the whole app )
> - services (functions connected with API)
> - utils (helper functions)
