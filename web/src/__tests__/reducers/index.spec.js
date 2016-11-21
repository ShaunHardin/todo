import reducer from '../../reducers/index.js';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: 'ADD_TODO',
        text: 'Run the tests'
      })
    ).toEqual(
      [
        {
          id: 0,
          completed: false,
          text: 'Run the tests'
        }
      ]
    )

    expect(
      reducer(
        [
          {
            text: 'Learn Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: 'ADD_TODO',
          text: 'Run the tests'
        }
      )
    ).toEqual(
      [
        {
          text: 'Learn Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }
      ]
    )
  })
})

