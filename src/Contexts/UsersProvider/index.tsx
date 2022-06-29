import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { User } from '../../type/User';

interface UsersProviderProps {
  children: JSX.Element;
}

interface Context {
  usersList: User[] | undefined;
  setUsersList: Dispatch<SetStateAction<User[] | undefined>>;
}

const context: Context = {
  usersList: undefined,
  setUsersList: function (value: SetStateAction<User[] | undefined>): void {
    throw new Error(`Function not implemented.${value}`);
  },
};

export const UsersContext = createContext(context);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [usersList, setUsersList] = useState<User[]>();

  return <UsersContext.Provider value={{ usersList, setUsersList }}>{children}</UsersContext.Provider>;
};
