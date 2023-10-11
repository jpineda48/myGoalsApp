import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import ActionForm from "../shared/ActionForm";
import { createAction } from "../../api/action";
import { updateActionFailure, updateActionSuccess } from "../shared/AutoDismissAlert/messages";
import { updateAction } from "../../api/action";



const EditActionModal = (props) => {
    const{ user, goal, show, handleClose, updateGoal, msgAlert, triggerRefresh} = props
    const [action, setAction] = useState(props.action)
    const onChange = (e) => {
        e.persist()
        setAction(prevAction => {
            const updatedName= e.target.name
            const updatedValue= e.target.value
    
            const updatedAction = {[updatedName ]: updatedValue}
            return{
                ...prevAction, ...updatedAction
            }
        })
     }

     const onSubmit = (e) => {
        e.preventDefault()
        updateAction( user, goal._id, action)
            .then(()=> handleClose())
            .then(() => {
                msgAlert({
                    heading: 'oh yeah!',
                    message: updateActionSuccess,
                    variant: 'sucess'
                })

            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'oh no!',
                    message: updateActionFailure,
                    variant: 'danger'
                })
            })

     }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <ActionForm 
            action={action}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Update the Action'

            />
        </Modal.Header>
    </Modal>
  )
}

export default EditActionModal