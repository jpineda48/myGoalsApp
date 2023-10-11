import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import ActionForm from "../shared/ActionForm";
import {updateGoalFailure, updateGoalSuccess} from "../shared/AutoDismissAlert/messages";
import { updateGoal } from "../../api/goal";



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

    //  const onSubmit = (e) => {
    //     e.preventDefault()
    //     updateGoal(user, goal)
    //         .then(()=> handleClose())
    //         .then(() => {
    //             msgAlert({
    //                 heading: 'oh yeah!',
    //                 message: updateGoalSuccess,
    //                 variant: 'sucess'
    //             })

    //         })
    //         .then(() => triggerRefresh())
    //         .catch(() => {
    //             msgAlert({
    //                 heading: 'oh no!',
    //                 message: updateGoalFailure,
    //                 variant: 'danger'
    //             })
    //         })

    //  }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <ActionForm 
            action={action}
            handleChange={onChange}
            handleSubmit={null}
            heading='Set a action to achive a goal'

            />
        </Modal.Header>
    </Modal>
  )
}

export default NewActionModal
