import { getAllRoutines, getOneRoutine } from "../../api/routine";
import { useState, useEffect } from "react";
import { Sun, Sunrise } from "react-bootstrap-icons";

import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen';

const cardContainerLayout = {
    display:'flex',
    flexFlow: 'column',
    justifyContent: 'start',
    fontSize: '20px',
  
}



const RoutineIndex = (props) => {
    const { user } = props
    const [routines, setRoutines] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    console.log('routines in routine index', routines)


    useEffect(() => {
        getAllRoutines(user)
            .then(res => {
                console.log('the routines in getAll', res.data.routines)
                setRoutines(res.data.routines)
            }) 
            .catch(err => {
                msgAlert({
                    heading: 'error getting goals',
                    message: messages.indexGoalsFailure,
                    variant:'danger'
                })
                setError(true)
            })
    }, [])

    if(error) {
        return <LoadingScreen/>
    } if (!routines) {
        return <LoadingScreen/>
    } else if (routines.length === 0) {
        return <p> no tasks yet go add some!</p>
    }

    const categorizedTasks = {
        'Morning': routines.filter(routine => routine.time_of_day === 'Morning'),
        'Afternoon': routines.filter(routine => routine.time_of_day === 'Afternoon'),
        'Evening': routines.filter(routine => routine.time_of_day === 'Evening')
        
      };
      
      console.log('catagorized tasks', categorizedTasks)
      const renderedTasks = Object.keys(categorizedTasks).map(category => (
        <div key={category}>
          <h2 style ={{color:'grey'}}>{category} </h2>
          <ul style={{ listStyleType: 'none'}}className={cardContainerLayout}>
            {categorizedTasks[category].map(routine => (
              <li key={routine._id}>
                
                <Link to={`/routine/${routine._id}`}>
                  {routine.task}
                  
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ));
    
    
    
    return (
        <div className="container-md" style={cardContainerLayout}>
            {renderedTasks}

        </div>
    )
}

export default RoutineIndex