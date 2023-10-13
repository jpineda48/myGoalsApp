import { getAllGoals } from '../../api/goal'
import { useState, useEffect } from "react";
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen';

const cardContainerLayout = {
    display:'flex',
    flexFlow: 'column',
    justifyContent: 'start',
    fontSize: '20px',
  
}



const GoalsIndex = (props) => {
    const { user } = props
    const [goals, setGoals] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    console.log(goals)


    useEffect(() => {
        getAllGoals(user)
            .then(res => {
                console.log('thegoals', res.data.goals)
                setGoals(res.data.goals)
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
    } if (!goals) {
        return <LoadingScreen/>
    } else if (goals.length === 0) {
        return <p> no goals yet go add some!</p>
    }

    const categorizedGoals = {
        'In Progress': goals.filter(goal => goal.status === 'In Progress'),
        'Finished': goals.filter(goal => goal.status === 'Finished'),
        'Not Started': goals.filter(goal => goal.status === 'Not Started')
        
      };
      
      const renderedGoals = Object.keys(categorizedGoals).map(category => (
        <div key={category}>
          <h2 style ={{color:'grey', fontSize:'15px'}}>{category}</h2>
          <ul style={{ listStyleType: 'none'}}className={cardContainerLayout}>
            {categorizedGoals[category].map(goal => (
              <li key={goal._id}>
                <Link to={`/goals/${goal._id}`}>
                  {goal.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ));
    
    
    
    return (
        <div className="container-md" style={cardContainerLayout}>
            {renderedGoals}

        </div>
    )
}

export default GoalsIndex