import { useState, useEffect } from 'react'
import{ useParams, Link} from 'react-router-dom'
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
    const [entry, setEntry] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updates, setUpdates] = useState(false)
    const navigate = useNavigate()
    const {id } = useParams()
    const { user, msgAlert } = props

    console.log('these are the entries in show', entry)

    
    useEffect(() => {
        getOneEntry(user, id)
            .then(res => setEntry(res.data.entry))
            .catch (err => {
                msgAlert({
                    heading: 'Error Getting Entries',
                    varient: 'danger'
                })
            })

    }, [updates])

    const deleteEntry = () =>{
        removeEntry(user, entry._id)
            .then(() => 
                msgAlert({
                    heading:'removed successfuly',
                    variant: 'success'
                })
            )
                .then(() => navigate('/journal'))
                .catch(() => 
                msgAlert({
                    heading:'Unable to Remove',
                    variant: 'danger'
                })
               
                )
    }
    const date = ()=>{
        const date = entry.createdAt
        const newDate =(new Date(date)).toDateString()
        console.log('this is new date', newDate)
        return newDate
    }


    if(!entry){
        return <p>Loading...</p>
    } 

    return (
        <>
       <Container className='m-4'>
       <hr/>
       <hr/>
        <div>
            <h1 className='p-4' style={{backgroundColor:'#fdf86d', backgroundImage: 'linear-gradient(315deg, #fdf86d 0%, #bddcf1 74%)', fontSize:'20px'}}> <span style={{fontFamily:'PT Serif, serif', fontSize:'30px'}}>{entry.title}</span><br/><br/>{date()}</h1>
        </div>
        <div>
        <p className='p-3' style={{fontSize:'25px'}}>{entry.body}</p>
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
            onClick={()=> deleteEntry()}>
            Delete
        </Button>
        {/* <Card>
            <Card.Header style={{backgroundColor:'#fdf86d', backgroundImage: 'linear-gradient(315deg, #fdf86d 0%, #bddcf1 74%)', fontSize:'20px'}}>{entry.title}<br/>{date()}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {entry.body}
                    
                   
                    
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'white'}}>

          
             
                
                
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
        </Card> */}
        <Button style={{backgroundColor:'black', border:'black'}}><Link to={'/journal'} style={{color:'white', textDecoration:'none'}}>View All Entries</Link></Button>
        
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