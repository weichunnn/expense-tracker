import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20}, 
        { id: 2, text: 'Salary', amount: 300}, 
        { id: 3, text: 'Camera', amount: -500}
    ]
}

// Create context - allows consuming components to subscribe to context changes.
export const GlobalContext = createContext(initialState);

// Provider component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{transactions: state.transactions}}>
        { children }
    </GlobalContext.Provider>);
}