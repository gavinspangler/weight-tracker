# Weight Tracker ★★

A weight tracking application.

## Table of contents
* [What is this?](#user-content-what-is-this)
* [Setup](#user-content-setup)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build (production)](#user-content-build-production)
* [Running in preview production mode](#user-content-running-in-preview-production-mode)
* [Linting](#user-content-linting)
* [Git hooks](#user-content-git-hooks)

Weight Tracker
## What is this?

This is a web application to help with tracking and displaying ones weight progressions. By showing visual progressions I am aiming to help
people stay on pace with their workouts and diet.

## Setup

```
$ npm install
```

### Running in dev mode [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```
