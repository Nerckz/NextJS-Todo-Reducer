import { TodoState } from './TodoProvider';
import { Entry } from '../../interfaces';

type TodoAction =
  | { type: '[Todo] - Add-Entry', payload: Entry }
  | { type: '[Todo] - Update-Entry', payload: Entry }
  | { type: '[Todo] - Delete-Entry', payload: Entry }

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case '[Todo] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }

    case '[Todo] - Update-Entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry.id === action.payload.id) {
            entry.desc = action.payload.desc;
            entry.title = action.payload.title;
          }

          return entry;
        })
      }

    case '[Todo] - Delete-Entry':
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.payload.id)
      }

    default:
      return {
        ...state
      }
  }
}