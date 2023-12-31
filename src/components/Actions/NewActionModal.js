import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import ActionForm from "../shared/ActionForm";
import { createAction } from "../../api/action";
import { createActionFailure, createActionSuccess } from "../shared/AutoDismissAlert/messages";



const NewActionModal = (props) => {
    const{ user, goal, show, handleClose, updateGoal, msgAlert, triggerRefresh} = props
    const [action, setAction] = useState({})
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
        createAction(goal._id, action)
            .then(()=> handleClose())
            .then(() => {
                msgAlert({
                    heading: 'oh yeah!',
                    message: createActionSuccess,
                    variant: 'sucess'
                })

            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'oh no!',
                    message: createActionFailure,
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
            heading='Set a action to achive a goal'

            />
        </Modal.Header>
    </Modal>
  )
}

export default NewActionModal
