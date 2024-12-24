import { Useroutinecontext } from "../hooks/useroutinecontext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Routines = ({routine}) => {
    const {dispatch} = Useroutinecontext()

    const handledelete = async () => {
        const res = await fetch('/api/routines/' + routine._id , { method : 'DELETE'})
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
            <p>{formatDistanceToNow(new Date(routine.createdAt), { addSuffix: true })}</p>
            <img src="/deleteicon.svg" onClick={handledelete} />
        </div>
     );
}
 
export default Routines;