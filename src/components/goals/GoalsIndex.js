import { getAllGoals } from '../../api/goal'
import { useState, useEffect } from "react";
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen';

const cardContainerLayout = {
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'

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

    const goalCards = goals.map(goal => (
        <Card key= {goal._id} style={{width:'30%', margin:5}}>
            <Card.Header> {goal.title }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to= {`/goals/${goal._id}`} className='btn btn-info'>
                    view {goal.title}
                    </Link>
                </Card.Text>
            </Card.Body>
               
            
        </Card>
    ))
    
    
    return (
        <div className="container-md" style={cardContainerLayout}>
            {goalCards}

        </div>
    )
}

export default GoalsIndex