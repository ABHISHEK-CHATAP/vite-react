import React, { createContext, useContext } from 'react'


const AppContext = createContext();

const AppProvider = ({children}) => {
return (
    <AppContext.Provider value={{fname:"Abhishek Chatap", age:"22"}}>
        {children}
    </AppContext.Provider>

)
}

// golobal custom hook

const useGlobalContext= () => {
    return useContext(AppContext);
    
};

export { AppContext, AppProvider, useGlobalContext};