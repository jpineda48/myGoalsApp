import { useState, useEffect } from 'react'
import{ useParams, Link} from 'react-router-dom'
import { Container, Card, CardFooter, Button } from 'react-bootstrap'
import { getOneRoutine, updateRoutine, removeRoutine } from '../../api/routine'
import {removeGoalFailure, removeGoalSucess, showGoalFailure }from '../shared/AutoDismissAlert/messages'
import EditRoutineModal from './EditRoutineModal'
import {useNavigate} from 'react-router-dom'



const actionCardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'

}

const ShowRoutine = (props)  => {
    console.log('these are props in show routine', props)
    const [routine, setRoutine] = useState(null)
    const [editRoutineShow, setEditModalShow] = useState(false)
    const [updates, setUpdates] = useState(false)

    const navigate = useNavigate()

    const {id } = useParams()
    const { user, msgAlert } = props

    console.log('this is the id', id)
    useEffect(() => {
        getOneRoutine(user, id)
            .then(res => setRoutine(res.data.routine))
            .catch (err => {
                msgAlert({
                    heading: 'error getting goal',
                    message: showGoalFailure,
                    varient: 'danger'
                })
            })

    }, [updates])

    const deleteRoutine = () =>{
        removeRoutine(user, routine._id)
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

  

    if(!routine){
        return <p>Loading...</p>
    } 


    //need to pull ud from url

    return (
        <>
         <hr/>
        <div>
            <h1 className='p-4 m-3' style={{backgroundColor:'#fdf86d', backgroundImage: 'linear-gradient(315deg, #fdf86d 0%, #bddcf1 74%)', fontSize:'20px'}}> <span style={{fontFamily:'PT Serif, serif', fontSize:'30px'}}>{routine.task}</span></h1>
        </div>
        <div>
        <p className='p-3 m-3' style={{fontSize:'25px'}}>{routine.time_of_day}</p>
        </div>
       
       
        <Button 
            style={{backgroundColor:'black', border:'black'}}
            className='m-2'
            onClick={() => setEditModalShow(true)}> 
            Edit
        </Button>
        <Button 
            style={{backgroundColor:'black', border:'black'}}
            className='m-2'
            onClick={()=> deleteRoutine()}>
            Delete
        </Button>
        <Button 
            style={{backgroundColor:'black', border:'black'}}>
                <Link to={'/'} style={{color:'white', textDecoration:'none'}}>View My Routine
                </Link>
        </Button>
       
       {/* <Container className='m-2'>
        <Card>
            <Card.Header><span style={{color: "red", fontSize:'2rem'}}>The Task:</span> {routine.task}</Card.Header>
            <Card.Body>
                <Card.Text>
                 
                </Card.Text>
            </Card.Body>
            <Card.Footer>

             
                
                
                    <Button 
                        className='m-2'
                        onClick={() => setEditModalShow(true)}> 
                        Edit
                    </Button>
                    <Button 
                        className='m-2'
                        onClick={()=> deleteRoutine()}>
                        Delete
                    </Button>
                    
                
            </Card.Footer>
        </Card>
        
        </Container> */}

      
        <EditRoutineModal 
            user={user}
            show={editRoutineShow}
            updateRoutine={updateRoutine}
            msgAlert={msgAlert}
            handleClose={() => setEditModalShow(false)}
            triggerRefresh={() => setUpdates(prev =>!prev)}
            routine={routine}
        />
        
        </>
    )
}

export default ShowRoutine