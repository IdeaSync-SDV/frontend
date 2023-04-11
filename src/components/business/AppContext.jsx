import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { invoke } from '@tauri-apps/api/tauri';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [todos, setTodos] = useState(null);

  const getTodos = useCallback(async () => {
    const todos = await invoke('get_todos');
    console.log(todos);
    setTodos(todos);
  }, []);

  const addTodo = useCallback(async ({ title, content, date }) => {
    await invoke('add_todo', { title, content, date });
    await getTodos();
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <AppContext.Provider
      {...props}
      value={{
        state: { todos },
        actions: { addTodo },
      }}
    />
  );
};

export default AppContext;
