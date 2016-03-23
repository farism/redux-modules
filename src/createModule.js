import { compose } from 'ramda';
import createActions from './createActions';
import createReducer from './createReducer';
import formatConstants from './formatConstants';
import { Map } from 'immutable';

const _generateReduxComponents = initialState => transformations => {
  const generated = {
    actions: createActions(transformations),
    reducer: createReducer(initialState, transformations),
  };

  return generated;
};

export const createModule = ({name, transformations, initialState = Map()}) => {
  const generated = compose(
    _generateReduxComponents(initialState),
    formatConstants(name)
  )(transformations);

  return generated;
};

export default createModule;