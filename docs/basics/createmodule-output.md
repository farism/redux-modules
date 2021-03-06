# createModule Output

```js
import { createModule } 'redux-modules';

const { actions, reducer, constants } = createModule({
  name: 'counter',
  initialState: 0,
  transformations: [
    {
      action: 'INCREMENT',
      reducer: state => state + 1,
    },
    {
      action: 'DECREMENT',
      reducer: state => state - 1,
    },
  ],
});
```

Generates something *roughly* equivalent to the following:

```js
const constants = {
  increment: 'counter/INCREMENT',
  decrement: 'counter/DECREMENT',
};

const actions = {
  increment: createAction(constants.increment),
  decrement: createAction(constants.decrement),
};

const reducer = handleActions({
  [constants.increment]: state => state + 1,
  [constants.decrement]: state => state - 1,
});
```