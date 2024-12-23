const Routines = ({routine}) => {
    return ( 
        <div className="routines">
            <h4>{routine.name}</h4>
            <p><strong>Description :</strong>{routine.body}</p>
            <p><strong>Duration :</strong> {routine.duration}</p>
            <p>created at : {routine.createdAt}</p>
        </div>
     );
}
 
export default Routines;