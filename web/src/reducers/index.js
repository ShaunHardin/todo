const initialState = [
]

export default function todos(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]
    default:
      return state;
  }
}
