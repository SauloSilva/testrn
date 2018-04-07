import React from 'react';
import { Text, Button } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import * as Actions from '../../src/store/actions';
import TodoList from '../../src/TodoList';

const mockStore = configureStore([]);
const initialState = {
  todos: [
    { id: 1, text: "Fazer café" },
    { id: 2, text: "Estudar teste" },
  ]
};

describe('Testing TodoList', () => {
  const store = mockStore(initialState);

  function createWrapper() {
    return shallow(
      <TodoList />,
      { context: { store } }
    ); 
  }

  it('renders as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.prop('todos')).toEqual(initialState.todos);
    expect(wrapper.dive().find(Text)).toHaveLength(initialState.todos.length);
  });

  it('can add new todo', () => {
    const wrapper = createWrapper();

    wrapper.dive().find(Button).simulate('press');

    expect(store.getActions()).toContainEqual(Actions.addTodo());
  });
});