import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
  entries: Entry[];

  // methods
  addNewEntry: (title: string, description: string) => void;
  editEntry: (entry: Entry) => void;
  deleteEntry: (entry: Entry) => void;
}

export const TodoContext = createContext({} as ContextProps);