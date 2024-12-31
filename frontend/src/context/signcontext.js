import { createContext, useEffect, useReducer } from "react";

export const SignContext = createContext()

export const signreducer = ( state , action  ) => {
    switch(action.type){
        case 'Signin' :
            return { user : action.payload}
        case 'Signout' :
            return { user : null }
        default :
            return state
    }
}

export const SignContextProvider = ({children}) => {
    const [state , dispatch] = useReducer( signreducer , { user : null})

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type : 'Signin', payload : user})
        }
    } , [])

    console.log('SignContext state:', state)
    
    return(
        <SignContext.Provider value = {{...state , dispatch}} >
            {children}
        </SignContext.Provider>
    )
}