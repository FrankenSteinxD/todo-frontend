# Todo UI
A React.js client for [Todo api](https://github.com/FrankenSteinxD/todo-api).

## Development
1. clone the [Todo api](https://github.com/FrankenSteinxD/todo-api) project.
2. follow [Todo api](https://github.com/FrankenSteinxD/todo-api) project's README and run it.
3. clone this project.
4. in the project directory run `yarn install`.
5. start the development server by running `yarn start`.

## Building docker image
Run `docker build --tag todoappui .` in the project directory.

The image accepts `REACT_APP_API_URL` environment variable that you can pass to it when running the container with `docker run`.

> [Here's](https://rashadkokash.me/react-docker-env/) how I pass environemt variables to react at runtime

## Motivation
This app is secure against **XSS** and **CSRF**

### How is it safe against XSS ?
Login token is stored only in memory (as a variable) and refreshed with a refresh token on each reload.

### How is it safe against CSRF ?
Refresh token is stored as a SameSite and httpOnly cookie.
