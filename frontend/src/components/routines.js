import { Useroutinecontext } from "../hooks/useroutinecontext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Usesigncontext } from "../hooks/usesigncontext"

const Routines = ({routine}) => {
    const {dispatch} = Useroutinecontext()
    const { user } = Usesigncontext()

    const date = new Date(routine.createdAt); 
    const timeAgo = isNaN(date) ? 'Invalid date' : formatDistanceToNow(date);

    const handledelete = async () => {
    
        if(!user){
            return
        }
        
        const res = await fetch('/api/routines/' + routine._id , { method : 'DELETE' ,
            headers: {
            'Authorization': `Bearer ${user.token}`
          }})
        
        const json = await res.json()

        if(res.ok){
            dispatch({type:'Delete-routine' , payload : json})
        }
    }
    return ( 
        <div className="routines">
            <h4>{routine.name}</h4>
            <p><strong>Description :</strong>{routine.body}</p>
            <p><strong>Duration :</strong> {routine.duration}</p>
            <p>{timeAgo}</p>
            <img src="/deleteicon.svg" onClick={handledelete} />
        </div>
     );
}
 
export default Routines;