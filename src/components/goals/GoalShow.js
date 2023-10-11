import { useState, useEffect } from 'react'
import{ useParams} from 'react-router-dom'
import { Container, Card, CardFooter, Button } from 'react-bootstrap'
import { getOneGoal, updateGoal, removeGoal } from '../../api/goal'
import {removeGoalFailure, removeGoalSucess, showGoalFailure }from '../shared/AutoDismissAlert/messages'
import EditGoalModal from './EditGoalModal'
import {useNavigate} from 'react-router-dom'
import ActionShow from '../Actions/Actions'
import NewActionModal from '../Actions/NewActionModal'


const actionCardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'

}

const ShowGoal = (props)  => {
    console.log('these are props in show goal', props)
    const [goal, setGoal] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [actionModalShow, setActionModalShow] = useState(false)
    const [updates, setUpdates] = useState(false)

    const navigate = useNavigate()

    const {id } = useParams()
    const { user, msgAlert } = props

    console.log('this is the id', id)
    useEffect(() => {
        getOneGoal(user, id)
            .then(res => setGoal(res.data.goal))
            .catch (err => {
                msgAlert({
                    heading: 'error getting goal',
                    message: showGoalFailure,
                    varient: 'danger'
                })
            })

    }, [updates])

    const deleteGoal = () =>{
        removeGoal(user, goal._id)
            .then(() => 
                msgAlert({
                    heading:'removed successfuly',
                    message: removeGoalSucess,
                    variant: 'success'
                })
            )
                .then(() => navigate('/'))
                .catch(() => 
                msgAlert({
                    heading:'oh no!',
                    message: removeGoalFailure,
                    variant: 'danger'
                })
               
                )
    }

    let actionCards
    if (goal) {
        if (goal.actions.length > 0) {
            actionCards = goal.actions.map(action => (
                <ActionShow key={action.id}
                action={action}
                />
            ))
        } else {
            actionCards = <p>start setting some actions</p>
        }
    }

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
            <Card.Footer>

                <Button className='m-2' variant='info'
                onClick={() => setActionModalShow(true)}
                >
                    create and action
                    </Button>
                
                
                    <Button 
                        className='m-2'
                        onClick={() => setEditModalShow(true)}> 
                        Edit
                    </Button>
                    <Button 
                        className='m-2'
                        onClick={()=> deleteGoal()}>
                        Delete
                    </Button>
                    
                
            </Card.Footer>
        </Card>
        
        </Container>

        <Container className='m-2' style={actionCardContainerLayout }>
            {actionCards}
        </Container>
        <EditGoalModal 
            user={user}
            show={editModalShow}
            updateGoal={updateGoal}
            msgAlert={msgAlert}
            handleClose={() => setEditModalShow(false)}
            triggerRefresh={() => setUpdates(prev =>!prev)}
            goal={goal}
        />
        <NewActionModal 
            user={user}
            show={actionModalShow}
            msgAlert={msgAlert}
            handleClose={() => setActionModalShow(false)}
            triggerRefresh={() => setUpdates(prev =>!prev)}
            goal={goal}
        />
        </>
    )
}

export default ShowGoal