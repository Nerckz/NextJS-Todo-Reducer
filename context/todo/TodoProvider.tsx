import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { todoReducer, TodoContext } from './';

interface Props {
  children: React.ReactNode;
}

export interface TodoState {
  entries: Entry[];
}

const TODO_INITIAL_STATE: TodoState = {
  entries: [],
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, TODO_INITIAL_STATE);

  const addNewEntry = (title: string, desc: string) => {
    const entry: Entry = {
      id: uuidv4(),
      title,
      desc
    }

    dispatch({ type: '[Todo] - Add-Entry', payload: entry });
  }

  const editEntry = (entry: Entry) => {
    dispatch({ type: '[Todo] - Update-Entry', payload: entry });
  }

  const deleteEntry = (entry: Entry) => {
    dispatch({ type: '[Todo] - Delete-Entry', payload: entry});
  }

  return (
    <>
      <TodoContext.Provider value={{
        ...state,

        // methods
        addNewEntry,
        editEntry,
        deleteEntry
      }}>
        {children}
      </TodoContext.Provider>
    </>
  );
}