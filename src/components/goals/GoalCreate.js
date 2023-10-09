import { useState } from 'react'
import {createGoal } from '../../api/goal'
import { createGoalFailure, createGoalSucess } from '../shared/AutoDismissAlert/messages'
import GoalForm from '../shared/GoalForm'
const GoalCreate = (props) => {
    const {user, msgAlert} = props

    const [goal, setGoal] = useState({
        catagory: '',
        title: '',
        start_date: '',
        end_date: '',
        description: '',
        status: ''
    })

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
    return(
        <GoalForm 
        goal={goal} 
        handleChange={onChange} 
        handleSubmit={null}
        heading="add a new goal"
        />
    )

}

export default GoalCreate