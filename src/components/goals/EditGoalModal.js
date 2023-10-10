import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import GoalForm from "../shared/GoalForm";
import {updateGoalFailure, updateGoalSuccess} from "../shared/AutoDismissAlert/messages";
import { updateGoal } from "../../api/goal";



const EditGoalModal = (props) => {
    const{ user,  show, handleClose, updateGoal, msgAlert, triggerRefresh} = props
    const [goal, setGoal] = useState(props.goal)
    const onChange = (e) => {
        e.persist()
        setGoal(prevGoal => {
            const updatedName= e.target.name
            const updatedValue= e.target.value
    
            const updatedGoal = {[updatedName ]: updatedValue}
            return{
                ...prevGoal, ...updatedGoal
            }
        })
     }

     const onSubmit = (e) => {
        e.preventDefault()
        updateGoal(user, goal)
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
            <GoalForm 
            goal={goal}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Update Goal'

            />
        </Modal.Header>
    </Modal>
  )
}

export default EditGoalModal
