import {useState} from 'react'
import{Card, Button} from 'react-bootstrap'
import { removeAction } from '../../api/action'
import { removeActionFailure, removeActionSuccess  } from '../shared/AutoDismissAlert/messages'
import EditActionModal from './EditActionModal'
import { Link } from 'react-router-dom'

const ActionShow = (props) => {
    const { action, msgAlert, triggerRefresh, user, goal} = props

    const [editModalShow, setEditModalShow] = useState(false)

    const deleteAction = () =>{
        removeAction(user, goal._id, action._id)
            .then(() => 
                msgAlert({
                    heading:'removed successfuly',
                    message: removeActionSuccess,
                    variant: 'success'
                })
            )
                .then(() => triggerRefresh())
                .catch(() => 
                    msgAlert({
                        heading:'oh no!',
                        message: removeActionFailure,
                        variant: 'danger'
                    })
               
                )
    }

    return (
        <>
        <hr/>
       <hr/>

        <div style={{border:'black solid 1px'}}>
            
            <h1 className='p-4' style={{backgroundColor:'#fdf86d', backgroundImage: 'linear-gradient(315deg, #fdf86d 0%, #bddcf1 74%)', fontSize:'10px'}}> <span style={{fontFamily:'PT Serif, serif', fontSize:'15px'}}>{props.action.action}</span></h1>
            <small className='p-4'> Frequency: {action.frequency}</small><br/>
                <Button 
                    style={{backgroundColor:'black', border:'black'}}
                    className='m-2' 
                   
                    onClick={() => setEditModalShow(true)}
                    >
                    Update 
                </Button>
                <Button 
                    style={{backgroundColor:'black', border:'black'}}
                    className='m-2' 
                  
                    onClick={() => deleteAction()}
                    >
                    Delete 
                </Button>
                <br/>
                <Button
                    style={{backgroundColor:'white', color: 'black', border:'black solid 1px'}}
                    className='m-2' 
                    ><Link to={'/routine'} style={{color:'black'}}>Add to your Daily Routine</Link>
                    
                </Button>
        </div>
        <div>
        <p className='p-3' style={{fontSize:'25px'}}></p>
         
        </div>
        
        
        
        {/* <Card className='m-2'>
            <Card.Header>
                {props.action.action}
                <Card.Body>

                </Card.Body>
            </Card.Header>
            <Card.Footer>
                <small></small>
                <Button className='m-2' variant="danger"
                        onClick={() => setEditModalShow(true)}
                >
                    Update Action
                </Button>
                <Button className='m-2' variant="danger"
                        onClick={() => deleteAction()}
                >
                    Delete Toy
                </Button>
            </Card.Footer>

        </Card> */}
        <EditActionModal
            user={user}
            goal={goal}
            action={action}
            show={editModalShow}
            handleClose={() => setEditModalShow(false)}
            msgAlert={msgAlert}
            triggerRefresh={triggerRefresh}
        />
        </>
    )
}

export default ActionShow