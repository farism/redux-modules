import React, { PropTypes } from 'react';
import todoModule from '../modules/todo';
import counterModule from '../modules/counter';
import { connectModule } from '../../../src/index';
import TodoList from '../components/TodoList';

const { array, func, number, shape } = PropTypes;

const mapState = state => {
  return {
    todos: { collection: [... state.todos.toJS()] },
    counter: { count: state.counter },
  }
};

class MultipleConnected extends React.Component {
  static propTypes = {
    todos: shape({
      collection: array,
      actions: shape({
        create: func,
        destroy: func,
        update: func,
      }),
    }),
    counter: shape({
      count: number,
      actions: shape({
        increment: func,
        decrement: func,
      }),
    }),
  };

  render() {
    const { todos, counter } = this.props;
    return (
      <div>
        <TodoList todos={todos} />
        <button onClick={counter.actions.increment}>
          +
        </button>
        <h2>Count: {counter.count}</h2>
        <button onClick={counter.actions.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default connectModule(
  mapState,
  [todoModule, counterModule],
  MultipleConnected
);
