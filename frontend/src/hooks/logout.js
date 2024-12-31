import { Usesigncontext } from '../hooks/usesigncontext';
import { Useroutinecontext } from '../hooks/useroutinecontext';
import { useNavigate } from 'react-router-dom';

export  const Uselogout = () =>{

    const {dispatch} = Usesigncontext()
    const {dispatch : dispatchroutines} = Useroutinecontext()
    const navigate = useNavigate();
    
    const logout = () => {

        dispatch({type:'Signout'})
        dispatchroutines({type : 'Set-routines' , payload : null})
        navigate('/signin')

    }

    return {logout}
}


