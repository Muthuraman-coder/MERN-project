import { useEffect } from "react";
import Routines from "../components/routines";
import Routineform from "../components/routineform";
import { Useroutinecontext } from "../hooks/useroutinecontext";

const Home = () => {
    const { routines , dispatch } = Useroutinecontext()

    useEffect(() => {
        const fetchroutines = async () => {
          const response = await fetch('/api/routines')
          const json = await response.json()
          dispatch({type:'Set-routines' , payload:json})
        }
        fetchroutines()
    }, [dispatch])

    return(
        <div className="home">
            <div className="home-routine">
            {routines && routines.map(routine => (
                <Routines routine = {routine} key={routine._id}/>
            ))}
                <div className="page-form">
                    <Routineform />
                </div>
            </div>
        </div>
    )
}

export default Home;