import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import RoutineForm from "../shared/RoutineForm";
import {updateGoalFailure, updateGoalSuccess} from "../shared/AutoDismissAlert/messages";
import { updateRoutine } from "../../api/routine";



const EditRoutineModal = (props) => {
    const{ user,  show, handleClose, updateRoutine, msgAlert, triggerRefresh} = props
    const [routine, setRoutine] = useState(props.routine)
    const onChange = (e) => {
        e.persist()
        setRoutine(prevRoutine => {
            const updatedName= e.target.name
            const updatedValue= e.target.value
    
            const updatedRoutine = {[updatedName ]: updatedValue}
            return{
                ...prevRoutine, ...updatedRoutine
            }
        })
     }

     const onSubmit = (e) => {
        e.preventDefault()
        updateRoutine(user, routine)
            .then(()=> handleClose())
            .then(() => {
                msgAlert({
                    heading: 'oh yeah!',
                    message: updateGoalSuccess,
                    variant: 'sucess'
                })

            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'oh no!',
                    message: updateGoalFailure,
                    variant: 'danger'
                })
            })

     }


  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <RoutineForm 
            routine={routine}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Update Routine'

            />
        </Modal.Header>
    </Modal>
  )
}

export default EditRoutineModal
