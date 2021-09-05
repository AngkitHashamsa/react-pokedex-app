## React and material ui Pokedex App

## live site on netlify

- [https://react-pokedex-pokemon-app.netlify.app](https://react-pokedex-pokemon-app.netlify.app)

## API end point

- [pokeApi](https://pokeapi.co/api/v2)

## for single Page

## useParams from react Router

```jsx
import { useParams } from 'react-router'

const { id } = useParams()
axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
```

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

## for continous deployment in netlify specify

```js
"build": "CI='' react-scripts build",
```
