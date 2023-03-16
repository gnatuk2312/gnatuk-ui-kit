# Gnatuk UI Kit

gnatuk-ui-kit is a compact npm library of [React](https://reactjs.org/) components that supports [TypeScript](https://www.typescriptlang.org/). It is small size and user-friendly, perfect for developers of all levels. gnatuk-ui-kit is a great choice for those who want to streamline their development process without sacrificing functionality.

## Installing

**npm:**

`npm install gnatuk-ui-kit`

**yarn:**

`yarn add gnatuk-ui-kit`

## Getting started
```jsx
import React from 'react';
import { Button } from 'gnatuk-ui-kit';

const handleClick = () => console.log("Click!");

function App() {
	return <Button onClick={handleClick}>My button</Button>;
}
```