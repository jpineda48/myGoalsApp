import { useState, useEffect } from 'react'
import{ useParams} from 'react-router-dom'
import { Container, Card, CardFooter, Button } from 'react-bootstrap'
import { getOneEntry, updateEntry, removeEntry } from '../../api/journal'
import {removeGoalFailure, removeGoalSucess, showGoalFailure }from '../shared/AutoDismissAlert/messages'
import EditEntryModal from './EditEntryModal'
import {useNavigate} from 'react-router-dom'




const actionCardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'

}

const EntryShow = (props)  => {
    console.log('these are props in show goal', props)
    const [entry, setEntry] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
 
    const [updates, setUpdates] = useState(false)

    const navigate = useNavigate()

    const {id } = useParams()
    const { user, msgAlert } = props

    console.log('this is the id', id)
    useEffect(() => {
        getOneEntry(user, id)
            .then(res => setEntry(res.data.entry))
            .catch (err => {
                msgAlert({
                    heading: 'error getting goal',
                    message: showGoalFailure,
                    varient: 'danger'
                })
            })

    }, [updates])

    const deleteEntry = () =>{
        removeEntry(user, entry._id)
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

  
    console.log('entries is entry show', entry)

    if(!entry){
        return <p>Loading...</p>
    } 

    return (
        <>
       <Container className='m-2'>
        <Card>
            <Card.Header>{entry.title}</Card.Header>
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
                        onClick={()=> deleteEntry()}>
                        Delete
                    </Button>
                    
                
            </Card.Footer>
        </Card>
        
        </Container>

       
        <EditEntryModal 
            user={user}
            show={editModalShow}
            updateEntry={updateEntry}
            msgAlert={msgAlert}
            handleClose={() => setEditModalShow(false)}
            triggerRefresh={() => setUpdates(prev =>!prev)}
            entry={entry}
        />
        </>
    )
}

export default EntryShow