import React, { createContext, useReducer } from "react";
import axios from 'axios';
import AppReducer from "./AppReducer";

const inicialState = [
    
    {
        error: null,
        loading: true
    }
    
];
    


export const GlobalContext = createContext(inicialState);




export const Provider = ({children})=>{
const[transactions, dispatch] = useReducer(AppReducer, inicialState);



    const addTransaction = (transaction) =>{
        dispatch({type:"ADD_TRANSACTION", payload: transaction})
    }
    // console.log(transactions)
    return(
    <GlobalContext.Provider value={{transactions,  addTransaction}}>
        {children}
    </GlobalContext.Provider>
    )
}