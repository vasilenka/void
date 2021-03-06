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
  counter: 1,
  active: {},
  running: false,
  todos: [
    {
      id: uuidv1(),
      text: 'Say goodnight to Dushi',
      iterationsCounter: 0,
      iterations: [],
      totalDuration: 0,
    },
  ],
  version: 0.1,
}

export function todoReducer(state, action) {
  switch (action.type) {
    case 'update': {
      return Object.assign({}, action.store)
    }

    case 'add': {
      const newTodo = {
        id: uuidv1(),
        text: action.text,
        iterationsCounter: 0,
        iterations: [],
        totalDuration: 0,
      }
      return {
        ...state,
        counter: state.counter + 1,
        todos: [newTodo, ...state.todos],
      }
    }

    case 'start': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      let todo = Object.assign({}, state.todos[index])

      let { iterations } = todo
      let newIteration = { id: uuidv1(), start: action.start, end: null }
      iterations.unshift(newIteration)
      todo.iterationsCounter = iterations.length

      let todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)

      return {
        ...state,
        running: true,
        active: todo,
        todos: todos,
      }
    }

    case 'stop': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      let todo = Object.assign({}, state.todos[index])

      let { iterations } = todo
      // let iterationIndex = iterations.findIndex(
      //   iteration => iteration.id === action.iterationId
      // )

      let modifiedIteration = iterations[0]
      modifiedIteration.end = action.end
      iterations.splice(0, 1, modifiedIteration)

      let duration = action.end - modifiedIteration.start
      todo.totalDuration = todo.totalDuration + duration

      let todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)
      return {
        ...state,
        running: false,
        counter: state.counter,
        todos: todos,
      }
    }

    case 'edit': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      let todo = Object.assign({}, state.todos[index])
      todo.text = action.text
      let todos = Object.assign([], state.todos)
      todos.splice(index, 1, todo)
      return {
        ...state,
        counter: state.counter,
        todos: todos,
      }
    }

    case 'delete': {
      const index = state.todos.findIndex(todo => todo.id === action.id)
      const todos = Object.assign([], state.todos)
      todos.splice(index, 1)
      return {
        ...state,
        running: state.active.id === action.id ? false : true,
        active: state.active.id === action.id ? {} : state.active,
        counter: state.counter - 1,
        todos: todos,
      }
    }

    default:
      return state
  }
}
