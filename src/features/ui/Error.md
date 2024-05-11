## Error.jsx

### hooks used:

- [useNavigate()](https://reactrouter.com/en/main/hooks/use-navigate) to go back in the history stack. We use `navigate(-1)` to go back one step.
- [useRouteError()](https://reactrouter.com/en/main/hooks/use-route-error) to catch anything thrown during an action, loader or rendering.

### JSX

Renders : error data / message
