import { createContext, useReducer } from "react";

export const UserContext = createContext({});

function reducer(state, action) {
    if(action.type === 'setUser') {
      console.log(action.user);
      return action.user;
    }
}

export const UserContextProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, {});
    return (
        <UserContext.Provider value={{ user, dispatch }}>
            { children }
        </UserContext.Provider>
    );
}
