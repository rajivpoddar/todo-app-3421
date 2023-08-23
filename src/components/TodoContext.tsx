import React, { createContext, useReducer, useContext } from 'react';

interface TodoContextProviderProps {
  children: React.ReactNode;
}

interface Action {
  type: 'ADD' | 'TOGGLE' | 'DELETE' | 'ADD_TODO';
  payload?: any;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [],
};

let nextTodoId = 1;

const uniqueId = () => {
  return nextTodoId++;
};

const todoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: uniqueId(), text: action.payload, completed: false }],
      };  
    default:
      return state;
  }
};

interface TodoContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextValue | null>(null);

export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleTodo = (id: number) => dispatch({ type: 'TOGGLE', payload: id });
  const removeTodo = (id: number) => dispatch({ type: 'DELETE', payload: id });

  return (
    <TodoContext.Provider value={{ state, dispatch, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoContextProvider');
  }
  return context;
};
