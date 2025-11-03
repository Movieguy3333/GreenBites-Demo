/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, type ReactNode } from "react";
import {
  initialState,
  userReducer,
  type MealLog,
  type UserContextValue,
} from "./user-context-helpers";

const UserContext = createContext<UserContextValue | null>(null);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a <UserContextProvider />"
    );
  }
  return context;
}

type UserContextProviderProps = {
  children: ReactNode;
};

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const ctx: UserContextValue = {
    ...userState,
    addCalorieEntry(meal: MealLog) {
      dispatch({ type: "ADD_CALORIE_ENTRY", payload: meal });
    },
  };

  return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
}
