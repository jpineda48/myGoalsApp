import { getAllGoals } from '../../api/goal'
import { useState, useEffect } from "react";
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

const GoalsIndex = (props) => {
    const [goals, setGoals] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    console.log(goals)


    useEffect(() => {
        getAllGoals()
            .then(res => {
                console.log('thegoals', res.data.goals)
                // setGoals(res.data.goals)
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
        return <p>Error!</p>
    } if (!goals) {
        return <p>Loading....</p>
    } else if (goals.length === 0) {
        return <p> no goals yet go add some!</p>
    }

    const goalCards = goals.map(goal => (
        <Card key= {goal.id}>
            <Card.Header>
                {goal.title}
            </Card.Header>
        </Card>
    ))
    
    
    return (
        <div className="container-md">
            {goalCards}

        </div>
    )
}

export default GoalsIndex