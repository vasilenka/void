import { v1 as uuidv1 } from 'uuid'

// const client = {
//   id: 902,
//   name: 'Mom',
// }

// const project = {
//   name: 'The Kitchen',
//   client,
// }

// const iterations = {
//   counter: 0,
//   item: [item(0), item(1), item(2), item(3)],
// }

// const item = index => ({
//   id: 'someserious' + index,
//   start: Date.now(),
//   end: Date.now(),
// })

// const todo = {
//   id: 1,
//   text: 'Cook egg',
//   project: project.name,
//   client: project.client,
//   start: action.start,
//   end: action.end,
//   iterations,
// }

export const initialTodos = {
  counter: 2,
  todos: [
    {
      id: uuidv1(),
      text: 'Masak indomie goreng',
    },
    {
      id: uuidv1(),
      text: 'Say goodnight to dushi!',
    },
  ],
}

export function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const newTodo = {
        id: uuidv1,
        text: action.text,
      }
      return {
        counter: state.counter + 1,
        todos: [newTodo, ...state.todos],
      }
    }
    case 'edit': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      let todo = Object.assign({}, state.todos[index])
      todo.text = action.text
      let todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)
      return {
        counter: state.counter,
        todos: todos,
      }
    }
    case 'delete': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      const todos = Object.assign([], state.todos)
      todos.splice(index, 1)
      return {
        counter: state.counter - 1,
        todos: todos,
      }
    }
    default:
      return state
  }
}
