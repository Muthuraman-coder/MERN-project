import { useContext } from "react"
import { SignContext } from "../context/signcontext"

export const Usesigncontext = () => {
    
    const context = useContext(SignContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context;
}