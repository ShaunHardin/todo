import * as actions from '../../actions/TodoActions';

describe('addTodo', () => {
  it('should create an action to add a todo', () => {
    const text = 'Reply to email';
    const expectedAction = {
      type: 'ADD_TODO',
      text
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
