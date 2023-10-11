import {useState} from 'react'
import{Card, Button} from 'react-bootstrap'
import { removeAction } from '../../api/action'
import { removeActionFailure, removeActionSuccess  } from '../shared/AutoDismissAlert/messages'
import EditActionModal from './EditActionModal'

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
        <Card className='m-2'>
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

        </Card>
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