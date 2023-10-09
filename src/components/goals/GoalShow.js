import { useState, useEffect } from 'react'
import{ useParams} from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import { getOneGoal } from '../../api/goal'
import messages from '../shared/AutoDismissAlert/messages'

const ShowGoal = (props)  => {
    console.log('these are props in show goal', props)
    const [goal, setGoal] = useState(null)

    const {id } = useParams()
    const { user, msgAlert } = props

    console.log('this is the id', id)
    useEffect(() => {
        getOneGoal(user, id)
            .then(res => setGoal(res.data.goal))
            .catch (err => {
                msgAlert({
                    heading: 'error getting goal',
                    messege: messages.showGoalFailure,
                    varient: 'danger'
                })
            })

    }, [])

    if(!goal){
        return <p>Loading...</p>
    } 

    //need to pull ud from url

    return (
        <>
       <Container className='m-2'>
        <Card>
            <Card.Header>{goal.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <div>{goal.catagory}</div>
                    <div>{goal.start_date}</div>
                    <div>{goal.end_date}</div>
                    <div>{goal.description}</div>
                    <div>{goal.status}</div>
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Container>
        </>
    )
}

export default ShowGoal